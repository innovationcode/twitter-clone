import React from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

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
                            <span>
                                <VerifiedUserIcon className = "post__badge" />
                            </span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
