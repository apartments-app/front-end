import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios, { Axios } from "axios";

import Container from "./ProfileStyles/Container";
import HeaderText from "./ProfileStyles/HeaderText";
import InfoText from "./ProfileStyles/InfoText";
import ProfileLabel from "./ProfileStyles/ProfileLabel";
import InputStyle from "./ProfileStyles/InputStyle";
import BottomNav from "./BottomNav";
import Button from "./Button";
import BackLink from "./ProfileStyles/BackLink";
import "./ProfileStyles/InputRange.css";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`;

const BirthdayLabel = styled.label`
  display: block;
  text-align: left;
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #ff4b96;
  padding: 0 0 0px 0;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  position: relative;
  align-items: flex-start;
  justify-content: space-between;
`;

const InputDate = styled.input`
  width: 23%;
  height: 37px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  margin-top: 5px;
  margin-bottom: 14px;
  margin-right: 11px;

  text-align: center;
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #787878;
`;

const InputMonth = styled.input`
  width: 38%;
  height: 39px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  margin-top: 5px;
  margin-bottom: 14px;
  margin-right: 11px;

  text-align: center;
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #787878;
`;

const InputYear = styled.input`
  width: 34%;
  height: 37px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  margin-top: 5px;
  margin-bottom: 14px;

  text-align: center;
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #787878;
`;

const InputBio = styled.textarea`
  display: block;
  width: 100%;
  height: 101px;
  box-sizing: border-box;
  background: #ffffff;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #f4f4f4;
  margin-top: 5px;
  margin-bottom: 14px;
  padding-left: 13px;

  font-family: Cabin;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  padding-left: 13px;
  padding-top: 5px;
  color: #787878;
`;

// the form we will submit, just not filled out yet
const blankForm = {
  "email": '',
  "password": '',
  "role": 0,
  "first_name": '',
  "last_name": '',
  "birthday": '',
  "phone": '',
  "bio": ''
}

const ProfileCreation = () => {

  // manage state for the form we will submit
  const [signupForm, setSignupForm] = useState(blankForm);

  // onclick handler, once 'register' is clicked, we will send the form to the backend
  const register = (newUser) => {
    Axios.post("https://apartmates-be.herokuapp.com/api/auth/register", newUser)
      .then((response => {
        console.log(response)
      }))
      .catch((error) => {
        console.log("error" + error)
      })
      .finally(() => {
        setSignupForm(blankForm)
        console.log("success")
        // use usehistory or something to take us to the home page?
      })
  }

  const [inputs, setInputs] = useState({});
  const [bday, setBday] = useState({
    birthday: "",
    birthmonth: "",
    birthyear: "",
  });

  const [textarea, setTextArea] = useState("");
  
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleBirthdayChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBday((values) => ({ ...values, [name]: value }));
  };

  const handleTextChange = (event) => {
    setTextArea(event.target.value);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <Container>
      <Section>
        <HeaderText>Profile Creation</HeaderText>
        <InfoText style={{ marginTop: "2px" }}>
          Just fill out your personal info once and it will be shared with every
          housing application. This info will be visible to other people who
          join the waitlist so you can find potential apartmate matches. You can
          edit your info at any time through your profile.
        </InfoText>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <ProfileLabel>
            Full Name
            <InputStyle
              type="text"
              name="fullname"
              value={inputs.fullname}
              onChange={handleInputChange}
              placeholder="Type answer here"
            />
          </ProfileLabel>

          <BirthdayLabel>Birth Date</BirthdayLabel>
          <InputSection>
            <InputDate
              type="text"
              name="birthday"
              value={bday.birthday}
              onChange={handleBirthdayChange}
              placeholder="Day"
            />
            <InputMonth
              type="text"
              name="birthmonth"
              value={bday.birthmonth}
              onChange={handleBirthdayChange}
              placeholder="Month"
            />
            <InputYear
              type="text"
              name="birthyear"
              value={bday.birthyear}
              onChange={handleBirthdayChange}
              placeholder="Year"
            />
          </InputSection>

          <ProfileLabel>
            Phone Number
            <InputStyle
              type="number"
              name="phonenumber"
              value={inputs.phonenumber}
              onChange={handleInputChange}
              placeholder="Type answer here"
            />
          </ProfileLabel>

          <ProfileLabel>
            Email
            <InputStyle
              type="email"
              name="email"
              value={inputs.email}
              onChange={handleInputChange}
              placeholder="Type answer here"
            />
          </ProfileLabel>

          {/* Biography */}
          <div style={{ marginTop: "43px" }} />
          <InfoText style={{ display: "block" }}>
            Tell us a bit about yourself
          </InfoText>
          <ProfileLabel style={{ marginTop: "4px" }}>
            Biography
            <InputBio
              name="biography"
              value={textarea}
              onChange={handleTextChange}
              placeholder="Type answer here separated by commas"
            />
          </ProfileLabel>

          {/* Buttons */}
          <div
            style={{
              display: "block",
              width: "100%",
              textAlign: "right",
            }}
          >
            <BackLink to="/">Back</BackLink>
            <Button onClick = {register}
              primary
              style={{
                width: "103px",
                height: "40px",
                display: "inline-block",
                fontSize: "18px",
              }}
            >
              Register
            </Button>
          </div>
        </form>
      </Section>
      <br />
      <div style={{ display: "block", width: "100%" }}>
        <BottomNav />
      </div>
    </Container>
  );
};

export default ProfileCreation;
