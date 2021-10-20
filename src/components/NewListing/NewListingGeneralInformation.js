import NewListingHeader from "./NewListingHeader";
import NewListingBody from "./NewListingBody";
import NewListingLabel from "./NewListingLabel";
import NewListingInput from "./NewListingInput";
import NewListingField from "./NewListingField";
import NewListingInputSplit from "./NewListingInputSplit";
import NewListingInputSplitButton from "./NewListingSplitButton";
import NewListingCancel from "./NewListingCancel";
import NewListingButton from "./NewListingButton";
import NewListingBottomNav from "./NewListingBottomNav";

const NewListingGeneralInformation = () => {
  return (
    <>
      <NewListingHeader step={0} />
      <NewListingBody>
        <NewListingField>
          <NewListingLabel htmlFor="name-complex">
            NAME OF COMPLEX (optional)
          </NewListingLabel>
          <NewListingInputSplit>
            <NewListingInput
              id="name-complex"
              placeholder="Galliard Estates"
            ></NewListingInput>
            <NewListingInputSplitButton></NewListingInputSplitButton>
          </NewListingInputSplit>
        </NewListingField>
        <NewListingField>
          <NewListingLabel htmlFor="stress-address">
            STREET ADDRESS
          </NewListingLabel>
          <NewListingInput
            id="stress-address"
            placeholder="4421 Cryptic Ave."
          ></NewListingInput>
        </NewListingField>
        <NewListingField>
          <NewListingLabel htmlFor="room-number">
            ROOM NUMBER (optional)
          </NewListingLabel>
          <NewListingInput id="room-number" placeholder="4b"></NewListingInput>
        </NewListingField>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "311px",
            width: "100%",
          }}
        >
          <NewListingField style={{ width: "103px" }}>
            <NewListingLabel htmlFor="state">STATE</NewListingLabel>
            <NewListingInputSplit>
              <NewListingInput id="state" placeholder="CA"></NewListingInput>
              <NewListingInputSplitButton
                list={["IL", "WI", "TX", "WA"]}
                isState={true}
              ></NewListingInputSplitButton>
            </NewListingInputSplit>
          </NewListingField>
          <NewListingField style={{ width: "180px" }}>
            <NewListingLabel htmlFor="zip-code">ZIP CODE</NewListingLabel>
            <NewListingInput
              id="zip-code"
              placeholder="90321"
            ></NewListingInput>
          </NewListingField>
        </div>
        <NewListingBottomNav>
          <NewListingCancel>Cancel</NewListingCancel>
          <NewListingButton>Next</NewListingButton>
        </NewListingBottomNav>
      </NewListingBody>
    </>
  );
};

export default NewListingGeneralInformation;
