import React from 'react';
import { Avatar, Button } from '@material-ui/core';

import './TweetBox.css';

const TweetBox = () => {
    return (
        <div className = 'tweetbox'>
            <form>
                <div className = 'tweetbox__input'>
                    <Avatar src = "https://i.pinimg.com/564x/bb/fa/4e/bbfa4ea9ce792e35890eb7f19398d594.jpg" />
                    <input placeholder = "What's happening" />
                </div>

                <input
                    className="tweetbox__imageInput"
                    placeholder="Optional: Enter image URL"
                    type="text"
                />

                <Button className = "tweetbox__tweetbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;