import "jest";
import { getTemp } from "./../";

describe("Get converted temperature", () => {
  it("should return correct scale", () => {
    const result = getTemp(200, "C");
    expect(result).toEqual("-73°");
  });

  it("should return correct scale", () => {
    const result = getTemp(200, "F");
    expect(result).toEqual("-100°");
  });
});

