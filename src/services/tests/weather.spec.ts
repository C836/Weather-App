/**
 * @jest-environment jsdom
 */

import { weatherRequest } from "./../weather";
import "dotenv/config";

const WEATHER_KEY = process.env.VITE_WEATHER_KEY!;

describe("Read data from weather API", () => {
  test("Get successful result of the API call", async () => {
    const query = "brazil";
    await weatherRequest(query, "pt", WEATHER_KEY).then((response) => {
      expect(response).toBeDefined();
    });
  });
});
