import React from "react";
import ContentLoader from "react-content-loader";
import { Colors } from "../../../resources/Colors";
import { Div } from "./LoaderStyles";

export const MyLoader = (props) => (
  <Div>
    <ContentLoader
      speed={1.5}
      width={1080}
      height={250}
      viewBox="0 0 1080 250"
      backgroundColor={Colors.darkGray}
      foregroundColor={Colors.red}
      {...props}
    >
      <rect x="0" y="0" rx="20" ry="20" width="250" height="250" />
      <rect x="270" y="0" rx="20" ry="20" width="250" height="250" />
      <rect x="540" y="0" rx="20" ry="20" width="250" height="250" />
      <rect x="810" y="0" rx="20" ry="20" width="250" height="250" />
      <rect x="1080" y="0" rx="20" ry="20" width="250" height="250" />
    </ContentLoader>
  </Div>
);

export const MyLoaderSmall = (props) => (
  <Div>
    <ContentLoader
      speed={1.5}
      width={250}
      height={250}
      viewBox="0 0 250 250"
      backgroundColor={Colors.darkGray}
      foregroundColor={Colors.red}
      {...props}
    >
      <rect x="0" y="0" rx="20" ry="20" width="250" height="250" />
    </ContentLoader>
  </Div>
);
