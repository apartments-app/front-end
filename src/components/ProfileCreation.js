import { useState } from "react";

import styled from "styled-components";
import Container from "./ProfileStyles/Container";
import HeaderText from "./ProfileStyles/HeaderText";
import InfoText from "./ProfileStyles/InfoText";
import ProfileLabel from "./ProfileStyles/ProfileLabel";
import InputStyle from "./ProfileStyles/InputStyle";

const ProfileCreation = () => {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextArea] = useState("");

  const BirthdayLabel = styled.label`
    display: block;
    text-align: left;
    font-family: "Cabin", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    color: #ff4b96;
    padding: 0 0 0px 0; 
 `;

  const InputDate = styled.input`
    width: 21%;
    height: 37px;
    background: #FFFFFF; 
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 1px solid #F4F4F4;
    margin-top: 5px;
    margin-bottom: 14px;
    margin-right: 11px;     
  `;

  const InputMonth = styled.input`
    width: 38.5%;
    height: 37px;
    background: #FFFFFF; 
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 1px solid #F4F4F4;
    margin-top: 5px;
    margin-bottom: 14px;
    margin-right: 11px;
  `;

  const InputYear = styled.input`
    width: 32.8%;
    height: 37px;
    background: #FFFFFF; 
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 1px solid #F4F4F4;
    margin-top: 5px;
    margin-bottom: 14px;
  `;

  const InputBio = styled.textarea`
    display: block;
    width: 100%;
    height: 101px;
    background: #FFFFFF;
    box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: 1px solid #F4F4F4;
    margin-top: 5px;
    margin-bottom: 14px; 
  `

  return (
    <Container>
      <HeaderText>Profile Creation</HeaderText>
      <InfoText>
      Just fill out your personal info once and it will be shared with every housing application. This info will be visible to other people who join the waitlist so you can find potential apartmate matches. You can edit your info at any time through your profile. 
      </InfoText>
      <form>
        <ProfileLabel>
          Full Name
          <InputStyle 
            type="text" 
            name="fullname" 
            placeholder="Type answer here" 
          />
        </ProfileLabel>
        <BirthdayLabel>
          Birth Date
        </BirthdayLabel>
          <InputDate 
            type="number" 
            name="date" 
            placeholder="Day" 
          />
          <InputMonth 
            type="text" 
            name="month" 
            placeholder="Month" 
          />
          <InputYear
            type="number" 
            name="Year" 
            placeholder="Year" 
          />
        <ProfileLabel>
          Phone Number
          <InputStyle
            type="number"
            name="phoneNumnber"
            placeholder="Type answer here"
          />
        </ProfileLabel>
        <ProfileLabel>
          Email
          <InputStyle 
            type="email" 
            name="email" 
            placeholder="Type answer here" 
          />
        </ProfileLabel>
        <InfoText>
          Tell us a bit about yourself
        </InfoText>
        <ProfileLabel>
          Biography  
          <InputBio
            value={textarea}            
            placeholder="Type answer here separated by commas"
          />
        </ProfileLabel>
        <button>Next</button>
        <button>Back</button>
      </form>
    </Container>
  );
};

export default ProfileCreation;
