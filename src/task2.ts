import axios from "axios";

export interface WeatherInput {
  city: string;
}

export interface WeatherResponse {
  city: string;
  temp: number;
  conditions: string;
}

export interface WeatherError {
  error: "API_ERROR" | "VALIDATION_ERROR";
  message: string;
}

const cache = new Map<string, { data: WeatherResponse; expiry: number }>();

export const fetchWeather = async (
  cityInfo: WeatherInput,
): Promise<WeatherResponse> => {
  try {
    if (!cityInfo.city) {
      throw {
        error: "VALIDATION_ERROR",
        message: "City is required",
      };
    }

    const city = cityInfo.city;
    const now = Date.now();

    const cached = cache.get(city);
    if (cached && cached.expiry > now) {
      return cached.data;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=mock_key`;
    const response = await axios.get(url);

    const data: WeatherResponse = {
      city: response.data.name,
      temp: response.data.main.temp - 273.15,
      conditions: response.data.weather[0].main,
    };

    cache.set(city, { data, expiry: now + 60_000 });
    return data;
  } catch (err: any) {
    // console.error("Weather API error:", err);
    if (err.response) {
      if (err.response.status === 401) {
        throw {
          error: "API_ERROR",
          message: err.response.data,
        };
      }
      if (err.response.status === 404) {
        throw {
          status: err.response.status,
          error: "API_ERROR",
          message: "City not found",
        };
      }

      if (err.response.status === 429) {
        throw {
          status: err.response.status,
          error: "API_ERROR",
          message: "Rate limit exceeded",
        };
      }
    }

    if (err.error) throw err;

    throw {
      error: "API_ERROR",
      message: "Failed to fetch weather data",
    };
  }
};
