import React from "react";
import { Images } from "../resources/Images";
import { Banner } from "../library/components/Banner/Banner";
import { TablePagination } from "../library/components/TablePagination/TablePagination";
import { Header } from "../library/components/Header/Header";

export default () => {
  return (
    <>
      <Header />
      <Banner title="Comics" bgImage={Images.comicsBanner} bgPosition="top" />
      <TablePagination type="Comics" url="/comics" />
    </>
  );
};
