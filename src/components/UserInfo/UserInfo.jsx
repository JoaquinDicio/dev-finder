import React from "react";
import "./UserInfo.css";

export default function UserInfo({ DATA }) {
  return (
    <div className="user-info flex-column align-items-center">
      <div className="row justify-content-center">
        <div className="col-3">
          <img className="avatar" src={DATA.avatar_url} alt="" />
        </div>
        <div className="col-9 d-flex justify-content-center flex-column">
          <div className="d-flex justify-content-between">
            <h4 className="profile-name">{DATA.login}</h4>
            <p className="joined">
              <span className="joined-span">Joined</span>{" "}
              <b>{DATA.created_at.substring(0, 10)}</b>
            </p>
          </div>
          <p>{DATA.bio ? DATA.BIO : "This user has no bio"}</p>
        </div>
      </div>
      <div className="row justify-content-end">
        <div className="col-9 row align-items-center social-info">
          <div className="d-flex flex-column align-items-center count col-4">
            <p className="count-desc">Repos</p>
            <h3>{DATA.public_repos}</h3>
          </div>
          <div className="d-flex flex-column align-items-center count col-4">
            <p className="count-desc">Followers</p>
            <h3>{DATA.followers}</h3>
          </div>
          <div className="d-flex flex-column align-items-center count col-4">
            <p className="count-desc">Following</p>
            <h3>{DATA.following}</h3>
          </div>
        </div>
        <div className="col-9">
          info
        </div>
      </div>
    </div>
  );
}
