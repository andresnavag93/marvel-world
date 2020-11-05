export const setQueryComics = (payload) => {
  return { type: "SET_QUERY_COMICS", payload };
};

export const setComics = (payload) => {
  return { type: "SET_COMICS", payload };
};

export const setComic = (payload) => {
  return { type: "SET_COMIC", payload };
};

export const setComicLoading = (payload) => {
  return { type: "SET_COMIC_LOADING", payload };
};

export const addComicToBookmark = (payload) => {
  return { type: "ADD_COMIC_TO_BOOKMARK", payload };
};

export const removeComicToBookmark = (payload) => {
  return { type: "REMOVE_COMIC_TO_BOOKMARK", payload };
};
