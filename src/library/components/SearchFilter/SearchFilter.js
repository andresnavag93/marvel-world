import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { setQueryComics } from "../../redux/actions/comicsActions";
import { setQueryCharacters } from "../../redux/actions/charactersActions";
import {
  InputSearch,
  InputButton,
  Span,
  Select,
  Div,
  Label,
  Form,
} from "./SearchFilterStyles";

export const SearchFilter = ({ type }) => {
  const [format, setFormat] = useState(false);
  const [input, setInput] = useState(true);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (type == "Characters") {
      dispatch(setQueryCharacters(data));
    } else if (type == "Comics") {
      dispatch(setQueryComics(data));
    }
    // console.log(data);
  };

  const onChange = (data) => {
    if (data.filterBy !== "format") {
      setFormat(false);
      setInput(true);
    } else {
      setFormat(true);
      setInput(false);
    }
  };

  if (type == "Characters") {
    return (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Div>
          <Label htmlFor="filterBy">
            <Span>Filter By</Span>
            <Select name="filterBy" ref={register}>
              <option value="name">Name</option>
              <option value="comics">Comics Ids</option>
              <option value="stories">Stories Ids</option>
            </Select>
          </Label>

          <Label htmlFor="orderBy">
            <Span>Order By</Span>
            <Select
              name="orderBy"
              ref={register}
              onChange={handleSubmit(onSubmit)}
            >
              <option value="name">A-Z</option>
              <option value="-name">Z-A</option>
            </Select>
          </Label>
        </Div>
        <InputSearch name="query" ref={register} />
        <InputButton type="submit" value="Search" />
      </Form>
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Div>
        <Label htmlFor="filterBy">
          <Span>Filter By</Span>

          <Select
            name="filterBy"
            ref={register}
            onChange={handleSubmit(onChange)}
          >
            <option value="title">Title</option>
            <option value="format">Format</option>
            <option value="issueNumber">Issue Number</option>
          </Select>

          {format && (
            <Select
              name="formatValue"
              ref={register}
              onChange={handleSubmit(onSubmit)}
            >
              <option value="comic">Comic</option>
              <option value="magazine">Magazine</option>
              <option value="trade paperback">Trade Paperback</option>
              <option value="hardcover">Hardcover</option>
              <option value="digest">Digest</option>
              <option value="graphic novel">Graphic Novel</option>
              <option value="digital comic">Digital Comic</option>
              <option value="infinite comic">Infinite Comic</option>
            </Select>
          )}
        </Label>

        <Label htmlFor="orderBy">
          <Span>Order By</Span>
          <Select
            name="orderBy"
            ref={register}
            onChange={handleSubmit(onSubmit)}
          >
            <option value="issueNumber">issueNumber</option>
            <option value="-issueNumber">-issueNumber</option>
          </Select>
        </Label>
      </Div>
      {input && (
        <>
          <InputSearch name="query" ref={register} />
          <InputButton type="submit" value="Search" />
        </>
      )}
    </Form>
  );
};
