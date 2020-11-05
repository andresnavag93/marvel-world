import styled from "styled-components";
import { Colors } from "../../../resources/Colors";

export const Form = styled.form`
  margin: 3rem 0rem;
`;

export const InputSearch = styled.input`
  background-color: ${Colors.black};
  color: ${Colors.white};
  border: 1px solid ${Colors.white};
  height: 3rem;
  width: 25rem;
  font-size: 2rem;
  padding: 2rem;
  margin-top: 0rem;
`;

export const InputButton = styled.input`
  background-color: ${Colors.black};
  border-radius: 2rem;
  margin: 1rem 2rem;
  padding: 1rem;
  border: 1px solid red;
  color: ${Colors.white};
  font-size: 2rem;

  &:hover {
    background-color: ${Colors.red};
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const Span = styled.span`
  margin: 1rem;
  font-size: 2rem;
`;

export const Select = styled.select`
  background-color: ${Colors.black};
  color: ${Colors.white};
  font-size: 2rem;
  padding: 1rem;
  padding-right: 4rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 94%;
  background-position-y: 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1.5rem;
  justify-content: center;
`;

export const Label = styled.label`
  margin: 1.5rem;
`;
