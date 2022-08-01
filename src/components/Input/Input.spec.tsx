/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Input } from "./Input.styled";

describe("Input component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Input />).toJSON();
    expect(container).toMatchSnapshot();
  });

  it("applies styles according to passed props", () => {
    const container = renderer.create(<Input activeList />).toJSON();
    expect(container).toHaveStyleRule("border-bottom-left-radius", "0");
    expect(container).toHaveStyleRule("border-bottom-right-radius", "0");
  });
});
