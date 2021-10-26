import styled from "styled-components";

import NewListingHeader from "./NewListingHeader";
import NewListingBody from "./NewListingBody";
import NewListingField from "./NewListingField";
import NewListingLabel from "./NewListingLabel";
import NewListingBottomNav from "./NewListingBottomNav";
import NewListingButton from "./NewListingButton";

const Image = styled.div`
  width: 96px;
  height: 96px;
  background: #ffce90;
  border-radius: 20px;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const NewListingPhotos = () => {
  return (
    <>
      <NewListingHeader step={3} />
      <NewListingBody>
        <NewListingField>
          <NewListingLabel htmlFor="photos">PHOTOS</NewListingLabel>
          <ImageWrapper>
            {Array.from({ length: 4 }, (v, i) => {
              return <Image key={i}></Image>;
            })}
          </ImageWrapper>
        </NewListingField>
        <NewListingBottomNav>
          <NewListingButton>Back</NewListingButton>
          <NewListingButton
            style={{
              backgroundColor: "#F2A95D",
              borderColor: "#F2A95D",
              color: "#fff",
            }}
          >
            Finish
          </NewListingButton>
        </NewListingBottomNav>
      </NewListingBody>
    </>
  );
};

export default NewListingPhotos;
