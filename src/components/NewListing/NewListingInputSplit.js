import styled from "styled-components";

const NewListingInputSplit = styled.div`
  background: transparent;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  width: 100%;
  & > input {
    border-radius: 0;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export default NewListingInputSplit;
