import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { api } from "../../networking/api";
import { get } from "../../networking/http";
import { Card } from "../Card/Card";
import {
  Container,
  List,
  StyledPaginateContainer,
  H2,
} from "./TablePaginationStyles";
import ReactPaginate from "react-paginate";
import { MyLoader } from "../Loader/Loader";
import { SearchFilter } from "../SearchFilter/SearchFilter";

export const TablePagination = ({
  type = "Characters",
  url = "/characters",
  apiUrl = "",
  itemId = "",
}) => {
  const {
    charactersQuery,
    charactersFilterBy,
    charactersOrderBy,
  } = useSelector((state) => state.charactersReducer);
  const {
    comicsQuery,
    comicsFilterBy,
    comicsFormatValue,
    comicsOrderBy,
  } = useSelector((state) => state.comicsReducer);
  const [code, setCode] = useState(200);
  const [status, setStatus] = useState("");
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const limit = 20;

  const getCharacters = async () => {
    setLoading(true);
    let url;
    if (charactersQuery.length < 1) {
      url =
        "&offset=" +
        page * limit +
        "&limit=" +
        limit +
        "&orderBy=" +
        charactersOrderBy;
    } else {
      url =
        "&offset=" +
        page * limit +
        "&limit=" +
        limit +
        "&" +
        charactersFilterBy +
        "=" +
        charactersQuery +
        "&orderBy=" +
        charactersOrderBy;
    }
    // console.log("Ruta completa:", apiUrl, itemId, api.endpoints.comics, url);
    const responseCharacters = await get(
      apiUrl + itemId + api.endpoints.characters,
      url
    );
    if (responseCharacters.code == 200) {
      setItems(responseCharacters.data.results);
      setTotal(responseCharacters.data.total);
      setCode(200);
    } else {
      setItems([]);
      setTotal(0);
      setCode(responseCharacters.code);
      setStatus(responseCharacters.status);
    }
    setLoading(false);
  };

  const getComics = async () => {
    setLoading(true);
    let url;
    if (comicsFilterBy === "format") {
      url =
        "&offset=" +
        page * limit +
        "&limit=" +
        limit +
        "&" +
        comicsFilterBy +
        "=" +
        comicsFormatValue +
        "&orderBy=" +
        comicsOrderBy;
    } else if (comicsQuery.length < 1) {
      url =
        "&offset=" +
        page * limit +
        "&limit=" +
        limit +
        "&orderBy=" +
        comicsOrderBy;
    } else {
      url =
        "&offset=" +
        page * limit +
        "&limit=" +
        limit +
        "&" +
        comicsFilterBy +
        "=" +
        comicsQuery +
        "&orderBy=" +
        comicsOrderBy;
    }
    // console.log("Ruta completa:", apiUrl, itemId, api.endpoints.comics, url);
    const responseComics = await get(
      apiUrl + itemId + api.endpoints.comics,
      url
    );
    if (responseComics.code == 200) {
      setItems(responseComics.data.results);
      setTotal(responseComics.data.total);
      setCode(200);
    } else {
      setItems([]);
      setTotal(0);
      setCode(responseComics.code);
      setStatus(responseComics.status);
    }

    setLoading(false);
  };

  const getStories = async () => {
    setLoading(true);
    let url = "&offset=" + page * limit + "&limit=" + limit;
    const responseStories = await get(
      apiUrl + itemId + api.endpoints.stories,
      url
    );
    // console.log("Ruta completa:", apiUrl, itemId, api.endpoints.comics, url);
    if (responseStories.code == 200) {
      setItems(responseStories.data.results);
      setTotal(responseStories.data.total);
      setCode(200);
    } else {
      setItems([]);
      setTotal(0);
      setCode(responseStories.code);
      setStatus(responseStories.status);
    }
    setLoading(false);
  };

  const handlePageClick = (e) => {
    if (page !== e.selected) {
      setPage(e.selected);
    }
  };

  useEffect(() => {
    if (type === "Characters") {
      getCharacters();
    } else if (type === "Comics") {
      getComics();
    } else {
      getStories();
    }
  }, [
    page,
    charactersQuery,
    charactersFilterBy,
    charactersOrderBy,
    comicsFormatValue,
    comicsQuery,
    comicsFilterBy,
    comicsOrderBy,
  ]);

  return (
    <Container>
      {type != "Stories" && <SearchFilter type={type} />}
      {loading ? (
        <MyLoader />
      ) : (
        <>
          <H2>{code == 200 ? `${total} Results` : status}</H2>
          <List>
            {items.map((item) => (
              <Card key={item.id} detail={item} url={url} />
            ))}
          </List>
        </>
      )}

      <StyledPaginateContainer>
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={total / limit}
          marginPagesDisplayed={0}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </StyledPaginateContainer>
    </Container>
  );
};
