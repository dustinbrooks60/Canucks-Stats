import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchLiveGame} from '../actions/fetchLiveGameAction';
import {fetchNextGame} from '../actions/fetchNextGameAction';

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

class LiveGame extends Component {

    componentDidMount = () => {
        this.props.fetchLiveGame();
    }

    render() {
        const currentPeriod = this.props.liveGame.currentPeriod;
        const currentPeriodTimeRemaining = this.props.liveGame.currentPeriodTimeRemaining

        const awayName = this.props.liveGame.awayName;
        const awayGoals = this.props.liveGame.awayGoals;
        const awayShots = this.props.liveGame.awayShots;
        const awayPowerPlayPercentage = this.props.liveGame.awayPowerPlayPercentage;
        const awayPowerPlayGoals = this.props.liveGame.awayPowerPlayGoals;
        const awayPowerPlayOpportunities = this.props.liveGame.awayPowerPlayOpportunities;
        const awayFaceOffWinPercentage = this.props.liveGame.awayFaceOffWinPercentage;
        const awayHits = this.props.liveGame.awayHits;
        const awayBlocks = this.props.liveGame.awayBlocks;

        const homeName = this.props.liveGame.homeName;
        const homeGoals = this.props.liveGame.homeGoals;
        const homeShots = this.props.liveGame.homeShots;
        const homePowerPlayPercentage = this.props.liveGame.homePowerPlayPercentage;
        const homePowerPlayGoals = this.props.liveGame.homePowerPlayGoals;
        const homePowerPlayOpportunities = this.props.liveGame.homePowerPlayOpportunities;
        const homeFaceOffWinPercentage = this.props.liveGame.homeFaceOffWinPercentage;
        const homeHits = this.props.liveGame.homeHits;
        const homeBlocks = this.props.liveGame.homeBlocks;

        return (
            <Styles>
                <Container>
                    <Col md={{span: 6, offset: 3}}>
                        <Table striped bordered hover size="md" variant="dark">
                            <thead>
                            <tr>
                                <th>Live Game Stats</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Current Period:</td>
                                <td>{currentPeriod} - {currentPeriodTimeRemaining}</td>
                            </tr>
                            <tr>
                                <td>Shots:</td>
                                <td>{homeName}: {homeShots} - {awayName}: {awayShots}</td>
                            </tr>
                            <tr>
                                <td>Power Play Goals:</td>
                                <td>{homeName}: {homePowerPlayGoals} - {awayName}: {awayPowerPlayGoals}</td>
                            </tr>
                            <tr>
                                <td>PP Opportunities:</td>
                                <td>{homeName}: {homePowerPlayOpportunities} - {awayName}: {awayPowerPlayOpportunities}</td>
                            </tr>
                            <tr>
                                <td>Power Play %:</td>
                                <td>{homeName}: {homePowerPlayPercentage}% - {awayName}: {awayPowerPlayPercentage}%</td>
                            </tr>
                            <tr>
                                <td>Faceoff Win %:</td>
                                <td>{homeName}: {homeFaceOffWinPercentage}% - {awayName}: {awayFaceOffWinPercentage}%</td>
                            </tr>
                            <tr>
                                <td>Hits:</td>
                                <td>{homeName}: {homeHits} - {awayName}: {awayHits}</td>
                            </tr>
                            <tr>
                                <td>Blocked Shots:</td>
                                <td>{homeName}: {homeBlocks} - {awayName}: {awayBlocks}</td>
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
    liveGame: state.fetchLiveGameReducer
});

const mapDispatchToProps = dispatch => ({
    fetchLiveGame: () => dispatch(fetchLiveGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(LiveGame);
