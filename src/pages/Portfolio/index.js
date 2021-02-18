import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import "./index.css";
import dubsnip1 from "../../assets/images/dubsnip1.png";
import dubsnip2 from "../../assets/images/dubsnip2.png";
import dubsnip3 from "../../assets/images/dubsnip3.png";
import dubsnip4 from "../../assets/images/dubsnip4.png";
import minimarket1 from "../../assets/images/minimarket1.png";
import minimarket2 from "../../assets/images/minimarket2.png";
import minimarket3 from "../../assets/images/minimarket3.png";
import CustomButton from "../../components/Button/index";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const Portfolio = () => {
  const slidesDubsnip = [
    {
      img: dubsnip1,
      alt: "picture1_Dubsnip",
    },
    {
      img: dubsnip2,
      alt: "picture2_Dubsnip",
    },
    {
      img: dubsnip3,
      alt: "picture3_Dubsnip",
    },
    {
      img: dubsnip4,
      alt: "picture4_Dubsnip",
    },
  ];
  const slidesMiniMarket = [
    {
      img: minimarket1,
      alt: "picture1_MiniMarket",
    },
    {
      img: minimarket2,
      alt: "picture2_MiniMarket",
    },
    {
      img: minimarket3,
      alt: "picture3_MiniMarket",
    },
  ];

  return (
    <Grid>
      <Grid container spacing={5} className="section pt_45 pb_45 project">
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
          <Slider autoplay={3000}>
            {slidesDubsnip.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.img}
                  alt={slide.description}
                  className="project_image"
                />
              </div>
            ))}
          </Slider>
          <div className="btn_demo_code">
            <a href="https://dubsnip.dubsnip.vercel.app/" target="_blank">
              <CustomButton className="demo_btn" text="Demo" />
            </a>
            <a href="https://github.com/sacunap/DubsNip" target="_blank">
              <CustomButton className="code_btn" text="Code" />
            </a>
          </div>
        </Grid>
      </Grid>

      <Grid container spacing={5} className="section pt_45 pb_45 project">
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
          <Slider autoplay={3000}>
            {slidesMiniMarket.map((slide, index) => (
              <div key={index}>
                <img
                  src={slide.img}
                  alt={slide.description}
                  className="project_image"
                />
              </div>
            ))}
          </Slider>
          <div className="btn_demo_code">
            <a href="https://mini-market2.vercel.app/" target="_blank">
              <CustomButton className="demo_btn" text="Demo" />
            </a>
            <a href="https://github.com/sacunap/LabsChallenge" target="_blank">
              <CustomButton className="code_btn" text="Code" />
            </a>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
