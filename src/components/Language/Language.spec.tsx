/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Language } from "./Language.styled";

describe("Language component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Language />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
