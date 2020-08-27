export default function reducer (state = {
    data: {},
    liveData: [],
    currentPeriod: '',
    currentPeriodTimeRemaining: '',
    awayGoals: '',
    awayShots: '',
    awayPowerPlayPercentage: '',
    awayPowerPlayGoals: '',
    awayPowerPlayOpportunities: '',
    awayFaceOffWinPercentage: '',
    awayHits: '',

    homeGoals: '',
    homeShots: '',
    homePowerPlayPercentage: '',
    homePowerPlayGoals: '',
    homePowerPlayOpportunities: '',
    homeFaceOffWinPercentage: '',
    homeHits: '',

}, action) {
    switch(action.type) {
        case "FETCH_LIVE_GAME": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_LIVE_GAME_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_LIVE_GAME_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.data,
                liveData: action.payload.liveData,
                currentPeriod: action.payload.liveData.linescore.currentPeriodOrdinal,
                currentPeriodTimeRemaining: action.payload.liveData.linescore.currentPeriodTimeRemaining,
                homeShots: action.payload.liveData.linescore.teams.home.shotsOnGoal,
                homePowerPlayPercentage: action.payload.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayPercentage,
                homePowerPlayGoals: action.payload.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayGoals,
                homePowerPlayOpportunities: action.payload.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayOpportunities,
                homeFaceOffWinPercentage: action.payload.liveData.boxscore.teams.home.teamStats.teamSkaterStats.faceOffWinPercentage,
                homeHits: action.payload.liveData.boxscore.teams.home.teamStats.teamSkaterStats.hits,

                awayShots: action.payload.liveData.linescore.teams.away.shotsOnGoal,
                awayPowerPlayPercentage: action.payload.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayPercentage,
                awayPowerPlayGoals: action.payload.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayGoals,
                awayPowerPlayOpportunities: action.payload.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayOpportunities,
                awayFaceOffWinPercentage: action.payload.liveData.boxscore.teams.away.teamStats.teamSkaterStats.faceOffWinPercentage,
                awayHits: action.payload.liveData.boxscore.teams.away.teamStats.teamSkaterStats.hits,
            }
        }
        default: return state;
    }
}
