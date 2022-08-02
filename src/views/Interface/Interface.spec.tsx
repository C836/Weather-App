/**
 * @jest-environment jsdom
 */

import React from "react";
import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { Interface } from "./Interface";

const setOptions = (): void => {};
const setData = (): void => {};

describe("Should render Interface component correctly", () => {
  it("should render Interface component", () => {
    const container = renderer.create(<Interface setOptions={setOptions} setData={setData} />).toJSON();
    const renderedComponent = render(<Interface setOptions={setOptions} setData={setData} />);
    expect(renderedComponent).toBeTruthy;
    expect(container).toMatchSnapshot();
  });
});
