/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import "jest-styled-components";
import renderer from "react-test-renderer";
import { Home } from "./Home";
import * as S from "./Home.styled";
import { WeatherDataConfig } from "../../types";

const setData = (): void => {};

describe("Should render Home component correctly", () => {
  it("should render Home component", () => {
    const container = renderer.create(<Home setData={setData} />).toJSON();
    const renderedComponent = render(<Home setData={setData} />);
    expect(renderedComponent).toBeTruthy;
    expect(container).toMatchSnapshot();
  });

  it("styled components should match modifiers style rules", () => {
    const container = renderer.create(<S.Home disabled />).toJSON();
    expect(container).toHaveStyleRule("opacity", "0");
    expect(container).toHaveStyleRule("pointer-events", "none");
  });
});
