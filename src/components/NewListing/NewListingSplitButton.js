import styled from "styled-components";
import React, { useState } from "react";

import NewListingInputSplitPanel from "./NewListingInputSplitPanel";

const InputSplitButton = styled.div`
  position: relative;
  background: #ff4b96;
  border: 3px solid #ff4b96;
  box-sizing: border-box;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  font-size: 14px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
`;

const NewListingInputSplitButton = ({ list, isState }) => {
  const [showPanel, setShowPanel] = useState(false);

  function onClick() {
    setShowPanel((v) => !v);
  }

  return (
    <InputSplitButton onClick={onClick}>
      <img src="/media/arrow-down.svg" alt="icon of arrow down" />
      <NewListingInputSplitPanel
        showPanel={showPanel}
        list={list}
        isState={isState}
      ></NewListingInputSplitPanel>
    </InputSplitButton>
  );
};

export default NewListingInputSplitButton;
