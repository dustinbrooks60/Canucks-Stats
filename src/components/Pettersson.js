import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import {fetchPettersson} from '../actions/fetchPetterssonAction';

const Styles = styled(Container)`
  height: 100%;
  width: 100%;

  .pettersson-ul {
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    list-style-type: none;
    padding-left: 0;


    li {
      text-align: left;
    }
  }
`;

class Pettersson extends Component {

  componentDidMount = () => {
    this.props.fetchPettersson();
  }

  render() {
    const petterssonData = this.props.pettersson.pettersson;

    const pettersson = petterssonData.map((pettersson, key) => {
      return(
        <tr key={key}>
          <td>{pettersson.fullName}</td>
          <td>{pettersson.birthCity}</td>
          <td>{pettersson.birthCountry}</td>
          <td>{pettersson.currentAge}</td>
          <td>{pettersson.height}</td>
          <td>{pettersson.weight}</td>
          <td>{pettersson.primaryNumber}</td>
          <td>{pettersson.id}</td>
          <td>{pettersson.link}</td>
          <td>{pettersson.primaryPosition.name}</td>
          <td>{pettersson.currentTeam.name}</td>
        </tr>
      );
    });

    return(
      <Styles>
        <Container>
          <Row>
            <h3>Retrieving Elias Pettersson info from the NHL API</h3>
          </Row>
          <Col xs={12} md={{span: 6, offset: 3}}>
            <Table striped bordered hover size="sm" variant="dark">
              <thead>
                <tr>
                  <th>Elias Pettersson Info</th>
                </tr>
              </thead>
              <tbody>
                {pettersson}
              </tbody>
            </Table>
          </Col>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = state => ({
  pettersson: state.fetchPetterssonReducer
});

const mapDispatchToProps = dispatch => ({
  fetchPettersson: () => dispatch(fetchPettersson())
});

export default connect(mapStateToProps, mapDispatchToProps)(Pettersson);
