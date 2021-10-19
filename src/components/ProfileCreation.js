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

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleTextChange = (event) => {
    setTextArea(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs); 
  };

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
      <form onSubmit={handleSubmit}>
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
        <BirthdayLabel>
          Birth Date
        </BirthdayLabel>
          <InputDate 
            type="number" 
            name="birthdate"
            value={inputs.birthdate}
            onChange={handleInputChange} 
            placeholder="Day" 
          />
          <InputMonth 
            type="text" 
            name="birthmonth"
            value={inputs.birthmonth}
            onChange={handleInputChange}  
            placeholder="Month" 
          />
          <InputYear
            type="number" 
            name="birthyear"
            value={inputs.birthyear}
            onChange={handleInputChange}  
            placeholder="Year" 
          />
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
        <InfoText>
          Tell us a bit about yourself
        </InfoText>
        <ProfileLabel>
          Biography  
          <InputBio
            value={textarea}  
            onChange={handleTextChange}          
            placeholder="Type answer here separated by commas"
          />
        </ProfileLabel>
        <button>Back</button>
        <button>Next</button>
      </form>
    </Container>
  );
};

export default ProfileCreation;
