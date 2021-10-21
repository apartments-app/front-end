import styled from "styled-components";

import NewListingHeader from "./NewListingHeader";
import NewListingBody from "./NewListingBody";
import NewListingType from "./NewListingType";
import NewListingField from "./NewListingField";
import NewListingLabel from "./NewListingLabel";
import NewListingInput from "./NewListingInput";
import NewListingBottomNav from "./NewListingBottomNav";
import NewListingButton from "./NewListingButton";
import NewListingDualSlider from "./NewListingDualSlider";

const NewListingTypeWrapper = styled.div`
  display: flex;

  & > div:not(:first-child) {
    margin-left: 9px;
  }
`;

const NewListingUnitInformation = () => {
  return (
    <>
      <NewListingHeader step={1} />
      <NewListingBody>
        <NewListingField>
          <NewListingLabel>HOUSING TYPE</NewListingLabel>
          <NewListingTypeWrapper>
            <NewListingType>
              <img src="/media/house-sm.svg" alt="house" />
              House
            </NewListingType>
            <NewListingType>
              <img src="/media/apt-sm.svg" alt="apartment" />
              Apartment
            </NewListingType>
            <NewListingType>
              <img src="/media/townhome-sm.svg" alt="townhome" />
              Townhome
            </NewListingType>
          </NewListingTypeWrapper>
        </NewListingField>

        <NewListingField>
          <NewListingLabel htmlFor="monthly-rent">MONTHLY RENT</NewListingLabel>
          <NewListingInput
            id="monthly-rent"
            placeholder="$3400"
          ></NewListingInput>
        </NewListingField>

        <NewListingField style={{ flexDirection: "row" }}>
          <NewListingField style={{ maxWidth: "72px" }}>
            <NewListingLabel htmlFor="beds"># OF BEDS</NewListingLabel>
            <NewListingInput
              style={{ paddingLeft: "0px", textAlign: "center" }}
              id="beds"
              placeholder="2"
            ></NewListingInput>
          </NewListingField>

          <NewListingField style={{ maxWidth: "90px", marginLeft: "20px" }}>
            <NewListingLabel htmlFor="baths"># OF BATHS</NewListingLabel>
            <NewListingInput
              style={{ paddingLeft: "0px", textAlign: "center" }}
              id="baths"
              placeholder="2"
            ></NewListingInput>
          </NewListingField>
        </NewListingField>
        <NewListingField>
          <NewListingLabel style={{ marginBottom: "45px" }}>
            # OF TENANTS ALLOWED
          </NewListingLabel>
          <NewListingDualSlider></NewListingDualSlider>
        </NewListingField>

        <NewListingBottomNav>
          <NewListingButton>Back</NewListingButton>
          <NewListingButton>Next</NewListingButton>
        </NewListingBottomNav>
      </NewListingBody>
    </>
  );
};

export default NewListingUnitInformation;
