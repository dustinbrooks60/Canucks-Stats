export default function reducer (state = {
    data: {},
    gamesPlayed: '',
    wins: '',
    losses: '',
    overtime: '',
    points: '',
    goalsPerGame: '',
    evenStrengthGoalsAgainstRatio: '',
    powerPlayPercentage: '',
    powerPlayGoals: '',
    powerPlayOpportunities: '',
    penaltyKillPercentage: '',
    shotsPerGame: '',
    winScoreFirst: '',
    winOppScoreFirst: '',
    winLeadFirstPeriod: '',
    winLeadSecondPeriod: '',
    winOutshootOpponent: '',
    winOutshotByOpponent: '',
    faceOffsTaken: '',
    faceOffsWon: '',
    faceOffsLost: '',
    faceOffWinPercentage: '',
    savePercentage: '',


}, action) {
    switch(action.type) {
        case "FETCH_CANUCKS_STATS": {
            return {
                ...state,
                fetching: true
            }
        }
        case "FETCH_CANUCKS_STATS_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_CANUCKS_STATS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                data: action.payload.data,
                gamesPlayed: action.payload.teams[0].teamStats[0].splits[0].stat.gamesPlayed,
                wins: action.payload.teams[0].teamStats[0].splits[0].stat.wins,
                losses: action.payload.teams[0].teamStats[0].splits[0].stat.losses,
                overtime: action.payload.teams[0].teamStats[0].splits[0].stat.ot,
                points: action.payload.teams[0].teamStats[0].splits[0].stat.pts,
                goalsPerGame: action.payload.teams[0].teamStats[0].splits[0].stat.goalsPerGame,
                evenStrengthGoalsAgainstRatio: action.payload.teams[0].teamStats[0].splits[0].stat.evGGARatio,
                powerPlayPercentage: action.payload.teams[0].teamStats[0].splits[0].stat.powerPlayPercentage,
                powerPlayGoals: action.payload.teams[0].teamStats[0].splits[0].stat.powerPlayGoals,
                powerPlayOpportunities: action.payload.teams[0].teamStats[0].splits[0].stat.powerPlayOpportunities,
                penaltyKillPercentage: action.payload.teams[0].teamStats[0].splits[0].stat.penaltyKillPercentage,
                shotsPerGame: action.payload.teams[0].teamStats[0].splits[0].stat.shotsPerGame,
                winScoreFirst: action.payload.teams[0].teamStats[0].splits[0].stat.winScoreFirst,
                winOppScoreFirst: action.payload.teams[0].teamStats[0].splits[0].stat.winOppScoreFirst,
                winLeadFirstPeriod: action.payload.teams[0].teamStats[0].splits[0].stat.winLeadFirstPer,
                winLeadSecondPeriod: action.payload.teams[0].teamStats[0].splits[0].stat.winLeadSecondPer,
                winOutshootOpponent: action.payload.teams[0].teamStats[0].splits[0].stat.winOutshootOpp,
                winOutshotByOpponent: action.payload.teams[0].teamStats[0].splits[0].stat.winOutshotByOpp,
                faceOffsTaken: action.payload.teams[0].teamStats[0].splits[0].stat.faceOffsTaken,
                faceOffsWon: action.payload.teams[0].teamStats[0].splits[0].stat.faceOffsWon,
                faceOffsLost: action.payload.teams[0].teamStats[0].splits[0].stat.faceOffsLost,
                faceOffWinPercentage: action.payload.teams[0].teamStats[0].splits[0].stat.faceOffWinPercentage,
                savePercentage: action.payload.teams[0].teamStats[0].splits[0].stat.savePctg,
            }
        }
        default: return state;
    }
}
