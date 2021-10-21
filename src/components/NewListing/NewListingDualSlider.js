import styled from "styled-components";

const Slider = styled.input`
  &[type="range"] {
    position: absolute;
    top: 75px;
    background: #c4c4c4;
    height: 3px;
    width: 100%;
    margin: 0;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    width: none%;
    height: none;
    cursor: none;
    box-shadow: none;
    background: none;
    border-radius: none;
    border: none;
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;

    height: 20px;
    width: 16px;
    border-radius: 0;
    background-image: url("/media/cursor.svg");
    background-size: 16px;
    background-repeat: no-repeat;
    margin-top: 20px;
  }
`;

const Mark = styled.span`
  display: inline-block;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #c4c4c4;
`;

const MarkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;

  counter-reset: mark;

  & > span {
    counter-increment: mark;
    color: #787878;
    position: relative;
  }

  & > span::before {
    content: counter(mark);

    position: absolute;
    bottom: 23px;
    right: 4px;

    font-family: Cabin;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    /* or 171% */

    /* General Text */

    color: #787878;
  }
`;

const NewListingDualSlider = () => {
  return (
    <>
      <MarkWrapper>
        {Array.from({ length: 6 }, (v, i) => {
          return <Mark key={i}></Mark>;
        })}
      </MarkWrapper>
      <Slider type="range" defaultValue="1" min="1" max="6" />
      <Slider type="range" defaultValue="6" min="1" max="6" />
    </>
  );
};

export default NewListingDualSlider;
