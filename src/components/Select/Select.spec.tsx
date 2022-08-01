/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Select } from "./Select.styled";

describe("Select component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Select />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
