import React from "react";
import styled, { css } from "styled-components";

const MainBtn = styled.button`
  font-size: 1em;
  width: 80%;
  padding: 10px 20px;
  margin: 20px 0;
  border: 1px solid;
  border-color: #ff4b96;
  border-radius: 20px;
  cursor: pointer;
  color: ${(props) => (props.primary ? "#FFF" : "#FF4B96")};
  background-color: ${(props) => (props.primary ? "#FF4B96" : "#FFF")};

  &:hover {
    background-color: ${(props) => (props.primary ? "#FFF" : "#FF4B96")};
    color: ${(props) => (props.primary ? "#FF4B96" : "#FFF")};
  }
`;

const Button = ({ primary, secondary, inverse, plain, ...props }) => {
  return <MainBtn primary={primary} secondary={secondary} {...props} />;
};
export default Button;
