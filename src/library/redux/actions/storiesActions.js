export const setQueryStories = (payload) => {
  return { type: "SET_QUERY_STORIES", payload };
};

export const setStories = (payload) => {
  return { type: "SET_STORIES", payload };
};

export const setStory = (payload) => {
  return { type: "SET_STORY", payload };
};

export const setStoryLoading = (payload) => {
  return { type: "SET_STORY_LOADING", payload };
};

export const addStoryToBookmark = (payload) => {
  return { type: "ADD_STORY_TO_BOOKMARK", payload };
};

export const removeStoryToBookmark = (payload) => {
  return { type: "REMOVE_STORY_TO_BOOKMARK", payload };
};
