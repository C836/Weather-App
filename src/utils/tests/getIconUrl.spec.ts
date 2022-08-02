import "jest";
import { getIconUrl } from "..";

describe("Get icon url", () => {
  it("should get url", () => {
    const result = getIconUrl("01d");
    expect(result).toEqual("http://openweathermap.org/img/wn/01d@2x.png");
  });
});
