import logo from '../../assets/imgs/logo.svg';
import '../../assets/css/app.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators as AccountActions } from '../../stores/reducers/account';
import { actionCreators as TeamActions } from '../../stores/reducers/team';

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
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
