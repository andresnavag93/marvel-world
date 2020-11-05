import React from "react";
import { Section, Container, BackgroundColor, Title } from "./BannerStyles";

export const Banner = ({ title, bgImage, bgPosition = "center" }) => {
  return (
    <Section>
      <Container bgImage={bgImage} bgPosition={bgPosition}>
        <Title>{title}</Title>
        <BackgroundColor />
      </Container>
    </Section>
  );
};
