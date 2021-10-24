import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "./ProfileStyles/Container";
import HeaderText from "./ProfileStyles/HeaderText";
import InfoText from "./ProfileStyles/InfoText";
import ProfileLabel from "./ProfileStyles/ProfileLabel";
import InputStyle from "./ProfileStyles/InputStyle";
import Button from "./Button";
import BackLink from "./ProfileStyles/BackLink";
import BottomNav from "./BottomNav";

const InputSelectStyle = styled.select`
  display: block;
  width: 100%;
  height: 37px;
  background: #FFFFFF; 
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: 1px solid #F4F4F4;
  margin-top: 10px;
  margin-bottom: 29px; 
  margin-left: -4px;
  padding-left: 10px;
  
  font-family: "Cabin", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #C4C4C4;
`

const ProfileScreening = () => {
  const [inputs, setInputs] = useState({});  

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for signing up!")
    console.log(inputs) 
  }

  return (
    <Container>
      <HeaderText>Screening Questions</HeaderText>
      <InfoText>
      Some housing managements have specific requirements for potential tenants. Please answer these screening questions truthfully to ensure that you are qualified for the waitlists that you want to join. This information is confidential and is only shared with the property managers to the extent required by law.
      </InfoText>
      <form onSubmit={handleSubmit}>
        <ProfileLabel style={{marginTop: "26px"}}>
          Have you ever filed a petition of bankruptcy?
          <InputSelectStyle
            name="bankruptcyPetition"
            value={inputs.bankruptcyPetition}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </InputSelectStyle>
        </ProfileLabel>
        <ProfileLabel style={{marginTop: "26px"}}>
          Have you ever been evicted from any tenancy or had an eviction notice?
          <InputSelectStyle
            name="evictionNotice"
            value={inputs.evictionNotice}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </InputSelectStyle>
        </ProfileLabel>
        <ProfileLabel style={{marginTop: "26px"}}>
          Have you ever willfully and intentionally refused to pay any rent when due?
          <InputSelectStyle
            name="paymentRefusal"
            value={inputs.paymentRefusal}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </InputSelectStyle>
        </ProfileLabel>
        <ProfileLabel style={{marginTop: "26px"}}>
          Have you ever been convicted of a misdemeanor or felony other than a traffic or parking violation?
          <InputSelectStyle
            name="anyFelony"
            value={inputs.anyFelony}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </InputSelectStyle>
        </ProfileLabel>
        <ProfileLabel style={{marginTop: "26px"}}>
          Have you ever been convicted of the illegal manufacture or distribution of a controlled substance?
          <InputSelectStyle
            name="illegalSubstance"
            value={inputs.illegalSubstance}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </InputSelectStyle>
        </ProfileLabel>
        <ProfileLabel style={{marginTop: "26px"}}>
          Do you have any pets or children? If so, how many?
          <InputStyle
            style={{
              marginLeft: "-4px", 
              marginRight: "50px",
              paddingLeft: "10px"
            }}
            type="text"
            name="petsChildren"
            value={inputs.petsChildren}
            onChange={handleInputChange}
            placeholder="Type answer here"
          />
        </ProfileLabel>
        <ProfileLabel style={{marginTop: "26px"}}>
          Do you require any disability accomodations or other forms of assistance?
          <InputSelectStyle
            name="disablityAssistance"
            value={inputs.disablityAssistance}
            onChange={handleInputChange}
          >
            <option value="no">No</option>
            <option value="yes">Yes</option>
          </InputSelectStyle>
        </ProfileLabel>
        {/* Buttons */}
        <div 
          style={{
            display: "block",
            width: "100%",
            textAlign: "right"
          }}
        >
          <BackLink to="/Profile">Back</BackLink>
          <Link to="/ProfilePage">
            <Button 
              primary
              style={{
                fontSize: "18px",
                width: "103px",
                height: "40px",
                display: "inline-block",
                
                marginBottom: "20px"
              }}
            >Submit
            </Button>
          </Link>
        </div>
      </form>
      <br /> 
      <BottomNav /> 
    </Container>
  );
};

export default ProfileScreening;
