import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchLiveGame} from '../actions/fetchLiveGameAction';

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
        const awayGoals = this.props.liveGame.awayGoals;
        const awayShots = this.props.liveGame.awayShots;
        const awayPowerPlayPercentage = this.props.liveGame.awayPowerPlayPercentage;
        const awayPowerPlayGoals = this.props.liveGame.awayPowerPlayGoals;
        const awayPowerPlayOpportunities = this.props.liveGame.awayPowerPlayOpportunities;
        const awayFaceOffWinPercentage = this.props.liveGame.awayFaceOffWinPercentage;
        const awayHits = this.props.liveGame.awayHits;

        const homeGoals = this.props.liveGame.homeGoals;
        const homeShots = this.props.liveGame.homeShots;
        const homePowerPlayPercentage = this.props.liveGame.homePowerPlayPercentage;
        const homePowerPlayGoals = this.props.liveGame.homePowerPlayGoals;
        const homePowerPlayOpportunities = this.props.liveGame.homePowerPlayOpportunities;
        const homeFaceOffWinPercentage = this.props.liveGame.homeFaceOffWinPercentage;
        const homeHits = this.props.liveGame.homeHits;

        return (
            <Styles>
                <Container>
                    <Col md={{span: 6, offset: 3}}>
                        <Table striped bordered hover size="md" variant="dark">
                            <thead>
                            <tr>
                                <th>Live Game Information</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Current Period:</td>
                                <td>{currentPeriod} - {currentPeriodTimeRemaining}</td>
                            </tr>
                            <tr>
                                <td>Shots:</td>
                                <td>{homeShots} - {awayShots}</td>
                            </tr>
                            <tr>
                                <td>Power Play Percentages:</td>
                                <td>{homePowerPlayPercentage} - {awayPowerPlayPercentage}</td>
                            </tr>
                            <tr>
                                <td>Power Play Goals:</td>
                                <td>{homePowerPlayGoals} - {awayPowerPlayGoals}</td>
                            </tr>
                            <tr>
                                <td>Power Play Opportunities:</td>
                                <td>{homePowerPlayOpportunities} - {awayPowerPlayOpportunities}</td>
                            </tr>
                            <tr>
                                <td>Faceoff Win Percentages:</td>
                                <td>{homeFaceOffWinPercentage} - {awayFaceOffWinPercentage}</td>
                            </tr>
                            <tr>
                                <td>Hits:</td>
                                <td>{homeHits} - {awayHits}</td>
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
