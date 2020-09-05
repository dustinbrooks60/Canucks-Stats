import axios from 'axios';

export function fetchCanucksStats() {
    return function(dispatch) {
        dispatch({type: fetchCanucksStats})

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.stats')
            .then((response) => {
            dispatch({
                         type: "FETCH_CANUCKS_STATS_FULFILLED",
                         payload: response.data
                     })
        })
    .catch((err) => {
            dispatch({
                         type: "FETCH_CANUCKS_STATS_REJECTED",
                         payload: err
                     })
        })
    }
}
