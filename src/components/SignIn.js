import React from "react";
import styled from "styled-components";
import logo from "../media/logo.png";
import Button from "./Button";

const Logo = styled.img`
  width: 77px;
  filter: brightness(0%) invert(1);
  margin-top: 100px;
`;

const Header = styled.h1`
  font-family: "Grand Hotel", cursive, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 56px;
  line-height: 42px;
  color: #ffffff;
  margin-top: 10px;
`;

const Slogan = styled.div`
  font-family: "Cabin";
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
`;

const Div = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    #cd77db 0%,
    #a1d8ff 54.53%,
    #ffffff 88.31%,
    #ffffff 100%
  );
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px auto 0px auto;
  width: 100%;
`;

const buttonStyle = {
  "align-self": "flex-end",
  "padding": "5px 10px",
  "width": "auto",
  "borderRadius": "10px",
};

const inputStyle = {
  "boxSizing": "borderBox",
  "fontSize": "1em",
  "padding": "10px 20px",
  "border": "1px solid",
  "borderColor": "#ff4b96",
  "borderRadius": "10px",
  "alignSelf": "stretch",
};

const SignIn = () => {
  return (
    <Div>
      <div class="logoWrapper">
        <Logo src={logo} />
        <Header>Apartmates</Header>
        <Slogan>Find your place and the people to share it with</Slogan>
      </div>
      <Form>
        <label htmlFor=""></label>
        <input type="text" style={inputStyle} placeholder="username" />
        <label htmlFor=""></label>
        <input
          type="password"
          style={{ ...inputStyle, "marginTop": "10px" }}
          placeholder="password"
        />
        <Button primary style={buttonStyle}>
          Sign In
        </Button>
      </Form>
    </Div>
  );
};

export default SignIn;
