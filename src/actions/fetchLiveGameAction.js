import axios from 'axios';

export function fetchLiveGame() {
    return function(dispatch) {
        dispatch({type: fetchLiveGame})


        axios.get('https://statsapi.web.nhl.com/api/v1/game/2019030234/feed/live')
            .then((response) => {
                dispatch({
                    type: "FETCH_LIVE_GAME_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_LIVE_GAME_REJECTED",
                    payload: err
                })
            })
    }
}
