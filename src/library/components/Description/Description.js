import React from "react";
import {
  Container,
  Img,
  Div,
  Title,
  Button,
  Paragraph,
} from "./DescriptionStyles";
import { Images } from "../../../resources/Images";
import { MyLoaderSmall } from "../Loader/Loader";

export const Description = ({
  detail,
  loading = true,
  handleBookmark,
  bookmark,
}) => {
  return (
    <>
      {loading ? (
        <Container>
          <MyLoaderSmall />
          <Div>
            <Title>Loading....</Title>
          </Div>
        </Container>
      ) : (
        <Container>
          <Img
            url={
              detail.thumbnail
                ? `${detail.thumbnail.path}.${detail.thumbnail.extension} `
                : Images.bookCover
            }
          />

          <Div>
            <Title>Name</Title>
            <Paragraph>
              {detail.name}
              {detail.title}
            </Paragraph>
            <Title> Description</Title>
            <Paragraph>
              {" "}
              {detail.description} {!detail.description && "N/A"}{" "}
            </Paragraph>
            <Button onClick={handleBookmark}>
              {bookmark ? "Remove Bookmark" : "Add Bookmark"}
            </Button>
          </Div>
        </Container>
      )}
    </>
  );
};
