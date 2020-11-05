import React from "react";
import { Images } from "../resources/Images";
import { Banner } from "../library/components/Banner/Banner";
import { Header } from "../library/components/Header/Header";

export default () => {
  return (
    <>
      <Header />
      <Banner title="404 Not Found" bgImage={Images.notFoundBanner} />
    </>
  );
};
