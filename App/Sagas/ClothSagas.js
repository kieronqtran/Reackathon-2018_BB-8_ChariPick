import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import ClothActions from '../Redux/ClothRedux'
import ClothListActions from '../Redux/ClothListRedux'

export function * getCloth (api, action) {
  const { id } = action
  // make the call to the api
  const response = yield call(api.getCloth, id)

  if (response.ok) {
    const cloth = path(['data'], response)
    // do data conversion here if needed
    yield put(ClothActions.clothSuccess(cloth))
  } else {
    yield put(ClothActions.clothFailure())
  }
}

export function * getClothes (api, action) {
  const response = yield call(api.getClothes)

  if (response.ok) {
    const clothes = path(['data'], response)
    // do data conversion here if needed
    yield put(ClothListActions.clothListSuccess(clothes))
  } else {
    yield put(ClothListActions.clothListFailure())
  }
}
