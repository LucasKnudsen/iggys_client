import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...state,
        authenticated: true,
        user: action.payload
      }
    case "ERROR_HANDLER":
      return {
        ...state,
        errorMessage: action.payload
      }
    default:
      return state
  }
}

export default rootReducer