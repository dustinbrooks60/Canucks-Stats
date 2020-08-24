export default function reducer (state = {
    data: {},
    nextGameSchedule: [],
    dates: [],
    date: '',


}, action) {
    switch(action.type) {
        case "FETCH_NEXT_GAME": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_NEXT_GAME_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_NEXT_GAME_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.data,
                nextGameSchedule: action.payload.teams[0].nextGameSchedule,
                dates: action.payload.teams[0].nextGameSchedule.dates,
                date: action.payload.teams[0].nextGameSchedule.dates[0].date,
            }
        }
        default: return state;
    }
}
