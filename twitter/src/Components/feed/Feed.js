import React from 'react'
import TweetBox from './tweetBox/TweetBox'
import Post from './post/Post.js';
import './Feed.css';

const Feed = () => {
    return (
        <div className = 'feed'>
            {/* Header */}
            <div className = 'feed__header'> 
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />

            {/* Post */}
            <Post />
            
        </div>
    )
}

export default Feed;