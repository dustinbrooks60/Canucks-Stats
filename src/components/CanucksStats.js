import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchCanucksStats} from '../actions/fetchCanucksStatsAction';

const Styles = styled(Container)`
  height: 100%;
  width: 100%;

  h3 {
    margin-top: 1em;
  }

  h5 {
    margin-bottom: 1em;
  }
`;

class CanucksStats extends Component {

    componentDidMount = () => {
    this.props.fetchCanucksStats();
}

    render() {
        const gamesPlayed = this.props.canucksStats.gamesPlayed;
        const wins = this.props.canucksStats.wins;
        const losses = this.props.canucksStats.losses;
        const overtime = this.props.canucksStats.overtime;
        const points = this.props.canucksStats.points;
        const goalsPerGame = this.props.canucksStats.goalsPerGame;
        const evenStrengthGoalsAgainstRatio = this.props.canucksStats.evenStrengthGoalsAgainstRatio;
        const powerPlayPercentage = this.props.canucksStats.powerPlayPercentage;
        const powerPlayGoals = this.props.canucksStats.powerPlayGoals;
        const powerPlayOpportunities = this.props.canucksStats.powerPlayOpportunities;
        const penaltyKillPercentage = this.props.canucksStats.penaltyKillPercentage;
        const shotsPerGame = this.props.canucksStats.shotsPerGame;
        const winScoreFirst = this.props.canucksStats.winScoreFirst;
        const winOppScoreFirst = this.props.canucksStats.winOppScoreFirst;
        const winLeadFirstPeriod = this.props.canucksStats.winLeadFirstPeriod;
        const winLeadSecondPeriod = this.props.canucksStats.winLeadSecondPeriod;
        const winOutshootOpponent = this.props.canucksStats.winOutshootOpponent;
        const winOutshotByOpponent = this.props.canucksStats.winOutshotByOpponent;
        const faceOffsTaken = this.props.canucksStats.faceOffsTaken;
        const faceOffsWon = this.props.canucksStats.faceOffsWon;
        const faceOffsLost = this.props.canucksStats.faceOffsLost;
        const faceOffWinPercentage = this.props.canucksStats.faceOffWinPercentage;
        const savePercentage = this.props.canucksStats.savePercentage;

    return (
        <Styles>
            <Container>
        <Row>
        <Col>
        <h3 className="text-center">Canucks Live Updated Stats</h3>

    </Col>
    </Row>
                <Col md={{span: 6, offset: 3}}>
                    <Table striped bordered hover size="md" variant="dark">
                        <thead>
                        <tr>
                        <th>Canucks Stats</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Games Played:</td>
        <td>{gamesPlayed}</td>
    </tr>
    <tr>
        <td>Wins:</td>
        <td>{wins}</td>
    </tr>
    <tr>
        <td>Losses:</td>
        <td>{losses}</td>
    </tr>
    <tr>
    <td>Overtime Wins:</td>
    <td>{overtime}</td>
    </tr>
    <tr>
    <td>Points:</td>
    <td>{points}</td>
    </tr>
    <tr>
    <td>Goals Per Game:</td>
    <td>{goalsPerGame}</td>
    </tr>
    <tr>
    <td>Even Strength Goals Against Ratio:</td>
    <td>{evenStrengthGoalsAgainstRatio}</td>
    </tr>
    <tr>
    <td>Power Play Percentage:</td>
    <td>{powerPlayPercentage}%</td>
    </tr>
    <tr>
    <td>Power Play Goals:</td>
    <td>{powerPlayGoals}</td>
    </tr>
    <tr>
    <td>Power Play Opportunities:</td>
    <td>{powerPlayOpportunities}</td>
    </tr>
    <tr>
    <td>Penalty Kill Percentage:</td>
    <td>{penaltyKillPercentage}%</td>
    </tr>
    <tr>
    <td>Shots Per Game:</td>
    <td>{shotsPerGame}</td>
    </tr>
    <tr>
    <td>Win When Canucks Score First:</td>
    <td>{winScoreFirst * 100}%</td>
    </tr>
    <tr>
    <td>Win When Opposition Scores First:</td>
    <td>{winOppScoreFirst * 100}%</td>
    </tr>
    <tr>
    <td>Win When Canucks Lead First:</td>
    <td>{winLeadFirstPeriod * 100}%</td>
    </tr>
    <tr>
    <td>Win When Canucks Lead Second:</td>
    <td>{winLeadSecondPeriod * 100}%</td>
    </tr>
    <tr>
    <td>Win When Canucks Outshoot Opponent:</td>
    <td>{winOutshootOpponent * 100}%</td>
    </tr>
    <tr>
    <td>Win When Canucks Are Outshot By Opponent:</td>
    <td>{winOutshotByOpponent * 100}%</td>
    </tr>
    <tr>
    <td>Total Faceoffs:</td>
    <td>{faceOffsTaken}</td>
    </tr>
    <tr>
    <td>Faceoffs Won:</td>
    <td>{faceOffsWon}</td>
    </tr>
    <tr>
    <td>Faceoffs Lost:</td>
    <td>{faceOffsLost}</td>
    </tr>
    <tr>
    <td>Faceoff Win %:</td>
    <td>{faceOffWinPercentage}</td>
    </tr>
    <tr>
    <td>Total Save %:</td>
    <td>{savePercentage * 100}%</td>
    </tr>

    </tbody>
    </Table>
    </Col>
    </Container>
    </Styles>
);
}
}

const mapStateToProps = state => ({
    canucksStats: state.fetchCanucksStatsReducer
});

const mapDispatchToProps = dispatch => ({
    fetchCanucksStats: () => dispatch(fetchCanucksStats())
});

export default connect(mapStateToProps, mapDispatchToProps)(CanucksStats);
