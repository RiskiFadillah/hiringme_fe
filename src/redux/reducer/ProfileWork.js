const initialState = { loading: true, data: null, error: {} };

export const ProfileReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GET_ALL_DATA_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_DATA_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload,
      };
    case "GET_ALL_DATA_PROFILE_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: payload,
      };
    case "GET_DATA_PROFILE_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA_PROFILE_BY_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_DATA_PROFILE_BY_ID_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

// Post

const initialStatePost = { data: [], error: [] };

export const postProfileIdReducer = (state = initialStatePost, action = {}) => {
  switch (action.type) {
    case "POST_ALL_DATA_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "POST_ALL_DATA_PROFILE_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

// Patch

const initialStatePatch = { data: [], error: [] };

export const patchProfileIdReducer = (
  state = initialStatePatch,
  action = {}
) => {
  switch (action.type) {
    case "PATCH_ALL_DATA_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "PATCH_ALL_DATA_PROFILE_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};

