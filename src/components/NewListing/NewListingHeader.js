import styled from "styled-components";

// assign appropriate step to display correct header for new listing.
// type integer
// default value 0
// length of array 4
// starting index 0
// ending index 3
// if you are at first step, assign step 0
// if you are at second step, assign step 1.
// follow array index system.
const NewListingHeader = ({ step = 0 }) => {
  const Container = styled.div`
    background-color: #fff;
    height: 169px;

    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `;

  const Title = styled.h1`
    /* New Listing */
    font-family: Cabin;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    /* or 100% */

    text-align: center;

    /* General Text */
    margin-top: 30px;
    margin-bottom: 30px;
    color: #787878;
  `;

  const SubTitle = styled.h2`
    font-family: Cabin;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 24px;
    /* or 240% */

    text-align: center;

    /* General Text */

    color: #787878;
  `;

  const StatusBar = styled.div`
    background: #787878;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 311px;
    height: 16px;
    align-self: center;
  `;

  const maxStep = 4;
  const Status = styled.div`
    width: ${100 / (maxStep - step)}%;
    height: 16px;
    background: #ff4b96;
    border-radius: 20px;
  `;

  const subTitles = [
    "GENERAL INFORMATION",
    "UNIT INFORMATION",
    "UNIT SPECIFICS",
    "PHOTOS",
  ];

  return (
    <Container>
      <Title>New Listing</Title>
      <StatusBar>
        <Status></Status>
      </StatusBar>
      <SubTitle>{subTitles[step]}</SubTitle>
    </Container>
  );
};

export default NewListingHeader;
