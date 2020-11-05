export const setQueryCharacters = (payload) => {
  return { type: "SET_QUERY_CHARACTERS", payload };
};

export const setCharacters = (payload) => {
  return { type: "SET_CHARACTERS", payload };
};

export const setCharacter = (payload) => {
  return { type: "SET_CHARACTER", payload };
};

export const setCharacterLoading = (payload) => {
  return { type: "SET_CHARACTER_LOADING", payload };
};

export const addCharacterToBookmark = (payload) => {
  return { type: "ADD_CHARACTER_TO_BOOKMARK", payload };
};

export const removeCharacterToBookmark = (payload) => {
  return { type: "REMOVE_CHARACTER_TO_BOOKMARK", payload };
};
