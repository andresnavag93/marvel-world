import { comicsState } from "../initialStates/comicsState";

export const comicsReducer = (state = comicsState, action) => {
  switch (action.type) {
    case "SET_QUERY_COMICS":
      return {
        ...state,
        comicsQuery: action.payload.query,
        comicsOrderBy: action.payload.orderBy,
        comicsFilterBy: action.payload.filterBy,
        comicsFormatValue: action.payload.formatValue,
      };

    case "SET_COMICS":
      return {
        ...state,
        comicsLoading: action.payload.comicsLoading,
        comicsCache: action.payload.comicsCache,
      };

    case "SET_COMIC":
      return {
        ...state,
        comicLoading: action.payload.comicLoading,
        comicCache: action.payload.comicCache,
      };

    case "SET_COMIC_LOADING":
      return {
        ...state,
        comicLoading: action.payload.comicLoading,
      };

    case "ADD_COMIC_TO_BOOKMARK":
      return {
        ...state,
        comicsBookmarks: [...state.comicsBookmarks, action.payload.comic],
      };

    case "REMOVE_COMIC_TO_BOOKMARK":
      return {
        ...state,
        comicsBookmarks: state.comicsBookmarks.filter(
          (item) => item.id !== action.payload.comic.id
        ),
      };

    default:
      return state;
  }
};
