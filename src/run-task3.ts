import { fetchWithRetry } from "./task3";

(async () => {
  try {
    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=mock_key";

    const response: any = await fetchWithRetry(url);

    console.log("✅ API Success");
    console.log(response.data);
  } catch (err: any) {
    console.error("❌ Final Error");
    console.error(err);
  }
})();
