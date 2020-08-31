export default function reducer (state = {
    data: {},
    nextGameSchedule: [],
    dates: [],
    date: '',
    awayScore: '',
    homeScore: '',
    awayTeam: '',
    homeTeam: '',
    awayTotalWins: '',
    awayTotalLosses: '',
    homeTotalWins: '',
    homeTotalLosses: '',
    venue: '',
    detailedState: '',
    link: '',


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
                awayScore: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.away.score,
                homeScore: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.home.score,
                awayTeam: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.away.team.name,
                homeTeam: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.home.team.name,
                awayTotalWins: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.away.leagueRecord.wins,
                awayTotalLosses: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.away.leagueRecord.losses,
                homeTotalWins: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.home.leagueRecord.wins,
                homeTotalLosses: action.payload.teams[0].nextGameSchedule.dates[0].games[0].teams.home.leagueRecord.losses,
                venue: action.payload.teams[0].nextGameSchedule.dates[0].games[0].venue.name,
                detailedState: action.payload.teams[0].nextGameSchedule.dates[0].games[0].status.detailedState,
                link: action.payload.teams[0].nextGameSchedule.dates[0].games[0].link,
            }
        }
        default: return state;
    }
}
