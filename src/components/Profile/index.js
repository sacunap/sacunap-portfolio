import { Typography } from "@material-ui/core";
import React from "react";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/index";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import resumeData from "../../utils/resumeData";
import "./index.css";
import profilePic from "../../assets/images/profilePic.jpeg";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import CustomButton from "../Button/index";
import GetAppIcon from "@material-ui/icons/GetApp";

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}:</span> {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);

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
        <CustomTimeline icon={<PersonOutlinedIcon />}>
          <CustomTimelineItem title="Nombre" text={resumeData.name} />
          <CustomTimelineItem title="Correo" text={resumeData.email} />

          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container">
          <CustomButton text={"Descargar CV"} icon={<GetAppIcon />} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
