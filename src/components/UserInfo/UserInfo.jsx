import React from "react";
import "./UserInfo.css";
import { MdLocationOn,MdLink,MdAlternateEmail } from 'react-icons/md'

export default function UserInfo({ DATA }) {
  return (
    <div className="user-info flex-column justify-content-center align-items-center">
      <div className="row justify-content-center">
        <div className="col-lg-3 d-flex justify-content-center">
          <img className="avatar" src={DATA.avatar_url} alt="" />
        </div>
        <div className="col-md-9 d-flex justify-content-center flex-column">
          <div className="row justify-content-between">
            <h4 className="col-md-6 profile-name">{DATA.login}</h4>
            <p className="col-md-6 joined">
              <span className="joined-span">Joined</span>{" "}
              <b>{DATA.created_at ? DATA.created_at.substring(0, 10) : 'no data'}</b>
            </p>
          </div>
          <p className="bio">{DATA.bio ? DATA.BIO : "This user has no bio"}</p>
        </div>
      </div>
      <div className="info row justify-content-lg-end justify-content-center">
        <div className="col-lg-9 row align-items-center social-info">
          <div className="d-flex flex-column align-items-center count col-sm-4">
            <p className="count-desc">Repos</p>
            <h3>{DATA.public_repos}</h3>
          </div>
          <div className="d-flex flex-column align-items-center count col-sm-4">
            <p className="count-desc">Followers</p>
            <h3>{DATA.followers}</h3>
          </div>
          <div className="d-flex flex-column align-items-center count col-sm-4">
            <p className="count-desc">Following</p>
            <h3>{DATA.following}</h3>
          </div>
        </div>
        <div className="col-lg-9 row personal-info">
          <div className="col-lg d-flex flex-column">
            <div>
              <MdLocationOn className="personal-info-icon" /><p>{DATA.location ? DATA.location : 'No available'}</p>
            </div>
            <div>
              <MdLink className="personal-info-icon" /><p>{DATA.html_url ? DATA.html_url : 'No available'}</p>
            </div>
          </div>
          <div className="col-lg-5 d-flex flex-column">
            <div>
              <MdAlternateEmail className="personal-info-icon" /><p>{DATA.email ? DATA.email : 'No available'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
