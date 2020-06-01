import styled, { keyframes } from "styled-components";
import Download from "../assets/download.svg";
import Card from "../assets/card.svg";

export const animation = keyframes`
 0% { cursor: url("frame1.gif"), auto; }
 100% { cursor: url("frame2.gif"), auto; }
`;

export const Container = styled.div`
  background-size: 8px;
  background-color: #ffe6f2;
  background-repeat: repeat;
  background-position: center;
  background-image: url("tile.svg");
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 25px;
  cursor: url("frame1.gif"), auto;
`;

export const Body = styled.div`
  height: calc(100vh - 40px);
  width: 100%;
  margin: 20px;
  background-color: #ffe6f2;
  border: 2px solid #0c55e8;
  display: flex;
  flex-direction: row;
`;

export const Hero = styled.span`
  font-size: 2rem;
  line-height: 1.5;
  font-family: Jost;
  font-weight: 600;
  color: #0c55e8;
`;

export const RightSection = styled.div`
  display: flex;
  flex-basis: 50%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  direction: rtl;
  padding: 0 40px 0 0;
  border-right: 1px solid #0c55e8;
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  align-items: flex-start;
  justify-content: center;
  padding: 0 40px 0 40px;
  border-left: 1px solid #0c55e8;
  overflow: auto;
`;

export const Highlight = styled.div`
  height: 10px;
  width: 0;
  background-color: #0c55e8;
  transition-timing-function: ease-in-out;
  transition: width 0.5s;
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  & > div {
    width: ${(props) => (props.hover ? "100%" : "0")};
    transition-timing-function: ease-in-out;
    transition: width 0.5s;
  }
`;

export const TopLeftCircle = styled.div`
  border-radius: 50%;
  height: 20px;
  width: 20px;
  position: fixed;
  top: 40px;
  left: 40px;
  background-color: #0c55e8;
`;

export const TopRightCircle = styled(TopLeftCircle)`
  right: 40px;
  left: auto;
`;

export const BottomLeftCircle = styled(TopLeftCircle)`
  top: auto;
  bottom: 40px;
`;

export const BottomRightCircle = styled(TopLeftCircle)`
  right: 40px;
  top: auto;
  left: auto;
  bottom: 40px;
`;

export const Text = styled(Hero)`
  font-size: 1.5rem;
  font-weight: 400;
`;

export const Caret = styled.div`
  opacity: 0;
  margin-left: 10px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #0c55e8;
  transition: opacity 0.3s;
`;

export const CaretTextWrapper = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-decoration-color: #0c55e8;

  :hover {
    & :first-child {
      opacity: 1;
      transition: opacity 0.3s;
    }
  }
  animation-name: ${animation};
  animation-duration: 300ms;
  animation-iteration-count: infinite;
`;

export const StyledDownload = styled(Download)`
  margin-left: 5px;
  height: 30px;
  width: 30px;
  path {
    fill: #0c55e8;
  }
`;

export const StyledCard = styled(Card)`
  height: 30px;
  width: 30px;
  margin-right: 5px;
  path {
    fill: #0c55e8;
  }
`;

export const Placeholder = styled.div`
  width: 100px;
  height: 3000px;
  background-color: red;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const SubText = styled(Hero)`
  font-size: 1rem;
  font-weight: 400;
  white-space: pre-wrap;
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 200px;
`;

export const IconWrapper = styled.div`
  display: flex;
  margin-right: 5px;
  height: 16px;
  width: 16px;
  svg > path {
    fill: #0c55e8;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 2px solid #0c55e830;
  border-right: 2px solid #0c55e830;
  border-bottom: 2px solid #0c55e830;
  border-left: 4px solid #0c55e8;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
