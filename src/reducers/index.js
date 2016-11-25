import { combineReducers } from 'redux';
import projects from '../reducers/projects';
import staticData from '../reducers/staticData';

const rootReducer = combineReducers({
  projects,
  staticData,
});

export default rootReducer;
