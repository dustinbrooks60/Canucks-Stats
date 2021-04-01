import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchPetterssonStats} from '../actions/fetchPetterssonStatsAction';

const Styles = styled(Container)`
  height: 100%;
  width: 100%;

  h3 {
    text-align: center;
    margin-top: 1em;
  }

  h5 {
    margin-bottom: 1em;
  }
`;

class PetterssonStats extends Component {

  componentDidMount = () => {
    this.props.fetchPetterssonStats();
  };

  render() {
    const assists = this.props.petterssonStats.assists;
    const blocked = this.props.petterssonStats.blocked;
    const evenTimeOnIce = this.props.petterssonStats.evenTimeOnIce;
    const evenTimeOnIcePerGame = this.props.petterssonStats.evenTimeOnIcePerGame;
    const faceOffPct= this.props.petterssonStats.faceOffPct;
    const gameWinningGoals = this.props.petterssonStats.gameWinningGoals;
    const games = this.props.petterssonStats.games;
    const goals = this.props.petterssonStats.goals;
    const hits = this.props.petterssonStats.hits;
    const overTimeGoals = this.props.petterssonStats.overTimeGoals;
    const penaltyMinutes = this.props.petterssonStats.penaltyMinutes;
    const pim = this.props.petterssonStats.pim;
    const plusMinus = this.props.petterssonStats.plusMinus;
    const points = this.props.petterssonStats.points;
    const powerPlayGoals = this.props.petterssonStats.powerPlayGoals;
    const powerPlayPoints = this.props.petterssonStats.powerPlayPoints;
    const powerPlayTimeOnIce = this.props.petterssonStats.powerPlayTimeOnIce;
    const powerPlayTimeOnIcePerGame = this.props.petterssonStats.powerPlayTimeOnIcePerGame;
    const shifts = this.props.petterssonStats.shifts;
    const shortHandedGoals = this.props.petterssonStats.shortHandedGoals;
    const shortHandedPoints = this.props.petterssonStats.shortHandedPoints;
    const shortHandedTimeOnIce = this.props.petterssonStats.shortHandedTimeOnIce;
    const shortHandedTimeOnIcePerGame = this.props.petterssonStats.shortHandedTimeOnIcePerGame;
    const shotPct = this.props.petterssonStats.shotPct;
    const shots = this.props.petterssonStats.shots;
    const timeOnIce = this.props.petterssonStats.timeOnIce;
    const timeOnIcePerGame = this.props.petterssonStats.timeOnIcePerGame;

    return(
      <Styles>
        <Container>
          <Row>
            <Col>
              <h3>Elias Pettersson's Stats from the 2019-2020 Season</h3>
            </Col>
          </Row>
          <Col md={{span: 6, offset: 3}}>
          <Table striped bordered hover size="sm" variant="dark">
            <thead>
              <tr>
                <th>Elias Pettersson Stats - 2019/2020</th>
              </tr>
            </thead>
          <tbody>
            <tr>
              <td>Assists:</td>
              <td>{assists}</td>
            </tr>
            <tr>
              <td>Blocks</td>
              <td>{blocked}</td>
            </tr>
            <tr>
              <td>Even Time on Ice</td>
              <td>{evenTimeOnIce}</td>
            </tr>
            <tr>
              <td>Even Time on Ice Per Game</td>
              <td>{evenTimeOnIcePerGame}</td>
            </tr>
            <tr>
              <td>Faceoff %</td>
              <td>{faceOffPct}</td>
            </tr>
            <tr>
              <td>Game Winning Goals</td>
              <td>{gameWinningGoals}</td>
            </tr>
            <tr>
              <td>Games</td>
              <td>{games}</td>
            </tr>
            <tr>
              <td>Goals:</td>
              <td>{goals}</td>
            </tr>
            <tr>
              <td>Hits</td>
              <td>{hits}</td>
            </tr>
            <tr>
              <td>Overtime Goals</td>
              <td>{overTimeGoals}</td>
            </tr>
            <tr>
              <td>Penalty Minutes</td>
              <td>{penaltyMinutes}</td>
            </tr>
            <tr>
              <td>PIM</td>
              <td>{pim}</td>
            </tr>
            <tr>
              <td>+/-</td>
              <td>{plusMinus}</td>
            </tr>
            <tr>
              <td>Points</td>
              <td>{points}</td>
            </tr>
            <tr>
              <td>Powerplay Goals</td>
              <td>{powerPlayGoals}</td>
            </tr>
            <tr>
              <td>Powerplay Points</td>
              <td>{powerPlayPoints}</td>
            </tr>
            <tr>
              <td>Powerplay Time on Ice</td>
              <td>{powerPlayTimeOnIce}</td>
            </tr>
            <tr>
              <td>Powerplay Time on Ice Per Game</td>
              <td>{powerPlayTimeOnIcePerGame}</td>
            </tr>
            <tr>
              <td>Shifts</td>
              <td>{shifts}</td>
            </tr>
            <tr>
              <td>Shorthanded Goals</td>
              <td>{shortHandedGoals}</td>
            </tr>
            <tr>
              <td>Shorthanded Points</td>
              <td>{shortHandedPoints}</td>
            </tr>
            <tr>
              <td>Shorthanded Time on Ice</td>
              <td>{shortHandedTimeOnIce}</td>
            </tr>
            <tr>
              <td>Shorthanded Time on Ice Per Game</td>
              <td>{shortHandedTimeOnIcePerGame}</td>
            </tr>
            <tr>
              <td>Shot %</td>
              <td>{shotPct}</td>
            </tr>
            <tr>
              <td>Shots</td>
              <td>{shots}</td>
            </tr>
            <tr>
              <td>Time on Ice</td>
              <td>{timeOnIce}</td>
            </tr>
            <tr>
              <td>Time on Ice Per Game</td>
              <td>{timeOnIcePerGame}</td>
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
  petterssonStats: state.fetchPetterssonStatsReducer
});

const mapDispatchToProps = dispatch => ({
  fetchPetterssonStats: () => dispatch(fetchPetterssonStats())
});

export default connect(mapStateToProps, mapDispatchToProps)(PetterssonStats);
