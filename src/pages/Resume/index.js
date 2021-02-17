import { Grid, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import "./index.css";

const Resume = () => {
  return (
    <>
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant ="body2" className="aboutMe_text">{resumeData.about}</Typography>
        </Grid>
      </Grid>

      <Grid container className="section"></Grid>

      <Grid container className="section"></Grid>
    </>
  );
};

export default Resume;
