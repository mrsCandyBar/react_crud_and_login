import logo from '../../assets/imgs/logo.svg';
import '../../assets/css/app.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionCreators } from '../../stores/reducers/account';


function Login() {
  return (
    <div className="Login">
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

export default connect(
  (state) => ({ me: state.account.me }),
  dispatch => bindActionCreators(actionCreators, dispatch)
)(Login);