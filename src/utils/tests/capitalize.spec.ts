import "jest";
import { capitalize } from "./../";

describe("Capitalize function", () => {
  it("should return capitalized string", () => {
    const result = capitalize("lorem Ipsum");
    expect(result).toEqual("Lorem Ipsum");
  });
});
