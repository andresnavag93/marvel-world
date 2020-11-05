import React from "react";
import { Images } from "../resources/Images";
import { Banner } from "../library/components/Banner/Banner";
import { TablePagination } from "../library/components/TablePagination/TablePagination";
import { Header } from "../library/components/Header/Header";

export default () => {
  return (
    <>
      <Header />
      <Banner title="Stories" bgImage={Images.storiesBanner} bgPosition="top" />
      <TablePagination type="Stories" url="/stories" />
    </>
  );
};
