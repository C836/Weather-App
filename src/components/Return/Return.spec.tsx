/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Return } from "./Return.styled";

describe("Return component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Return />).toJSON();
    expect(container).toMatchSnapshot();
  });

  it("applies styles according to passed props", () => {
    const container = renderer.create(<Return disabled />).toJSON();
    expect(container).toHaveStyleRule("opacity", "0");
    expect(container).toHaveStyleRule("pointer-events", "none");
  });
});
