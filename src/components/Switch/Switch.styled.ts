import styled from "styled-components";

export const Switch = styled.input.attrs({ type: "checkbox" })`
  box-sizing: border-box;
  outline: none;
  position: relative;
  z-index: 1;
  margin: 2px;
  padding: 0;
  cursor: pointer;
  width: 48px;
  height: 24px;
  overflow: hidden;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  ::after,
  ::before {
    box-sizing: border-box;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;

    transition: left 0.15s cubic-bezier(0.25, 0.8, 0.25, 0.1),
      transform 0.15s ease-in;
  }

  ::before {
    background-color: #1c2428;
    opacity: 50%;
    width: 100%;
    height: 100%;
    border-radius: 28px;
  }

  :checked::before {
    background-color: #d2b3c1;
    opacity: 1;
  }

  ::after {
    margin: 4px 0 0 4px;
    background: #fff;
    width: 16px;
    height: 16px;
    border-radius: 100%;
  }

  :checked::after {
    left: 24px;
  }
`;
