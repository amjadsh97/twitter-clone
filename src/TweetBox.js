import React, {useState} from "react";
import '././TweetBox.css';
import {Avatar} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import db from "./firebase";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
         e.preventDefault();

         db.collection('posts').add({
            displayName: 'amjad shadid',
            username: 'amjadsh97',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar : 'https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png',
         });
         setTweetMessage('');
         setTweetImage('');
    }

    return (
        <div className='tweetBox'>
            <form>
                <div className="tweetBox__input">
                    <Avatar
                        src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png'/>
                    <input
                        value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        type="text" placeholder='whats happening'
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className='tweetBox__imageInput'
                    type="text"
                    placeholder='enter img optionally'/>

                <Button type='submit' onClick={sendTweet} className='tweetBox__tweetButton'>tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
