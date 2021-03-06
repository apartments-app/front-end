import React, { useState, useEffect, useCallback } from "react";
import { useHistory, Link } from "react-router-dom";

import styled from "styled-components";
import Wrapper from "./Wrapper";
import Button from "./Button";
import logo from "../media/logo.png";
import BottomNav from "./BottomNav";
import NewListingHeader from "./NewListing/NewListingHeader";
import NewListingGeneralInformation from "./NewListing/NewListingGeneralInformation";
import NewListingUnitInformation from "./NewListing/NewListingUnitInformation";
import NewListingPhotos from "./NewListing/NewListingPhotos";

const Landing = () => {
  const Header = styled.h1`
    font-family: "Grand Hotel", cursive, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 42px;
    color: #ffffff;
  `;
  const Slogan = styled.div`
    font-family: "Cabin";
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;

    color: #ffffff;
  `;

  const Logo = styled.img`
    width: 50%;
    /* color: #FF4B96; */
  `;

  return (
    <Wrapper background="linear-gradient(180deg, #FB99C4 0%, #FFA1BB 26.05%, #FFAD8A 64.71%, #FFD49E 100%)">
      <Logo src={logo} />
      <Header>Apartmates</Header>
      <Slogan>Find your place and the people to share it with</Slogan>
      <Button>Sign up with Facebook</Button>
      <Link to="/Signup1"> 
        <Button >Sign up with Email</Button>
      </Link>
      <Link to="/SignIn">
        <Button>Login</Button>
      </Link>

      {/* <BottomNav /> */}
      {/* <BottomNav canAlternate={true} /> */}
      {/* <NewListingHeader step={0} />
      <NewListingHeader step={1} />
      <NewListingHeader step={2} />
      <NewListingHeader step={3} /> */}
      {/* <NewListingGeneralInformation /> */}
      {/* <NewListingUnitInformation /> */}
      <NewListingPhotos />
    </Wrapper>
  );
};

export default Landing;
