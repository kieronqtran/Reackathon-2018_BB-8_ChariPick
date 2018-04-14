import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

const LIST_DATA = [
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
  },
  {
      "id": 2,
      "name": "Item Number 2",
      "description": "Saepe possimus et quis eveniet aliquid soluta magni maiores eligendi accusamus quisquam accusamus eaque ea cumque enim blanditiis mollitia optio.",
      "size": "XL",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 2,
          "name": "Reinhold Purdy",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg"
      }
  },
  {
      "id": 3,
      "name": "Item Number 3",
      "description": "Quo qui ducimus in a quisquam explicabo et eos et sunt aut eum sed in eius explicabo iste consequatur aspernatur.",
      "size": "S",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 3,
          "name": "Raleigh Wiegand",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/diesellaws/128.jpg"
      }
  },
  {
      "id": 4,
      "name": "Item Number 4",
      "description": "Consequuntur possimus rerum tempore iste suscipit tempora fugit sequi amet doloremque corrupti quam dicta ullam fugit quod doloribus dolor ducimus.",
      "size": "S",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 4,
          "name": "Brent Bergstrom",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg"
      }
  },
  {
      "id": 5,
      "name": "Item Number 5",
      "description": "Ipsa impedit sequi velit vero aut repellat ab sequi rerum molestiae reiciendis dolorem officia magnam cupiditate expedita ipsa in in.",
      "size": "M",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 5,
          "name": "Houston Denesik",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/uxalex/128.jpg"
      }
  },
  {
      "id": 6,
      "name": "Item Number 6",
      "description": "Ea dicta perspiciatis et saepe corporis dolorem alias aliquam quia qui ut a fugit ex dolor totam id ut rerum.",
      "size": "L",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 6,
          "name": "Ana Hyatt",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/unterdreht/128.jpg"
      }
  },
  {
      "id": 7,
      "name": "Item Number 7",
      "description": "Sunt vel temporibus voluptates reiciendis modi et reprehenderit delectus dolorem eveniet fuga aut sint minima facere exercitationem in similique vitae.",
      "size": "L",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 7,
          "name": "Kathryn Bednar",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/maikelk/128.jpg"
      }
  },
  {
      "id": 8,
      "name": "Item Number 8",
      "description": "Voluptas totam reiciendis maiores sit ea quaerat exercitationem fuga voluptatem ad perferendis iste totam modi necessitatibus et est qui laudantium.",
      "size": "M",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 8,
          "name": "Oscar Stroman",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/joshuasortino/128.jpg"
      }
  },
  {
      "id": 9,
      "name": "Item Number 9",
      "description": "Non tenetur eveniet eaque laboriosam possimus doloremque voluptatibus nihil pariatur minus occaecati ut vel nihil qui labore iure neque illum.",
      "size": "M",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 9,
          "name": "Estevan Auer",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/souperphly/128.jpg"
      }
  },
  {
      "id": 10,
      "name": "Item Number 10",
      "description": "Quas molestiae similique et dicta aut omnis temporibus exercitationem porro expedita perferendis vel illo impedit ex maiores inventore blanditiis pariatur.",
      "size": "L",
      "imageUrl": "http://lorempixel.com/140/140/fashion",
      "user": {
          "id": 10,
          "name": "Cassie Schaefer",
          "avatarUrl": "https://s3.amazonaws.com/uifaces/faces/twitter/ccinojasso1/128.jpg"
      }
  }
];

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
