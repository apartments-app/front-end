import React from "react";
import Button from "./Button";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Div = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #fb99c4 0%,
    #ffa1bb 26.05%,
    #ffad8a 64.71%,
    #ffd49e 100%
  );
  padding: 32px;
`;

const primaryButtonStyle = {
  "margin": "0 auto",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "width": "311px",
  "height": "54px",
};

const secondaryButtonStyle = {
  "margin": "31px auto",
  "display": "flex",
  "justifyContent": "center",
  "alignItems": "center",
  "width": "311px",
  "height": "54px",
};

const Span = styled.span`
  color: #787878;
  transform-origin: bottom right;
  position: absolute;
  right: 32px;
  bottom: 32px;
  text-decoration: underline;
`;

const SignupListings = () => {
  return (
    <Div style={{ position: "relative" }}>
      <Button primary style={primaryButtonStyle}>
        <FontAwesomeIcon
          icon={faHouseUser}
          style={{ color: "white", height: "42px", width: "36px" }}
        />
        <p
          style={{
            flexGrow: "3",
            fontFamily: "Cabin, sans-serif",
            margin: "0px",
            fontSize: "20px",
          }}
        >
          Your Listings
        </p>
      </Button>
      <p
        style={{
          color: "white",
          fontSize: "14px",
        }}
      >
        This is a list of all your current properties. Once a listing is added,
        the system will automatically verify that you are the owner of each
        property.
      </p>
      <hr
        style={{
          color: "white",
          width: "235px",
          borderStyle: "solid",
        }}
      />
      <Button secondary style={secondaryButtonStyle}>
        <p
          style={{
            flexGrow: "3",
            fontFamily: "Cabin, sans-serif",
            margin: "0px",
            fontSize: "20px",
          }}
        >
          New Listing
        </p>
        <FontAwesomeIcon
          icon={faPlus}
          style={{
            color: "#ff4b96",
            height: "42px",
            width: "21px",
          }}
        />
      </Button>
      <Span>Skip?</Span>
    </Div>
  );
};

export default SignupListings;

// TODO: Add logic to component. Looks good but does nothing.
