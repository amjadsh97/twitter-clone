import React, {useEffect, useState} from "react";
import '././Feed.css';
import TweetBox from './TweetBox';
import Post from "./Post";
import db from './firebase';
import FlipMove from "react-flip-move";

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))))
    }, []);
    return (
        <div className='feed'>
            { /*Header*/}
            <div className="feed__header">
                <h2>home</h2>
            </div>


            { /*Tweetbox*/}
            <TweetBox/>

            <FlipMove>
                {posts.map(post=>(
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        avatar={post.avatar}
                        image={post.image}
                        text={post.text}
                        verified={post.verified}
                    />
                ))}
            </FlipMove>






        </div>
    );
}

export default Feed;
