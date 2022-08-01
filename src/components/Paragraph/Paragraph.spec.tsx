/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Paragraph } from "./Paragraph.styled";

describe("Paragraph component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Paragraph />).toJSON();
    expect(container).toMatchSnapshot();
  });

  it("applies styles according to passed props", () => {
    const container = renderer
      .create(<Paragraph size="1rem" align="center" lineHeight={"10px"} />)
      .toJSON();
    expect(container).toHaveStyleRule("font-size", "1rem");
    expect(container).toHaveStyleRule("text-align", "center");
    expect(container).toHaveStyleRule("line-height", "10px");
  });
});
