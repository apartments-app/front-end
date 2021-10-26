import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "./ProfileStyles/Container";
import BottomNav from "./BottomNav";
import Button from "./Button";
import "./ProfileStyles/InputRangeMini.css";
import profilePhoto from "../media/profilePhoto.png";

const sampleProfile = {
  id: 1,
  fullName: "Jasmine Tran",
  birthday: "18",
  birthmonth: "January",
  birthyear: "1997",
  age: 24,
  phonenumber: 2125550178,
  email: "jessicatran@gmail.com",
  biograhy:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
  interests: "Biking, hiking, painting, eating lots of good food",
  tidyComfy: 50,
  zenRowdy: 30,
  privateSocial: 75,
  homebodyOutgoing: 20,
  minimalCollector: 40,
  earlybirdNightowl: 30,
  bankruptcyPetition: false,
  evictionNotice: false,
  paymentRefusal: false,
  anyFelony: false,
  illegalSubstance: true,
  petsChildren: "has 3 dogs",
  petFriendy: true,
  disablityAssistance: false,
};

const Section = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
`;

const ProfilePageHeader = styled.h1`
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 24px;
  color: #ff4b96;
`;

const ProfilePhoto = styled.img`
  width: 107px;
  height: 107px;
`;

const ProfileInfoText = styled.p`
  font-family: Cabin, sans serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 5px;
  color: #000000;
`;

const MoveDateHeader = styled(ProfileInfoText)`
  font-weight: 700;
  color: #ff4b96;
  margin-bottom: 5px;
  margin-top: 35px;
`;

const SectionMiddle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: flex-start;
  margin-bottom: -8px;
`;

const ProfilePageLabel = styled.h2`
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #ff4b96;
  margin-bottom: -4px;
`;

const ProfileTextSmall = styled.p`
  font-family: Cabin, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
`;

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: flex-start;
  margin-bottom: 25px;
`;

const SliderInput = styled.input`
  padding-bottom: 0px;
  margin-bottom: 0px;
`;

const SliderLabelDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

const SliderLabel = styled.label`
  font-family: Cabin;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: -10px;
  color: #787878;
  flex-direction: row;
  margin-top: 5px;
`;

const ProfilePage = () => {
  return (
    <Container>
      <Section style={{ flexDirection: "row" }}>
        <ProfilePageHeader>{sampleProfile.fullName}</ProfilePageHeader>
      </Section>

      <Section>
        <ProfilePhoto src={profilePhoto} alt="profile"></ProfilePhoto>
        <div
          style={{
            marginLeft: "20px",
          }}
        >
          <ProfileInfoText>24 years old, has 3 dogs</ProfileInfoText>
          <ProfileInfoText>Pet friendly, drug friendly</ProfileInfoText>
          <MoveDateHeader>Preferred move in date:</MoveDateHeader>
          <ProfileInfoText>Thurs 7/1 - Sun 7/16</ProfileInfoText>
        </div>
      </Section>

      <SectionMiddle>
        <ProfilePageLabel>Biography</ProfilePageLabel>
        <ProfileTextSmall>{sampleProfile.biograhy}</ProfileTextSmall>
      </SectionMiddle>

      <SectionMiddle>
        <ProfilePageLabel>Interests</ProfilePageLabel>
        <ProfileTextSmall>{sampleProfile.interests}</ProfileTextSmall>
      </SectionMiddle>

      <SectionMiddle style={{ marginBottom: "50px" }}>
        <ProfilePageLabel>Qualities</ProfilePageLabel>
      </SectionMiddle>

      <SliderSection style={{ flexDirection: "row", marginTop: "15px" }}>
        <SliderSection style={{ marginRight: "29.81px" }}>
          <SliderInput
            type="range"
            name="tidyComfy"
            min="0"
            max="100"
            value={sampleProfile.tidyComfy}
          />
          <SliderLabelDiv>
            <SliderLabel>Tidy</SliderLabel>
            <SliderLabel>Comfy</SliderLabel>
          </SliderLabelDiv>
        </SliderSection>

        <SliderSection>
          <SliderInput
            type="range"
            name="zenRowdy"
            min="0"
            max="100"
            value={sampleProfile.zenRowdy}
          />
          <SliderLabelDiv>
            <SliderLabel>Zen</SliderLabel>
            <SliderLabel>Rowdy</SliderLabel>
          </SliderLabelDiv>
        </SliderSection>
      </SliderSection>

      <SliderSection style={{ flexDirection: "row", marginTop: "15px" }}>
        <SliderSection style={{ marginRight: "29.81px" }}>
          <SliderInput
            type="range"
            name="privateSocial"
            min="0"
            max="100"
            value={sampleProfile.privateSocial}
          />
          <SliderLabelDiv>
            <SliderLabel>Private</SliderLabel>
            <SliderLabel>Social</SliderLabel>
          </SliderLabelDiv>
        </SliderSection>

        <SliderSection>
          <SliderInput
            type="range"
            name="homebodyOutgoing"
            min="0"
            max="100"
            value={sampleProfile.homebodyOutgoing}
          />
          <SliderLabelDiv>
            <SliderLabel>Homebody</SliderLabel>
            <SliderLabel>Outgoing</SliderLabel>
          </SliderLabelDiv>
        </SliderSection>
      </SliderSection>

      <SliderSection style={{ flexDirection: "row", marginTop: "15px" }}>
        <SliderSection style={{ marginRight: "29.81px" }}>
          <SliderInput
            type="range"
            name="minimalCollector"
            min="0"
            max="100"
            value={sampleProfile.minimalCollector}
          />
          <SliderLabelDiv>
            <SliderLabel>Minimal</SliderLabel>
            <SliderLabel>Collector</SliderLabel>
          </SliderLabelDiv>
        </SliderSection>

        <SliderSection>
          <SliderInput
            type="range"
            name="earlybirdNightowl"
            min="0"
            max="100"
            value={sampleProfile.earlybirdNightowl}
          />
          <SliderLabelDiv>
            <SliderLabel>Early Bird</SliderLabel>
            <SliderLabel>Night Owl</SliderLabel>
          </SliderLabelDiv>
        </SliderSection>
      </SliderSection>

      <Section
        style={{
          justifyContent: "center",
          marginTop: "-30px",
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <Button
          primary
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "54px",
            fontSize: "20px",
          }}
        >
          Send Message
        </Button>
      </Section>
      <div style={{ display: "block", width: "100%" }}>
        <BottomNav />
      </div>
    </Container>
  );
};

export default ProfilePage;
