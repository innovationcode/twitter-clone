import React from 'react';
import './Sidebar.css';

import SidebarOption from './sidebarOption/SidebarOption.js';
import TwitterIcon from '@material-ui/icons/Twitter';

const Sidebar = () => {
    return(
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />

            {/* Sidebar options */}
            <SidebarOption />

            {/* Button - Tweet */}
        </div>
    )
}

export default Sidebar;
