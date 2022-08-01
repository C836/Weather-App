/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Switch } from "./Switch.styled";

describe("Switch component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Switch />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
