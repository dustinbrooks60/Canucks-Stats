import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table, ListGroup, ListGroupItem} from 'react-bootstrap';
import {connect} from 'react-redux';
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

class NextGame extends Component {

    componentDidMount = () => {
        this.props.fetchNextGame();
    }

    render() {
        const date = this.props.nextGame.date;
        const awayScore = this.props.nextGame.awayScore;
        const homeScore = this.props.nextGame.homeScore;

        return (
            <Styles>
                <Container>
                    <Row>
                        <Col>
                            <h3 className="text-center">Next Game: Canucks vs. Golden Knights</h3>
                        </Col>
                    </Row>
                    <Col md={{span: 6, offset: 3}}>
                        <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                            <tr>
                                <th>Next Game Information</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Date:</td>
                                <td>{date}</td>
                            </tr>
                            <tr>
                                <td>Score:</td>
                                <td>{homeScore} - {awayScore}</td>
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
    nextGame: state.fetchNextGameReducer
});

const mapDispatchToProps = dispatch => ({
    fetchNextGame: () => dispatch(fetchNextGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(NextGame);
