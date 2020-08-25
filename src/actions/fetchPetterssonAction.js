import axios from 'axios';

export function fetchPettersson() {
  return function(dispatch) {
    dispatch({type: fetchPettersson})

    axios.get('https://statsapi.web.nhl.com/api/v1/people/8480012')
      .then((response) => {
        dispatch({
          type: "FETCH_PETTERSSON_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PETTERSSON_REJECTED",
          payload: err
        })
      })
  }
}
