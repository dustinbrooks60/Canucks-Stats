import {combineReducers} from 'redux';
import fetchTeamsReducer from './fetchTeamsReducer';
import fetchRosterReducer from './fetchRosterReducer';
import fetchPetterssonReducer from './fetchPetterssonReducer';
import fetchPetterssonStatsReducer from './fetchPetterssonStatsReducer';
import fetchNextGameReducer from './fetchNextGameReducer';

export default combineReducers({
  fetchTeamsReducer,
  fetchRosterReducer,
  fetchPetterssonReducer,
  fetchPetterssonStatsReducer,
  fetchNextGameReducer
})
