import React from "react";
import { CardsHorizontalList } from "../library/components/CardsHorizontalList/CardsHorizontalList";
import { Images } from "../resources/Images";
import { Banner } from "../library/components/Banner/Banner";

import { useSelector, useDispatch } from "react-redux";
import { Header } from "../library/components/Header/Header";

export default () => {
  const dispatch = useDispatch();

  const { characters, charactersBookmarks } = useSelector(
    (state) => state.charactersReducer
  );
  const { comics, comicsBookmarks } = useSelector(
    (state) => state.comicsReducer
  );
  const { stories, storiesBookmarks } = useSelector(
    (state) => state.storiesReducer
  );
  return (
    <>
      <Header />
      <Banner
        title="Bookmarks"
        bgImage={Images.booksmarksBanner}
        bgPosition="top"
      />

      {charactersBookmarks.length > 0 && (
        <CardsHorizontalList
          title="Characters"
          url="/characters"
          data={charactersBookmarks}
        />
      )}
      {comicsBookmarks.length > 0 && (
        <CardsHorizontalList
          title="Comics"
          url="/comics"
          data={comicsBookmarks}
        />
      )}
      {storiesBookmarks.length > 0 && (
        <CardsHorizontalList
          title="Stories"
          url="/stories"
          data={storiesBookmarks}
        />
      )}
    </>
  );
};
