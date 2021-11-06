import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Projects.css";

const projectData = {
  projectList: [
    {
      name: "Expense Tracker App",
      details: "In this is web app you can manage and track all your expenses",
      demo: "http://onerous-transport.surge.sh/",
      code: "https://github.com/Sameer-472/Expense-Tracker",
    },
    {
      name: "Covid-19 Tracker",
      details: "You can track the information about covid-19 globally ",
      demo: "https://sudden-zebra.surge.sh/",
      code: "https://github.com/Sameer-472/Covid-19-tracker",
    },
    {
      name: "Shoe Store",
      details: "You can enjoy purchase shoes with out reloading the page",
      demo: "https://github.com/Sameer-472/Shoes-store",
      code: "http://brash-cannon.surge.sh/",
    },
    {
      name: "Alice and racing queen",
      details: "made this running app with the help Web animation API in react",
      demo: "https://github.com/Sameer-472/Alice-and-the-red-queen",
      code: "https://best-letter.surge.sh/",
    },
  ],
};

const { projectList } = projectData;

projectList.map(({ name, details, demo, code }) => {
  console.log(name);
});

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = <React.Fragment></React.Fragment>;

export const Projects = () => {
  return (
    <>
      <div className="Project-container">
        <h1>Open Source Projects</h1>
        <Box sx={{}}>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            alignItems="center"
            item
          >
            {projectList.map(({ name, details, demo, code }) => {
              return (
                <>
                  <Grid
                    item
                    xs={10}
                    md={5}
                    data-aos="flip-right"
                    data-aos-delay="0"
                    data-aos-easing="ease"
                    data-aos-duration="2000"
                    // style={{backgroundColor: "green"}}
                  >
                    <div>
                      <Card variant="outlined" className="projectCard" >
                        <CardContent>
                          <Typography variant="h5" component="div">
                            {name}
                          </Typography>
                          <Typography variant="body2">
                            {details}
                            <br />
                          </Typography>
                          <CardActions>
                            <p>🟡 Javascript</p>
                          </CardActions>
                          <a href={demo}>

                            <button className="projectButton">Demo</button>
                          </a>
                          <a href={code}>
                           <button className="projectButton">Code</button>
                          </a>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Box>
      </div>
    </>
  );
};
