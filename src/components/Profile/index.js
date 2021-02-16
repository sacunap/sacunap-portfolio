import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline from "../Timeline/index";

import "./index.css";

import profilePic from "../../assets/images/profilePic.jpeg";

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">Sixto</Typography>
        <Typography className="title">Title</Typography>
      </div>
      <figure className="profile_image">
        <img src={profilePic} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline />
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Profile;
