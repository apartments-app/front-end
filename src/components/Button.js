import React from "react";
import styled, { css } from "styled-components";

// TO DO: Button Styles
// Primary: Pink BG, w/Icon, White Text
// Secondary: White BG w/Icon, Pink Text
// Inverse: White BG, no Icon, Pink Text
// Plain: Pink BG, no Icon, White Text

const MainBtn = styled.button`
  font-size: 1em;
  width: 80%;
  padding: 10px 20px;
  border: 3px solid;
  border-color: #ff4b96;
  border-radius: 20px;
  color: ${(props) => (props.primary ? "#FFF" : "#FF4B96")};
  background-color: ${(props) => (props.primary ? "#FF4B96" : "#FFF")};
`;
const Button = ({ primary, secondary, inverse, plain, ...props }) => {
  return (
    <MainBtn
      primary={primary}
      secondary={secondary}
      inverse={inverse}
      plain={plain}
      {...props}
    />
  );
};
export default Button;
