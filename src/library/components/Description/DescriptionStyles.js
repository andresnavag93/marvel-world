import styled, { css } from "styled-components";
import { Breakpoints } from "../../../resources/Breakpoints";
import { Colors } from "../../../resources/Colors";

export const Container = styled.div`
  max-width: 1240px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem auto;
  @media ${Breakpoints.tablet} {
    flex-direction: column;
  }
`;

export const Img = styled.div`
  width: 250px;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${Colors.darkGray};
  border-radius: 2rem;
  padding: 3rem;
  margin: 1rem;
  ${(props) =>
    props.url &&
    css`
      background-image: url(${props.url});
    `}
`;

export const Div = styled.div`
  align-self: left;
  width: 500px;
  margin-left: 1rem;
  padding: 1rem;
  @media ${Breakpoints.tablet} {
    align-content: center;
    width: 250px;
  }
`;

export const Button = styled.button`
  border-radius: 2rem;
  padding: 1rem;
  border: 1px solid red;
  color: white;

  &:hover {
    background-color: ${Colors.red};
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  margin: 2rem 0;
`;

export const Paragraph = styled.p`
  margin: 2rem 0;
`;
