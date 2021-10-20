import React from "react";
import styled, { css } from "styled-components";

const IconBtn = styled.button`
  font-size: 1em;
  width: 80%;
  padding: 10px 20px;
  margin: 20px 0;
  border: 1px solid;
  border-color: #ff4b96;
  border-radius: 20px;
  cursor: pointer;
  color: ${(props) => (props.plain ? "#FFF" : "#FF4B96")};
  background-color: ${(props) => (props.plain ? "#FF4B96" : "#FFF")};

  &:hover {
    background-color: ${(props) => (props.plain ? "#FFF" : "#FF4B96")};
    color: ${(props) => (props.plain ? "#FF4B96" : "#FFF")};
  }
`;
const IconButton = ({ icon, inverse, plain, ...props }) => {
  return <IconBtn icon={icon} inverse={inverse} plain={plain} {...props} />;
};
export default IconButton;
