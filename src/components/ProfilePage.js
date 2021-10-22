import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BottomNav from "./BottomNav";
import Button from "./Button";
import BackLink from "./ProfileStyles/BackLink";
import "./ProfileStyles/InputRange.css";

import profilePhoto from "../media/profilePhoto.png";

// Qualities
// sliders - 2 column layout

// Pink Button - Send a Message

// Other Pink Button ??

// Bottom Nav

const sampleProfile = {
  fullName: "Jasmine Tran",
  //photoUrl: "/media/profilePhoto.svg",
  //photoUrl: "/media/house-sm.svg",
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
  zenRowdy: 50,
  privateSocial: 50,
  homebodyOutgoing: 50,
  MinimalCollector: 50,
  EarlybirdNightowl: 50,
  bankruptcyPetition: false,
  evictionNotice: false,
  paymentRefusal: false,
  anyFelony: false,
  illegalSubstance: true,
  petsChildren: "has 3 dogs",
  petFriendy: true,
  disablityAssistance: false,
};

const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  margin-left: 32px;
  margin-right: 32px;
`;

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

      <SectionMiddle>
        <ProfilePageLabel>Qualities</ProfilePageLabel>
      </SectionMiddle>

      <Section style={{justifyContent: "center", marginTop: "26px"}}>
        <Button
          primary
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "54px",
            fontSize: "20px"
          }}
        >
          Send Message
        </Button>
      </Section>
      <BottomNav />
    </Container>
  );
};

export default ProfilePage;
