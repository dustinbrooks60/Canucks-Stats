export default function reducer (state = {
  data: {},
  pettersson: []
}, action) {
  switch(action.type) {
    case "FETCH_PETTERSSON": {
      return {
        ...state,
        fetching: true
      }
    }
    case "FETCH_PETTERSSON_REJECTED": {
      return {
        ...state,
        fetching: false,
        error: action.payload
      }
    }
    case "FETCH_PETTERSSON_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data,
        pettersson: action.payload.people
      }
    }
    default: return state;
  }
}
