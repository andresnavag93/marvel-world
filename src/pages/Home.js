import React, { useEffect } from "react";
import { CardsHorizontalList } from "../library/components/CardsHorizontalList/CardsHorizontalList";
import { Images } from "../resources/Images";
import { Banner } from "../library/components/Banner/Banner";
import { api } from "../library/networking/api";
import { get } from "../library/networking/http";
import { useSelector, useDispatch } from "react-redux";
import { setCharacters } from "../library/redux/actions/charactersActions";
import { setComics } from "../library/redux/actions/comicsActions";
import { Header } from "../library/components/Header/Header";

export default () => {
  const dispatch = useDispatch();

  const { charactersCache, charactersLoading } = useSelector(
    (state) => state.charactersReducer
  );
  const { comicsCache, comicsLoading } = useSelector(
    (state) => state.comicsReducer
  );

  const getCharacters = async () => {
    if (charactersCache.length === 0) {
      const responseCharacters = await get(api.endpoints.characters);
      dispatch(
        setCharacters({
          charactersCache: responseCharacters.data.results,
          charactersLoading: false,
        })
      );
    }
  };

  const getComics = async () => {
    if (comicsCache.length === 0) {
      const responseComics = await get(api.endpoints.comics);
      dispatch(
        setComics({
          comicsCache: responseComics.data.results,
          comicsLoading: false,
        })
      );
    }
  };

  useEffect(() => {
    getCharacters();
    getComics();
  }, []);

  return (
    <>
      <Header />
      <Banner title="Welcome to Marvel World" bgImage={Images.homeBanner} />
      <CardsHorizontalList
        title="Characters"
        url="/characters"
        data={charactersCache}
        loading={charactersLoading}
      />
      <CardsHorizontalList
        title="Comics"
        url="/comics"
        data={comicsCache}
        loading={comicsLoading}
      />
    </>
  );
};
