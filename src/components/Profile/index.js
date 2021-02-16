import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline from "../Timeline/index";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";

import resumeData from "../../utils/resumeData";

import "./index.css";

import profilePic from "../../assets/images/profilePic.jpeg";

const Profile = () => {
  return (
    <div className="profile container_shadow ">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={profilePic} alt="" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlinedIcon />} />
        <br />
        <button>my Button</button>
      </div>
    </div>
  );
};

export default Profile;
