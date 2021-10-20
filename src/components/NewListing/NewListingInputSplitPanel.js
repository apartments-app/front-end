import styled from "styled-components";

const NewListingInputSplitPanel = ({
  showPanel,
  list = ["Galliard Estates", "Joyce Manor", "The Milk Hotel"],
  isState = false,
}) => {
  const Div = styled.div`
    display: ${showPanel ? "block" : "none"};
    position: absolute;
    top: 100%;
    right: -3px;

    width: ${isState ? "102px" : "311px"};
    background: #ffffff;
    border: 3px solid #ff4b96;
    box-sizing: border-box;
    border-radius: 20px;
    padding-left: 26px;
    padding-right: 13px;
  `;

  const Ol = styled.ol`
    list-style-type: none;
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    text-align: left;

    font-family: Cabin;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    /* General Text */

    color: #787878;
    flex: 0 0 60%;
    & > li {
      border-bottom: 1px solid #fd9cc2;
      padding: 9px;

      margin-bottom: 3px;
    }
  `;

  const Icon = styled.div`
    height: 42px;
    margin-left: auto;

    display: flex;
    align-items: center;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    padding-top: 9px;
    padding-bottom: 9px;
  `;

  const AddComplex = styled.span`
    margin-left: 16px;
    font-family: Cabin;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    /* Logo */

    color: #ff4b96;
  `;

  return (
    <Div>
      <div style={{ display: "flex" }}>
        <Ol>
          {list.map((v) => {
            return <li key={v}>{v}</li>;
          })}
        </Ol>
        <Icon>
          <img src="/media/arrow-up.svg" alt="icon of arrow up" />
        </Icon>
      </div>
      {!isState && (
        <ButtonContainer>
          <img src="/media/cross.svg" alt="icon of cross" />
          <AddComplex>Add new complex</AddComplex>
        </ButtonContainer>
      )}
    </Div>
  );
};

export default NewListingInputSplitPanel;
