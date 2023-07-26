import React from "react";
import Timestamp from "./Timestamp";
import ProfileImage from "./ProfileImage";
import Message from "./Message";
import User from "./User";
import Actions from "./Actions";

function Tweet(props) {
  // console.log(props);
  // const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={props.tweet.user.image} />

      <div className="body">
        <div className="top">
          <User name={props.tweet.user.name} handle={props.tweet.user.handle} />

          <Timestamp time={props.tweet.timestamp} />
        </div>

        <Message msg={props.tweet.message} />

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
