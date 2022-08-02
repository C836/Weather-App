/**
 * @jest-environment jsdom
 */

import { searchRequest } from "./../search";
import "dotenv/config";

const GEOAPIFY_KEY = process.env.VITE_GEOAPIFY_KEY!;

describe("Read data from geoapify API", () => {
  test("Get successful result of the API call", async () => {
    const query = "brazil";
    await searchRequest(query, GEOAPIFY_KEY).then((response) => {
      expect(response).toBeDefined();
      expect(response.length).toBeGreaterThan(0);
    });
  });
});
