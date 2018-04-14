import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  clothListRequest: null, // should add parameters to the action
  clothListSuccess: ['clothes'],
  clothListFailure: null,
})

export const ClothListTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  entities: null
})

/* ------------- Selectors ------------- */

export const ClothListSelectors = {
  selectClothList: state => state.entities
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state, { }) =>
  state.merge({ fetching: true })

// successful avatar lookup
export const success = (state, action) => {
  const { clothes } = action
  return state.merge({ fetching: false, error: null, entities: clothes })
}

// failed to get the avatar
export const failure = (state) =>
  state.merge({ fetching: false, error: true, entities: null })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.CLOTH_LIST_REQUEST]: request,
  [Types.CLOTH_LIST_SUCCESS]: success,
  [Types.CLOTH_LIST_FAILURE]: failure
})
