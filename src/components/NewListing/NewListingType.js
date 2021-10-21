import styled from "styled-components";

const NewListingType = styled.div`
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: Cabin;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #787878;
  padding: 11px;
  display: flex;
  align-items: center;

  & > img {
    margin-right: 7px;
  }

  &:hover {
    > img {
      filter: brightness(0) invert(1);
    }
    color: #fff;
    background: #ff4b96;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    cursor: pointer;
  }
`;

export default NewListingType;
