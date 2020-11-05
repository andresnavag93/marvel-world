import { storiesState } from "../initialStates/storiesState";

export const storiesReducer = (state = storiesState, action) => {
  switch (action.type) {
    case "SET_QUERY_STORIES":
      return {
        ...state,
        query: action.payload.query,
        orderBy: action.payload.orderBy,
        filterBy: action.payload.filterBy,
      };

    case "SET_STORIES":
      return {
        ...state,
        storiesLoading: action.payload.storiesLoading,
        storiesCache: action.payload.storiesCache,
      };

    case "SET_STORY":
      return {
        ...state,
        storyLoading: action.payload.storyLoading,
        storyCache: action.payload.storyCache,
      };

    case "SET_STORY_LOADING":
      return {
        ...state,
        storyLoading: action.payload.storyLoading,
      };

    case "ADD_STORY_TO_BOOKMARK":
      return {
        ...state,
        storiesBookmarks: [...state.storiesBookmarks, action.payload.story],
      };

    case "REMOVE_STORY_TO_BOOKMARK":
      return {
        ...state,
        storiesBookmarks: state.storiesBookmarks.filter(
          (item) => item.id !== action.payload.story.id
        ),
      };

    default:
      return state;
  }
};
