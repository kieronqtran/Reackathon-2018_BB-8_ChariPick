import Actions, { reducer, INITIAL_STATE } from '../../App/Redux/ClothRedux'

test('request', () => {
  const state = reducer(INITIAL_STATE, Actions.clothRequest())

  expect(state.fetching).toBe(true)
  expect(state.error).toBeNull()
  expect(state.entity).toBeNull()
})

test('success', () => {
  const cloth =
    {
        "id": 1,
        "name": "Item Number 1",
        "description": "Dolor qui quibusdam voluptatem voluptas rem illo id aut distinctio beatae aut dolores provident culpa rerum quae officiis nihil laudantium.",
        "size": "M",
        "imageUrl": "http://lorempixel.com/140/140/fashion",
        "user": {
            "id": 1,
            "name": "Sierra Altenwerth",
            "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/haruintesettden/128.jpg"
        }
    };
  const state = reducer(INITIAL_STATE, Actions.clothSuccess(cloth))

  expect(state.fetching).toBe(false)
  expect(state.entity).toEqual(cloth)
  expect(state.error).toBeNull()
})

test('failure', () => {
  const state = reducer(INITIAL_STATE, Actions.clothFailure())

  expect(state.fetching).toBe(false)
  expect(state.error).toBe(true)
  expect(state.entity).toBeNull()
})
