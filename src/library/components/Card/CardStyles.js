import styled, { css } from "styled-components";
import { Breakpoints } from "../../../resources/Breakpoints";
import { Colors } from "../../../resources/Colors";
import { Link as LinkRouter } from "@reach/router";

export const Container = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${Colors.darkGray};
  border-radius: 2rem;
  padding: 3rem;
  word-break: break-word;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  ${(props) =>
    props.url &&
    css`
      background-image: url(${props.url});
    `}

  &:hover h2 {
    display: block;
    font-size: 2rem;
    color: ${Colors.white};
    text-align: center;
  }

  &:hover div {
    opacity: 0.5;
    background-color: ${Colors.red};
  }

  @media ${Breakpoints.tablet} {
    & h2 {
      display: block;
      font-size: 2rem;
      color: ${Colors.white};
      text-align: center;
    }

    & div {
      opacity: 0.5;
      background-color: ${Colors.red};
    }
  }
`;

export const BackgroundColor = styled.div`
  width: 250px;
  height: 250px;
  position: absolute;
  border-radius: 2rem;
`;

export const Title = styled.h2`
  z-index: 1;
  display: none;
`;

export const Link = styled(LinkRouter)`
  text-decoration: none;
`;
