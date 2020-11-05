import { charactersState } from "../initialStates/charactersState";

export const charactersReducer = (state = charactersState, action) => {
  switch (action.type) {
    case "SET_QUERY_CHARACTERS":
      return {
        ...state,
        charactersQuery: action.payload.query,
        charactersOrderBy: action.payload.orderBy,
        charactersFilterBy: action.payload.filterBy,
      };

    case "SET_CHARACTERS":
      return {
        ...state,
        charactersLoading: action.payload.charactersLoading,
        charactersCache: action.payload.charactersCache,
      };

    case "SET_CHARACTER":
      return {
        ...state,
        characterLoading: action.payload.characterLoading,
        characterCache: action.payload.characterCache,
      };

    case "SET_CHARACTER_LOADING":
      return {
        ...state,
        characterLoading: action.payload.characterLoading,
      };

    case "ADD_CHARACTER_TO_BOOKMARK":
      if (
        state.charactersBookmarks.some(
          (item) => item.id == action.payload.character.id
        )
      ) {
        return {
          ...state,
        };
      }

      return {
        ...state,
        charactersBookmarks: [
          ...state.charactersBookmarks,
          action.payload.character,
        ],
      };

    case "REMOVE_CHARACTER_TO_BOOKMARK":
      return {
        ...state,
        charactersBookmarks: state.charactersBookmarks.filter(
          (item) => item.id !== action.payload.character.id
        ),
      };

    default:
      return state;
  }
};
