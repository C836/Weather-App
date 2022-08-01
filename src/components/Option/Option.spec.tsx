/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Option } from "./Option.styled";

describe("Option component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Option />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
