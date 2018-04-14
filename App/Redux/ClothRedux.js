import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  clothRequest: ['id'], // should add parameters to the action
  clothSuccess: ['cloth'],
  clothFailure: null,
})

export const ClothTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  entity: null
})

/* ------------- Selectors ------------- */

export const ClothSelectors = {
  selectCloth: state => state.entity
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { id }) =>
  state.merge({ fetching: true })

// successful avatar lookup
export const success = (state, action) => {
  const { cloth } = action
  return state.merge({ fetching: false, error: null, entity: cloth })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, entity: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLOTH_REQUEST]: request,
  [Types.CLOTH_SUCCESS]: success,
  [Types.CLOTH_FAILURE]: failure
})
