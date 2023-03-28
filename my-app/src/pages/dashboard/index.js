import React, { useState } from 'react';
import '../../assets/css/app.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as AccountActions } from '../../stores/reducers/account';
import { actionCreators as TeamActions } from '../../stores/reducers/team';
import { Container, Row, Col } from 'reactstrap';

function Dashboard() {
  const [team, setTeamList] = useState('');

  return (
    <Container>
      <h1>Team Table</h1>

      {team.map((teamMember, index) => {
        return (
          <Row key={"user_" + index} className='form-row'>
            <Col md={6}>{teamMember.fullname}</Col>
            <Col md={6}>{teamMember.location}</Col>
          </Row>
        )
      })}
    </Container>
  );
}

const mapStateToProp = (state) => ({
  me: state.account.me,
  team: state.teams.team,
  ...state.teams
});

export default connect(
  mapStateToProp,
  dispatch => bindActionCreators({ ...AccountActions, ...TeamActions }, dispatch)
)(Dashboard);
