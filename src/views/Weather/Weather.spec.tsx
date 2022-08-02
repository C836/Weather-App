/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Weather } from "./Weather";
import * as S from "./Weather.styled";

const setData = (): void => {};

describe("Should render Weather component correctly", () => {
  it("should render Weather component", () => {
    const container = renderer.create(<Weather setData={setData} />).toJSON();
    const renderedComponent = render(<Weather setData={setData} />);
    expect(renderedComponent).toBeTruthy;
    expect(container).toMatchSnapshot();
  });

  it("styled components should match modifiers style rules", () => {
    const container = renderer.create(<S.Weather disabled />).toJSON();
    expect(container).toHaveStyleRule("opacity", "0");
    expect(container).toHaveStyleRule("pointer-events", "none");
  });
});
