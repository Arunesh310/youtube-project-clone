import React from "react";
import "./PlayVideo.css";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";

const PlayVideo = () => {
  return (
    <div className="play-video">
      <video src={video1} controls autoPlay muted></video>
      <h3>Best Channel to learn coding</h3>
      <div className="play-video-info">
        <p>1525 Views &bull; 2 days ago</p>
        <div>
          <span>
            <img src={like} alt="" />
            125
          </span>
          <span>
            <img src={dislike} alt="" />
            10
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>CodeWithArunesh</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channel to only show my coding skills </p>
        <p>Subscribe to CodeWithArunesh to see more React Hardcoded codes </p>
        <hr />
        <h4>130 Comments</h4>
        <div className="comment">
          <div>
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Captain America <span>1 week ago</span>
              </h3>
              <p>Kaa Bhai Barf pighli ki nhi</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>244</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Iron Man <span>5 days ago</span>
              </h3>
              <p>Pighal bhi jaayegi to kitna zinda rhega bhai</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>50</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Thor <span>4 days ago</span>
              </h3>
              <p>Bhai hathode se fodun kya iska barf</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>30</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Thanos <span>3 days ago</span>
              </h3>
              <p>Chutki baja ke fod dun kya</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>15</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
          <div>
            <img src={user_profile} alt="" />
            <div>
              <h3>
                Iron Man <span>Yesterday</span>
              </h3>
              <p>Nhi ab tu baja saale chutki</p>
              <div className="comment-action">
                <img src={like} alt="" />
                <span>20</span>
                <img src={dislike} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayVideo;
