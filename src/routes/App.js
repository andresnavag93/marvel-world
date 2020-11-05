import React, { Suspense, lazy } from "react";
import { GlobalStyles } from "../resources/GlobalStyles";
import { Router } from "@reach/router";
import { Footer } from "../library/components/Footer/Footer";

const Home = lazy(() => import("../pages/Home"));
const Characters = lazy(() => import("../pages/Characters"));
const Comics = lazy(() => import("../pages/Comics"));
const Stories = lazy(() => import("../pages/Stories"));
const Bookmarks = lazy(() => import("../pages/Bookmarks"));
const NotFound = lazy(() => import("../pages/NotFound"));
const InfoDetail = lazy(() => import("../pages/InfoDetail"));

export const App = () => {
  return (
    <Suspense fallback={<div />}>
      <GlobalStyles />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Characters path="/characters" />
        <Comics path="/comics" />
        <Stories path="/stories" />
        <Bookmarks path="/bookmarks" />
        <InfoDetail path="/characters/:id" type="Characters" />
        <InfoDetail path="/comics/:id" type="Comics" />
        <InfoDetail path="/stories/:id" type="Stories" />
      </Router>
      <Footer />
    </Suspense>
  );
};
