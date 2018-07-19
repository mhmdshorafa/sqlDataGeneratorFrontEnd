import { combineReducers } from 'redux';

import { uploadFileReducer, renderTablesReducer } from './homeReducers/index';
const rootReducer = combineReducers({
  uploadFile: uploadFileReducer,
  tables: renderTablesReducer
});

export default rootReducer;
