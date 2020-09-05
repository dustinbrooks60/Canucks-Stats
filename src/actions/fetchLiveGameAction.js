import axios from 'axios';

export function fetchLiveGame() {
    const liveGameURL = 'https://statsapi.web.nhl.com/api/v1/game/2019030237/feed/live';
    return function(dispatch) {
        dispatch({type: fetchLiveGame})


        axios.get(liveGameURL)
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
