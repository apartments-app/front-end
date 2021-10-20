import { useState } from "react";
import styled from "styled-components";

import Container from "./ProfileStyles/Container";
import HeaderText from "./ProfileStyles/HeaderText";
import InfoText from "./ProfileStyles/InfoText";
import ProfileLabel from "./ProfileStyles/ProfileLabel";
import InputStyle from "./ProfileStyles/InputStyle";
import BottomNav from "./Bottom-Nav";

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
  width: 35%;
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
  width: 32%;
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

const ProfileCreation = () => {
  const [inputs, setInputs] = useState({});
  const [bday, setBday] = useState({
    birthday: "",
    birthmonth: "",
    birthyear: ""
  })
  const [textarea, setTextArea] = useState("");
  const [range, setRange] = useState(30)

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };

  const handleBirthdayChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBday(values => ({...values, [name]: value}))
  };

  const handleTextChange = (event) => {
    setTextArea(event.target.value);
  };

  const handleRangeChange = (event) => {
    setRange(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs); 
  };
 
  return (
    <Container>
      <HeaderText>Profile Creation</HeaderText>
      <InfoText style={{marginTop: "2px"}}>
      Just fill out your personal info once and it will be shared with every housing application. This info will be visible to other people who join the waitlist so you can find potential apartmate matches. You can edit your info at any time through your profile. 
      </InfoText>

      {/*FORM*/}
      <form onSubmit={handleSubmit}>
        {/*Personal Details*/}
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

        {/*Biography*/}
        <div style={{marginTop: "43px"}} />
        <InfoText style={{display: "block"}}>
          Tell us a bit about yourself
        </InfoText>
        <ProfileLabel style={{marginTop: "4px"}}>
          Biography  
          <InputBio
            name="inpuNBio"
            value={textarea}  
            onChange={handleTextChange}          
            placeholder="Type answer here separated by commas"
          />
        </ProfileLabel>

        {/*Qualities*/}
        <ProfileLabel style={{marginTop: "13px"}}>
          Qualities
          <InfoText style={{display: "block", marginTop: "6px"}}>
            Drag the slider to indicate how much you identify between these pairs of adjectives. This is just to give a brief overview of how you would prefer to live in a unit. 
          </InfoText>
        </ProfileLabel>
        
        <button>Back</button>
        <button>Next</button>
      </form>
      <br /> 
      <BottomNav /> 
    </Container>
  );
};

export default ProfileCreation;
