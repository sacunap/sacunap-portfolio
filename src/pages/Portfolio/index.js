import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import "./index.css";
import dubsnip1 from "../../assets/images/dubsnip1.png";
import minimarket1 from "../../assets/images/minimarket1.png";
import CustomButton from "../../components/Button/index";

const Portfolio = () => {
  return (
    <Grid>
      <Grid container spacing={2} className="section pt_45 pb_45 project">
        <Grid item xs={12} lg={4}>
          <Grid container>
            <p className="project_description">
              Este proyecto fue desarrollado junto a 6 compañeros, consiste en
              una tienda de instrumentos musicales. En este proyecto trabajé
              como full stack, por lo cual vi front y back, utilizando
              tecnologías como
              <b> React, Redux, ExpressJS, PostgreSQL, Sequelize</b>.
            </p>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={8}>
          <img className="project_image" src={dubsnip1} />
        </Grid>

        <div className="btn_demo_code">
          <CustomButton className="demo_btn" text="Demo" />
          <CustomButton className="code_btn" text="Code" />
        </div>
      </Grid>

      <Grid container spacing={2} className="section pt_45 pb_45 project">
        <Grid item xs={12} lg={4}>
          <Grid container>
            <p className="project_description">
              Este trabajo consistió en construir un Front-End y un BackEnd que
              interactúa con la API de mercadolibre. Fue un trabajo en pareja y
              utilizamos <b>React, ExpressJS y Styled components </b>para los
              estilos.
            </p>
          </Grid>
        </Grid>

        <Grid item xs={12} lg={8}>
          <img className="project_image" src={minimarket1} />
        </Grid>

        <div className="btn_demo_code">
          <CustomButton className="demo_btn" text="Demo" />
          <CustomButton className="code_btn" text="Code" />
        </div>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
