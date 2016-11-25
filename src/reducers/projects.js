import * as types from '../constants/ActionTypes';

const initialState = {
  data: [],
  loading: false,
  error: false,
};

export default function projects(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PROJECTS_REQUEST:
      return { ...state,
        loading: true,
      };
    case types.FETCH_PROJECTS_SUCCESS:
      return { ...state,
        data: action.projects,
        loading: false,
      };
    default:
      return state;
  }
}
