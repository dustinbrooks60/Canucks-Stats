import axios from 'axios';

export function fetchPetterssonStats() {
  return function(dispatch) {
    dispatch({type: fetchPetterssonStats})

    axios.get('https://statsapi.web.nhl.com/api/v1/people/8480012/stats?stats=statsSingleSeason&season=20192020')
      .then((response) => {
        dispatch({
          type: "FETCH_PETTERSSON_STATS_FULFILLED",
          payload: response.data
        })
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_PETTERSSON_STATS_REJECTED",
          payload: err
        })
      })
  }
}
