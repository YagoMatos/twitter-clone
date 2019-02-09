import React, { Component } from 'react';
import api from '../services/api';

import like from '../like.svg';
import './Tweet.css';


class Tweet extends Component {
    handleClicked = async () => {
        const { _id } = this.props.tweet;

       await api.post(`likes/${_id}`);
    }

  render() {
    const { author, content, likes } = this.props.tweet;

    return (
        <li className="tweet">
            <strong>{author}</strong>
            <p>{content}</p>
            <button type="button" onClick={this.handleClicked}>
                <img src={like} alt="like" />
                {likes}
            </button>
        </li>
    )
  }
}

export default Tweet;