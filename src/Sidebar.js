import React from "react";
import '././Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SideBarOption from "././SidebarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core';

function Sidebar() {
    return (
        <div className='sidebar'>
            {/*twitter icon*/}
            <TwitterIcon className='sidebar__twitterIcon'/>

            <SideBarOption active Icon={HomeIcon} text="home"/>
            <SideBarOption Icon={SearchIcon} text="explore"/>
            <SideBarOption Icon={NotificationsNoneIcon} text="notifications"/>
            <SideBarOption Icon={MailOutlineIcon} text="mail"/>
            <SideBarOption Icon={BookmarkBorderIcon} text="bookmark"/>
            <SideBarOption Icon={ListAltIcon} text="lists"/>
            <SideBarOption Icon={PermIdentityIcon} text="profile"/>
            <SideBarOption Icon={MoreHorizIcon} text="more"/>
            <Button varient="outlined" className="sidebar__tweet" fullWidth>tweet</Button>
            {/*SidebarOption*/}
            {/*SidebarOption*/}
            {/*SidebarOption*/}
            {/*SidebarOption*/}
            {/*SidebarOption*/}
            {/*SidebarOption*/}
            {/*SidebarOption*/}

        </div>
    );
}

export default Sidebar;
