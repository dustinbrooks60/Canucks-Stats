import axios from 'axios';

export function fetchNextGame() {
    return function(dispatch) {
        dispatch({type: fetchNextGame});

        axios.get('https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.next')
            .then((response) => {
                dispatch({
                    type: "FETCH_NEXT_GAME_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_NEXT_GAME_REJECTED",
                    payload: err
                })
            })
    }
}
