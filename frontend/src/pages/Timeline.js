import React, { Component } from 'react';
import api from '../services/api';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

class Timeline extends Component {
  state = {
      tweets: [],
      newTweet: '',
  }

  async componentDidMount () {
      const response = await api.get('tweets');

      this.setState({ tweets: response.data });
  }

  handleNewTweet = async e => {
    if (e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@Twitter:username');

    await api.post('tweet', {content, author} )

    this.setState({ newTweet: '' })
  }

  handleChangedTweet = e => {
      this.setState({ newTweet: e.target.value });
  }

  render() {
    const { newTweet, tweets } = this.state;
    return (
        <div className="timeline-wrapper">
            <img height={24} src={twitterLogo} alt="Twitter"/>
            <form>
                <textarea
                    value={newTweet}
                    onChange={this.handleChangedTweet}
                    onKeyDown={this.handleNewTweet}
                    placeholder="O que está acontecendo?"
                />
            </form>

            { tweets.map(tweet => (
                <h1>{tweet}</h1>
            ))}
        </div>
    )
  }
}


export default Timeline;
