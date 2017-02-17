import types from '../constants/ActionTypes'

const initialState = null

export default function userInfo(state = initialState, action) {
  switch (action.type) {
    case types.REPLACE_USER_INFO:
      return action.userInfo
    case types.CLEAR_USER_INFO:
      return null
    default:
      return state
  }
}
