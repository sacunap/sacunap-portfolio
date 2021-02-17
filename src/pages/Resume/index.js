import { Grid, TextField, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline, {
  CustomTimelineSeparator,
} from "../../components/Timeline/index";
import "./index.css";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineContent from "@material-ui/lab/TimelineContent";
import SchoolIcon from "@material-ui/icons/School";
import TagCloud from "react3dtagcloud";
import CustomButton from "../../components/Button/index";

const Resume = () => {
  const tags = [
    "JavaScript",
    "HTML",
    "CSS",
    "Git/Github",
    "React",
    "Redux",
    "NodeJS",
    "ExpressJS",
    "Scrum",
    "MongoDB",
    "Mongoose",
    "GraphQL",
  ];
  return (
    <>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutMe_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="section pt_45 pb_45">
        <Grid item xs={12} lg={6}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Resume</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="resume_timeline">
                <Grid item sm={12} md={12}>
                  <CustomTimeline
                    title="Education History"
                    icon={<SchoolIcon />}
                  >
                    {resumeData.education.map((_education) => (
                      <TimelineItem>
                        <CustomTimelineSeparator />
                        <TimelineContent className="timeline_content">
                          <Typography className="timeline_title">
                            {_education.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="timeline_date"
                          >
                            {_education.date}
                          </Typography>
                          <Typography
                            variant="body2"
                            className="timeline_description"
                          >
                            {_education.description}
                          </Typography>
                        </TimelineContent>
                      </TimelineItem>
                    ))}
                  </CustomTimeline>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={6}>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Skills</h6>
          </Grid>
          <Grid container className="tagCloud">
            <Grid item xs={12}>
              <TagCloud tagName={tags} radius={100}></TagCloud>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid container spacing={6} className="section pt_45 pb_45">
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth name="message" label="Message" />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={5}>
          <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Contact information</h6>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Address: </span> {resumeData.address}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Phone: </span> {resumeData.phone}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className="contactInfo_item">
                  <span>Email: </span> {resumeData.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
