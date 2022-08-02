import "jest";
import { getDate } from "./../";

describe("Get formatted date function", () => {
  it("should return formatted string", () => {
    const result = getDate('08/02/2022' , 'pt');
    expect(result).toEqual("Qua, 3 Ago");
  });

  it("should return formatted string", () => {
    const result = getDate('08/02/2022' , 'en');
    expect(result).toEqual("Wed, Aug 3");
  });

  it("should return formatted string", () => {
    const result = getDate('08/02/2022' , 'es');
    expect(result).toEqual("Mié, 3 Ago");
  });
});
