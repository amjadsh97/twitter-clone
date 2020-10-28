import React from "react";
import '././Widgets.css';
import SearchIcon from '@material-ui/icons/Search';
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

function Widgets() {
    return (
        <div className='widgets'>
            <div className="widgets__input">
                <SearchIcon className='widgets__searchIcon'/>
                <input type="text" placeholder='Search Twitter'/>
            </div>
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1308098551864528896"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="shadeed9"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://www.facebook.com/ishadeed"}
                    options={{ text: "CSS is awesome", via: "ishadeed" }}
                />
            </div>
        </div>
    );
}

export default Widgets;
