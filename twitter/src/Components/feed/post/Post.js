import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import './Post.css';

const Post = ({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) => {
    return (
        <div className = "post">
            <div className = "post__avatar">
                <Avatar src = "https://www.freepngimg.com/thumb/emoji/1-2-wink-emoji-png-thumb.png" />
            </div>
            <div className = "post__body">
                <div className = "post__body__header">
                    <div className = "post__body__headerText">
                        <h3>
                            L{''}
                            <span className="post__body__headerSpecial">
                                <VerifiedUserIcon className = "post__badge" /> @L
                            </span>
                        </h3>
                    </div>

                    <div className = "post__body__headerDescription">
                        <p>Build a Twitter clone</p>
                    </div>
                </div>
                {/* header end ................ */}
                <img src = "https://media.giphy.com/media/CUBWkGBq3GL1C/giphy.gif" alt = ""/>
                <div className = "post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;
