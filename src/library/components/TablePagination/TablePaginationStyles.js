import styled from "styled-components";
import { Colors } from "../../../resources/Colors";

export const Container = styled.div`
  max-width: 1444px;
  text-align: center;
  flex: 1;
  margin: 0 auto;
  margin-top: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const H2 = styled.h2`
  margin: 3rem auto;
`;

export const StyledPaginateContainer = styled.div`
  margin: 0 auto;

  .pagination {
    margin: 2rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    outline: none;
  }
  .pagination > .active > a {
    background-color: ${Colors.white};
    border-color: ${Colors.white};
    color: ${Colors.white};
  }
  .pagination > li > a {
    border: 1px solid ${Colors.white};
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
  }
  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: ${Colors.white};
    border-color: ${Colors.white};
    color: ${Colors.darkGray};
    outline: none;
  }
  .pagination > li > a,
  .pagination > li > span {
    color: ${Colors.white};
  }
  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
