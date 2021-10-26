import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "./ProfileStyles/Container";
import HeaderText from "./ProfileStyles/HeaderText";
import InfoText from "./ProfileStyles/InfoText";
import BottomNav from "./BottomNav";
import Button from "./Button";
import BackLink from "./ProfileStyles/BackLink";

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SliderSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: flex-start;
  margin-bottom: 60px;
`;

const SliderInput = styled.input`
  padding-bottom: 0px;
  margin-bottom: 0px;
  width: 100%;
  box-sizing: border-box;
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
  font-size: 16px;
  line-height: -10px;
  color: #787878;
  flex-direction: row;
  margin-top: 5px;
`;

const ProfileQuallities = () => {
  const [range, setRange] = useState({});

  const handleRangeChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setRange((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Section>
        {/* Qualities */}
        <HeaderText>Qualities</HeaderText>
        <InfoText
          style={{
            marginTop: "5px",
            marginBottom: "70px",
          }}
        >
          Drag the slider to indicate how much you identify between these pairs
          of adjectives. This is just to give a brief overview of how you would
          prefer to live in a unit.
        </InfoText>

        {/* Qualities Slide Selectors */}
        <form onSubmit={handleSubmit}>
          <SliderSection>
            <SliderInput
              type="range"
              name="tidyComfy"
              min="0"
              max="100"
              defaultValue="25"
              value={range.tidyComfy}
              onChange={handleRangeChange}
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
              defaultValue="25"
              value={range.zenRowdy}
              onChange={handleRangeChange}
            />
            <SliderLabelDiv>
              <SliderLabel>Zen</SliderLabel>
              <SliderLabel>Rowdy</SliderLabel>
            </SliderLabelDiv>
          </SliderSection>

          <SliderSection>
            <SliderInput
              type="range"
              name="privateSocial"
              min="0"
              max="100"
              defaultValue="25"
              value={range.privateSocial}
              onChange={handleRangeChange}
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
              defaultValue="25"
              value={range.homebodyOutgoing}
              onChange={handleRangeChange}
            />
            <SliderLabelDiv>
              <SliderLabel>Homebody</SliderLabel>
              <SliderLabel>Outgoing</SliderLabel>
            </SliderLabelDiv>
          </SliderSection>

          <SliderSection>
            <SliderInput
              type="range"
              name="minimalCollector"
              min="0"
              max="100"
              defaultValue="25"
              value={range.minimalCollector}
              onChange={handleRangeChange}
            />
            <SliderLabelDiv>
              <SliderLabel>Minimal</SliderLabel>
              <SliderLabel>Collector</SliderLabel>
            </SliderLabelDiv>
          </SliderSection>

          <SliderSection style={{marginBottom: "15px"}}>
            <SliderInput
              type="range"
              name="earlybirdNightowl"
              min="0"
              max="100"
              defaultValue="25"
              value={range.earlybirdNightowl}
              onChange={handleRangeChange}
            />
            <SliderLabelDiv>
              <SliderLabel>Early Bird</SliderLabel>
              <SliderLabel>Night Owl</SliderLabel>
            </SliderLabelDiv>
          </SliderSection>

          {/* Buttons */}
          <div
            style={{
              display: "block",
              width: "100%",
              textAlign: "right",
              marginBottom: "14px",
            }}
          >
            <BackLink to="/Profile">Back</BackLink>
            <Link to="/Screening">
              <Button
                primary
                style={{
                  fontSize: "18px",
                  width: "103px",
                  height: "40px",
                  marginBottom: "30px"
                }}
              >
                Next
              </Button>
            </Link>
          </div>
        </form>
      </Section>
      <div style={{ display: "block", width: "100%" }}>
        <BottomNav />
      </div>
    </Container>
  );
};

export default ProfileQuallities;
