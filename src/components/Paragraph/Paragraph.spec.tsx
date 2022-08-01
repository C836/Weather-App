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
});
