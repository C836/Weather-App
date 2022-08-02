/**
 * @jest-environment jsdom
 */

import { forecastRequest } from "./../forecast";
import "dotenv/config";

const WEATHER_KEY = process.env.VITE_WEATHER_KEY!;

describe("Read data from geoapify API", () => {
  test("Get successful result of the API call", async () => {
    const query = "brazil";
    await forecastRequest(query, 'pt', WEATHER_KEY).then((response) => {
      expect(response).toBeDefined();
      expect(response.length).toBeGreaterThan(0);
    });
  });
});
