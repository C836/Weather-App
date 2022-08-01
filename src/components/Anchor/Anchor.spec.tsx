/**
 * @jest-environment jsdom
 */

import React from "react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Anchor } from "./Anchor.styled";

describe("Anchor component", () => {
  it("should match snapshot", () => {
    const container = renderer.create(<Anchor />).toJSON();
    expect(container).toMatchSnapshot();
  });

  it("should match modifiers style rules", () => {
    const container = renderer.create(<Anchor />).toJSON();
    expect(container).toHaveStyleRule('text-decoration', 'underline', {
      modifier: ':hover',
    })
  });
});
