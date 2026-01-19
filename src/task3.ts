import axios from "axios";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export const fetchWithRetry = async (url: string, retries = 2) => {
  let attempt = 0;
  while (attempt <= retries) {
    try {
      return await axios.get(url);
    } catch (err: any) {
      console.error("API Error:", err.message);
      if (attempt === retries) {
        throw {
          error: "API_ERROR",
          message: "Failed after retries",
        };
      }
      await delay(Math.pow(2, attempt) * 1000);
      attempt++;
    }
  }
};
