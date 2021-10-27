import React, { useState, useEffect } from "react";
import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";


const Container = styled.div`
  width: 100%;
  background: linear-gradient(
    180deg,
    #cd77db 0%,
    #a1d8ff 54.53%,
    #ffffff 88.31%,
    #ffffff 100%
  );
  font-family: "Cabin";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
`;

const RentalLanding = (props) => {


  return (
    <Wrapper background="background: linear-gradient(
      180deg,
      #cd77db 0%,
      #a1d8ff 54.53%,
      #ffffff 88.31%,
      #ffffff 100%
    )">
      <Link to="/Signup2">
        <Button inverse>Renter</Button>
      </Link>
      <Button inverse>Landlord</Button>
    </Wrapper>
    // <Container>

    // </Container>
  );
};
export default RentalLanding;
