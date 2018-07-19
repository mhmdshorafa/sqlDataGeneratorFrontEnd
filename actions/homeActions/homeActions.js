import * as actionTypes from '../types'

// ACTIONS
export const isFileLoading = (isFileLoading) => dispatch => {
  return dispatch({ type: actionTypes.ISLOADING, payload: { isFileLoading } })
}

export const renderTables = (tables) => dispatch => {
  return dispatch({ type: actionTypes.RENDER_TABLES, payload: { tables } })
}
