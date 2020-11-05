import React, { useEffect, useState } from "react";
import { Images } from "../resources/Images";
import { api } from "../library/networking/api";
import { get } from "../library/networking/http";
import { Banner } from "../library/components/Banner/Banner";
import { useSelector, useDispatch } from "react-redux";
import { Description } from "../library/components/Description/Description";
import {
  setCharacter,
  setCharacterLoading,
  addCharacterToBookmark,
  removeCharacterToBookmark,
} from "../library/redux/actions/charactersActions";
import {
  setComic,
  setComicLoading,
  addComicToBookmark,
  removeComicToBookmark,
} from "../library/redux/actions/comicsActions";
import {
  setStory,
  setStoryLoading,
  addStoryToBookmark,
  removeStoryToBookmark,
} from "../library/redux/actions/storiesActions";

import { Tabs } from "../library/components/Tabs/Tabs";
import { Header } from "../library/components/Header/Header";

export default ({ type, id }) => {
  const dispatch = useDispatch();

  const {
    character,
    characterCache,
    characterLoading,
    charactersBookmarks,
  } = useSelector((state) => state.charactersReducer);
  const { comic, comicCache, comicLoading, comicsBookmarks } = useSelector(
    (state) => state.comicsReducer
  );
  const { story, storyCache, storyLoading, storiesBookmarks } = useSelector(
    (state) => state.storiesReducer
  );

  const [bookmark, setBookmark] = useState(false);

  const handleBookmark = () => {
    // console.log("Type: ", type);
    if (type === "Characters") {
      if (!bookmark) {
        dispatch(
          addCharacterToBookmark({
            character: characterCache,
          })
        );
      } else {
        dispatch(
          removeCharacterToBookmark({
            character: characterCache,
          })
        );
      }
    } else if (type === "Comics") {
      if (!bookmark) {
        dispatch(
          addComicToBookmark({
            comic: comicCache,
          })
        );
      } else {
        dispatch(
          removeComicToBookmark({
            comic: comicCache,
          })
        );
      }
    } else {
      if (!bookmark) {
        dispatch(
          addStoryToBookmark({
            story: storyCache,
          })
        );
      } else {
        dispatch(
          removeStoryToBookmark({
            story: storyCache,
          })
        );
      }
    }
    setBookmark(!bookmark);
  };

  const getCharacter = async (id) => {
    if (
      !characterCache.id ||
      (characterCache.id && !(characterCache.id == id))
    ) {
      dispatch(setCharacterLoading({ characterLoading: true }));
      const responseCharacter = await get(api.endpoints.characters + "/" + id);
      setCharacter(responseCharacter.data.results[0]);
      dispatch(
        setCharacter({
          characterCache: responseCharacter.data.results[0],
          characterLoading: false,
        })
      );
    }
    if (charactersBookmarks.some((item) => item.id == id)) {
      setBookmark(true);
    }
  };

  const getComic = async (id) => {
    if (!comicCache.id || (comicCache.id && !(comicCache.id == id))) {
      dispatch(setComicLoading({ comicLoading: true }));
      const responseComic = await get(api.endpoints.comics + "/" + id);
      setComic(responseComic.data.results[0]);
      dispatch(
        setComic({
          comicCache: responseComic.data.results[0],
          comicLoading: false,
        })
      );
    }
    if (comicsBookmarks.some((item) => item.id == id)) {
      setBookmark(true);
    }
  };

  const getStory = async (id) => {
    if (!storyCache.id || (storyCache.id && !(storyCache.id == id))) {
      dispatch(setStoryLoading({ storyLoading: true }));
      const responseStory = await get(api.endpoints.stories + "/" + id);
      setStory(responseStory.data.results[0]);
      dispatch(
        setStory({
          storyCache: responseStory.data.results[0],
          storyLoading: false,
        })
      );
    }
    if (storiesBookmarks.some((item) => item.id == id)) {
      setBookmark(true);
    }
  };

  useEffect(() => {
    if (type === "Characters") {
      getCharacter(id);
    } else if (type === "Comics") {
      getComic(id);
    } else {
      getStory(id);
    }
  }, []);
  return (
    <>
      <Header />
      <Banner title={`${type} Info`} bgImage={Images.infoDetailBanner} />
      {type === "Characters" && (
        <>
          <Description
            id={id}
            type={type}
            detail={characterCache}
            loading={characterLoading}
            handleBookmark={handleBookmark}
            bookmark={bookmark}
          />
          <Tabs
            type={type}
            itemId={characterCache.id}
            loading={characterLoading}
          />
        </>
      )}
      {type === "Comics" && (
        <>
          <Description
            id={id}
            type={type}
            detail={comicCache}
            loading={comicLoading}
            handleBookmark={handleBookmark}
            bookmark={bookmark}
          />
          <Tabs type={type} itemId={comicCache.id} loading={comicLoading} />
        </>
      )}
      {type === "Stories" && (
        <>
          <Description
            id={id}
            type={type}
            detail={storyCache}
            loading={storyLoading}
            handleBookmark={handleBookmark}
            bookmark={bookmark}
          />
          <Tabs type={type} itemId={storyCache.id} loading={storyLoading} />
        </>
      )}
    </>
  );
};
