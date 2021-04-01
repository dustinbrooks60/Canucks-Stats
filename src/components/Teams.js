import React, {Component} from 'react';
import styled from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchTeams} from '../actions/fetchTeamsAction';

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

class Teams extends Component {

  componentDidMount = () => {
    this.props.fetchTeams();
  }

  render() {
    const teamData = this.props.teams.teams;

    const teams = teamData.map((team, key) => {
      return(
        <tr>
          <td>{team.name}</td>
          <td>{team.link}</td>
        </tr>
      );
    });

    return(
      <Styles>
        <Container>
          <Row>
            <Col>
              <h3>Retrieving Teams from the NHL API:</h3>
              <h3>API endpoint : <code>'https://statsapi.web.nhl.com/api/v1/teams'</code></h3>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={{span: 6, offset: 3}}>
              <Table striped bordered hover size="sm" variant="dark">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>API ID</th>
                  </tr>
                </thead>
                <tbody>
                  {teams}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  teams: state.fetchTeamsReducer
});

const mapDispatchToProps = dispatch => ({
  fetchTeams: () => dispatch(fetchTeams())
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
