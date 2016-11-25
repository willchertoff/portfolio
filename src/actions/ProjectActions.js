import fetch from 'isomorphic-fetch';
import * as types from '../constants/ActionTypes';


export default function fetchProjectsRequest() {
  return {
    type: types.FETCH_PROJECTS_REQUEST,
  };
}

function fetchProjectsSuccess(json) {
  return {
    type: types.FETCH_PROJECTS_SUCCESS,
    projects: json,
  };
}

export function fetchProjects() {
  return (dispatch) => {
    dispatch(fetchProjectsRequest());
    return fetch('https://api.github.com/users/willchertoff/repos', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json =>
        dispatch(fetchProjectsSuccess(json))
      );
  };
}

function shouldFetchProjects(state) {
  const { projects } = state;
  const hasProjects = projects.length > 0;
  if (!hasProjects) {
    return true;
  }
  if (projects.isFetching) {
    return false;
  }
  return false;
}

export function fetchProjectsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchProjects(getState())) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchProjects());
    }
    return Promise.resolve();
  };
}
