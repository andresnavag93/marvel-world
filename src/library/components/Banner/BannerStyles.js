import styled, { css } from "styled-components";
import { Breakpoints } from "../../../resources/Breakpoints";
import { Colors } from "../../../resources/Colors";

export const Section = styled.section`
  position: relative;
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  width: 100vw;
  color: white;
  display: flex;
  text-align: center;
  font-size: 8rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.bgImage &&
    props.bgPosition &&
    css`
      background-image: url(${props.bgImage});
      background-position: ${props.bgPosition};
    `}
`;

export const BackgroundColor = styled.div`
  height: 500px;
  width: 100vw;
  position: absolute;
  opacity: 0.5;
  background-color: ${Colors.red};
`;

export const Title = styled.h1`
  z-index: 1;
  font-size: 8rem;
  @media ${Breakpoints.tablet} {
    font-size: 4rem;
  }
`;
