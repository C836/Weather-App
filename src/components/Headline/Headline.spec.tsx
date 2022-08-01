/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Headline } from "./Headline.styled";

describe("Headline component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Headline />).toJSON();
    expect(container).toMatchSnapshot();
  });
});
