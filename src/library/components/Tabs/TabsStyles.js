import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { Colors } from "../../../resources/Colors";

export const STabs = styled(Tabs)``;

export const STabList = styled(TabList)`
  list-style-type: none;
  padding: 0.4rem;
  display: flex;
  justify-content: center;
`;

export const STab = styled(Tab)`
  margin-top: 2rem;
  /* margin-right: 1rem; */
  border: 2px solid ${Colors.white};
  border-radius: 2rem 2rem 0rem 0rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  user-select: none;
  cursor: arrow;

  &.is-selected {
    border-bottom: 2px solid ${Colors.darkGray};
    color: ${Colors.white};
    background: ${Colors.red};
  }
`;

export const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  border-top: 1px solid ${Colors.white};
  padding: 4px;
  margin-top: -5px;

  &.is-selected {
    display: block;
  }
`;
