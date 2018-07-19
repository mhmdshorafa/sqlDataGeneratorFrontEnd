import * as actionTypes from '../../actions/types';
const uplaodFileStatusInitialState = {
  isFileLoading: false
}
// REDUCERS
export const uploadFileReducer = (state = uplaodFileStatusInitialState, action) => {
  switch (action.type) {
    case actionTypes.ISLOADING:
      return  {
        isFileLoading: action.payload.isFileLoading
    }
    default: return state
  }
}

export const renderTablesReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.RENDER_TABLES:
      return  {
        tables: action.payload.tables
    }
    default: return state
  }
}