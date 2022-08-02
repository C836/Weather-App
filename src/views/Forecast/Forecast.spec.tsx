/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Forecast } from "./Forecast";
import * as S from "./Forecast.styled";

describe("Should render Forecast component correctly", () => {
  it("should render Forecast component", () => {
    const container = renderer.create(<Forecast />).toJSON();
    const renderedComponent = render(<Forecast />);
    expect(renderedComponent).toBeTruthy;
    expect(container).toMatchSnapshot();
  });

  it("styled components should match modifiers style rules", () => {
    const container = renderer.create(<S.Forecast disabled />).toJSON();
    expect(container).toHaveStyleRule("opacity", "0");
    expect(container).toHaveStyleRule("pointer-events", "none");
  });
});
