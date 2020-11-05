import styled from "styled-components";
import { Colors } from "../../../resources/Colors";

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
  margin-top: 4rem;
`;

export const Title = styled.h1`
  margin: 2rem 0;
  text-align: center;
  margin-right: 2rem;
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

export const Container = styled.div`
  max-width: 1240px;
  height: 350px;
  margin: 0 auto;
`;
