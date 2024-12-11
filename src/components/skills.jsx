import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Grid, Card, CardContent, CardMedia } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./skills.css"; // Updated CSS


// Import images
import htmlCssImage from "../assets/languagess/html_css.png";
import jsImage from "../assets/languagess/js.png";
import tsImage from "../assets/languagess/ts.png";
import angularImage from "../assets/languagess/angular.png";
import reactImage from "../assets/languagess/reactjs.png";
import flutterImage from "../assets/languagess/flutter.png";
import nestImage from "../assets/languagess/nestjs.png";
import springImage from "../assets/languagess/spring.png";
import sqlImage from "../assets/languagess/sql.png";
import pythonImage from "../assets/languagess/python.png";
import javaImage from "../assets/languagess/java.png";
import cImage from "../assets/languagess/C.png";

function Skills() {
  const allSkills = [
    [
      { title: "HTML & CSS", description: "Build responsive layouts using HTML & CSS.", image: htmlCssImage },
      { title: "JavaScript", description: "Develop interactive applications using JavaScript.", image: jsImage },
      { title: "TypeScript", description: "Enhance JavaScript applications with TypeScript for better type safety.", image: tsImage },
    ],
    [
      { title: "Angular", description: "Create robust frontend applications with Angular.", image: angularImage },
      { title: "React JS", description: "Build powerful user interfaces with React JS.", image: reactImage },
      { title: "Flutter", description: "Develop cross-platform mobile apps using Flutter.", image: flutterImage },
    ],
    [
      { title: "Nest JS", description: "Efficient server-side applications with Nest JS.", image: nestImage },
      { title: "Spring Boot", description: "Create backend applications with Spring Boot.", image: springImage },
      { title: "SQL", description: "Manage and query relational databases.", image: sqlImage },
    ],
    [
      { title: "Python", description: "Solve complex problems with Python.", image: pythonImage },
      { title: "Java", description: "Develop robust applications with Java.", image: javaImage },
      { title: "C", description: "Create low-level and efficient programs with C.", image: cImage },
    ],
  ];

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % allSkills.length);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
  };
  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + allSkills.length) % allSkills.length);
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top
  };

  return (
    <Box sx={{ backgroundColor: "#0A0025", padding: "30px", color: "#fff", borderRadius: "15px" }}>
      {/* Why Choose Me Section */}
      <br/><br/>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Button variant="outlined" sx={{ borderColor: "#fff", color: "#fff", textTransform: "none", marginBottom: 2 }}>
          Why Choose Me
        </Button>
        <Typography variant="h3" sx={{ fontWeight: "bold", lineHeight: 1.2 }}>
          My Extensive
          <br />
          List of Skills
        </Typography>
      </Box>

      {/* Description */}
      <Box sx={{ textAlign: "center", maxWidth: 600, margin: "auto", marginBottom: 4, fontSize: "1rem", opacity: 0.8 }}>
        <Typography variant="body1">
          Building the world’s best marketing. Your trusted partner for strategy, design, and development.
        </Typography>
      </Box>

      {/* Skills Cards with Animation */}
      <div className="skills-slider">
        <div
          className="skills-slides"
          style={{
            transform: `translateX(-${currentPage * 100}%)`, // Horizontal slide
          }}
        >
          {allSkills.map((page, pageIndex) => (
            <div key={pageIndex} className="skills-page">
              <Grid container spacing={4} justifyContent="center" alignItems="center">
                {page.map((skill, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <div className="logo-container">
                      <Card
                        sx={{
                          backgroundColor: "#fff",
                          borderRadius: "15px",
                          textAlign: "center",
                          boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
                          padding: "15px",
                          color: "#000",
                        }}
                      >
                        <div className="logo-box">
                          <CardMedia
                            component="img"
                            image={skill.image}
                            alt={skill.title}
                            className="animated-logo"
                            sx={{
                              width: "150px",
                              height: "150px",
                              objectFit: "contain",
                              margin: "auto",
                            }}
                          />
                        </div>
                        <CardContent>
                          <Typography variant="h6" sx={{ marginTop: 2, fontWeight: "bold", fontSize: "1rem" }}>
                            {skill.title}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.7, marginTop: 1, fontSize: "0.85rem" }}>
                            {skill.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 4 }}>
        <IconButton onClick={handlePrev}>
          <ArrowBackIcon sx={{ color: "#fff", fontSize: 24 }} />
        </IconButton>
        <IconButton onClick={handleNext}>
          <ArrowForwardIcon sx={{ color: "#fff", fontSize: 24 }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Skills;
