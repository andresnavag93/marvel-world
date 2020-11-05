import React from "react";
import { TablePagination } from "../TablePagination/TablePagination";
import { STabs, STab, STabPanel, STabList } from "./TabsStyles";

export const Tabs = ({ type = "Characters", itemId, loading }) => {
  if (loading) {
    return <></>;
  }

  let table1, table2, tab1, tab2;
  if (type === "Characters") {
    tab1 = "Comics";
    table1 = (
      <TablePagination
        type="Comics"
        url="/comics"
        apiUrl="/characters"
        itemId={`/${itemId}`}
      />
    );
    tab2 = "Stories";
    table2 = (
      <TablePagination
        type="Stories"
        url="/stories"
        apiUrl="/characters"
        itemId={`/${itemId}`}
      />
    );
  } else if (type === "Comics") {
    tab1 = "Characters";
    table1 = (
      <TablePagination
        type="Characters"
        url="/characters"
        apiUrl="/comics"
        itemId={`/${itemId}`}
      />
    );
    tab2 = "Stories";
    table2 = (
      <TablePagination
        type="Stories"
        url="/stories"
        apiUrl="/comics"
        itemId={`/${itemId}`}
      />
    );
  } else {
    tab1 = "Characters";
    table1 = (
      <TablePagination
        type="Characters"
        url="/characters"
        apiUrl="/stories"
        itemId={`/${itemId}`}
      />
    );
    tab2 = "Comics";
    table2 = (
      <TablePagination
        type="Comics"
        url="/comics"
        apiUrl="/stories"
        itemId={`/${itemId}`}
      />
    );
  }

  return (
    <STabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <STabList>
        <STab>{tab1}</STab>
        <STab>{tab2}</STab>
      </STabList>
      <STabPanel>{table1}</STabPanel>
      <STabPanel>{table2}</STabPanel>
    </STabs>
  );
};
