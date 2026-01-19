import { fetchWeather } from "./task2";

(async () => {
  try {
    const res = await fetchWeather({ city: "London" });
    console.log("SUCCESS:", res);
  } catch (err) {
    console.error("ERROR:", err);
  }
})();
