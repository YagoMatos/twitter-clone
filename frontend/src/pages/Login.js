import React, { Component } from 'react';

import twitterLogo from '../twitter.svg'
import './Login.css';

class Login extends Component {
  state = {
      username: '',
  }

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;
    if (!username.length) return;

    localStorage.setItem('@Twitter:username', username);

    this.props.history.push('/timeline');
  }


  handlerChangedUsername = e => {
      this.setState({ username: e.target.value });
  }

  render() {
    const { username } = this.state;
    return (
        <div className="login-wrapper">
            <img src={twitterLogo} alt="Twitter"/>
            <form onSubmit={this.handleSubmit}>
                <input 
                    value={username}
                    onChange={this.handlerChangedUsername}
                    placeholder="Nome de Usuário"
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
  }
}

export default Login;
