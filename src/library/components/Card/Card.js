import React from "react";
import { Container, BackgroundColor, Title } from "./CardStyles";
import { Link } from "./CardStyles";
import { Images } from "../../../resources/Images";
export const Card = ({ detail, url = "/characters" }) => {
  const LIMIT_STRING = 60;

  const parseUrl = (url) => {
    let urlParse = url.split("http")[1];
    return "https" + urlParse;
  };
  if (detail) {
    return (
      <Link to={`${url}/${detail.id}`}>
        <Container
          url={
            detail.thumbnail
              ? `${parseUrl(detail.thumbnail.path)}.${
                  detail.thumbnail.extension
                } `
              : Images.bookCover
          }
        >
          <BackgroundColor />
          <Title>
            {detail.name &&
              (detail.name.length < LIMIT_STRING
                ? detail.name
                : detail.name.slice(0, LIMIT_STRING) + "...")}
            {detail.title &&
              (detail.title.length < LIMIT_STRING
                ? detail.title
                : detail.title.slice(0, LIMIT_STRING) + "...")}
          </Title>
        </Container>
      </Link>
    );
  }
  return <></>;
};
