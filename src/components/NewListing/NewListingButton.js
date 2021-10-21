import styled from "styled-components";

const NewListingButton = styled.div`
  background: #ff4b96;
  border: 3px solid #ff4b96;
  box-sizing: border-box;
  border-radius: 20px;

  font-family: Cabin;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  /* or 120% */
  width: 103px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: #ffffff;

  &:hover {
    color: #ff4b96;
    background: #ffffff;
    cursor: pointer;
  }
`;

export default NewListingButton;
