import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { IconButton, Grid, Card, CardContent, CardMedia, Skeleton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./skills.css";

function ImageWithFallback({ src, alt, ...props }) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Convert filename to lowercase and ensure absolute path
  const getImagePath = (src) => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = src.startsWith('/') ? src.slice(1) : src;
    const basePath = `/${cleanPath}`.toLowerCase();
    const webpPath = basePath.replace(/\.(png|jpg|jpeg)$/, '.webp');
    
    console.log('Processing image paths:', {
      input: src,
      webp: webpPath,
      original: basePath
    });
    
    return [webpPath, basePath];
  };

  const [webpSrc, originalSrc] = getImagePath(src);

  // Function to check if image exists
  const checkImage = (url) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Check both WebP and original format
  React.useEffect(() => {
    const verifyImages = async () => {
      const [webpExists, originalExists] = await Promise.all([
        checkImage(webpSrc),
        checkImage(originalSrc)
      ]);
      
      console.log('Image existence check:', {
        webp: { path: webpSrc, exists: webpExists },
        original: { path: originalSrc, exists: originalExists }
      });

      if (!webpExists && !originalExists) {
        console.error('Neither WebP nor original image exists:', {
          webp: webpSrc,
          original: originalSrc
        });
        setError(true);
      }
    };

    verifyImages();
  }, [webpSrc, originalSrc]);

  return (
    <>
      {loading && (
        <Skeleton 
          variant="rectangular" 
          width={150} 
          height={150} 
          animation="wave"
          sx={{ bgcolor: '#0a0025' }}
        />
      )}
      {!error ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <CardMedia
            component="img"
            src={originalSrc}
            alt={alt}
            className="animated-logo"
            loading="lazy"
            onError={(e) => {
              console.error('Image load error:', {
                element: e.target.tagName,
                src: e.target.src,
                webp: webpSrc,
                original: originalSrc,
                error: e.error
              });
              if (!error) {
                setError(true);
                e.target.src = "/fallback-image.svg";
              }
            }}
            onLoad={() => {
              console.log('Image loaded successfully:', {
                src: originalSrc,
                alt
              });
              setLoading(false);
            }}
            sx={{
              width: "150px",
              height: "150px",
              objectFit: "contain",
              margin: "auto",
              display: loading ? 'none' : 'block',
              filter: 'brightness(1)',
            }}
            {...props}
          />
        </picture>
      ) : (
        <CardMedia
          component="img"
          src="/fallback-image.svg"
          alt={`${alt} (fallback)`}
          sx={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
            margin: "auto",
            opacity: 0.7
          }}
        />
      )}
    </>
  );
}

function Skills() {
  const allSkills = [
    [
      { title: "HTML & CSS", description: "Build responsive layouts using HTML & CSS.", image: "/assets/languagess/html_css.png" },
      { title: "JavaScript", description: "Develop interactive applications using JavaScript.", image: "/assets/languagess/js.png" },
      { title: "TypeScript", description: "Enhance JavaScript applications with TypeScript for better type safety.", image: "/assets/languagess/ts.png" },
    ],
    [
      { title: "Angular", description: "Create robust frontend applications with Angular.", image: "/assets/languagess/angular.png" },
      { title: "React JS", description: "Build powerful user interfaces with React JS.", image: "/assets/languagess/reactjs.png" },
      { title: "Flutter", description: "Develop cross-platform mobile apps using Flutter.", image: "/assets/languagess/flutter.png" },
    ],
    [
      { title: "Nest JS", description: "Efficient server-side applications with Nest JS.", image: "/assets/languagess/nestjs.png" },
      { title: "Spring Boot", description: "Create backend applications with Spring Boot.", image: "/assets/languagess/spring.png" },
      { title: "SQL", description: "Manage and query relational databases.", image: "/assets/languagess/sql.png" },
    ],
    [
      { title: "Python", description: "Solve complex problems with Python.", image: "/assets/languagess/python.png" },
      { title: "Java", description: "Develop robust applications with Java.", image: "/assets/languagess/java.png" },
      { title: "C", description: "Create low-level and efficient programs with C.", image: "/assets/languagess/c.png" },
    ],
  ];

  // Log all image paths for debugging
  React.useEffect(() => {
    console.log('All skill image paths:', allSkills.flat().map(skill => skill.image));
  }, []);

  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % allSkills.length);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + allSkills.length) % allSkills.length);
  };

  return (
    <Box sx={{ backgroundColor: "#0A0025", padding: "30px", color: "#fff", borderRadius: "15px" }}>
      {/* Why Choose Me Section */}
      <br/><br/>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Button variant="outlined" sx={{ 
          borderColor: "#fff", 
          color: "#fff", 
          textTransform: "none", 
          marginBottom: 2,
          fontFamily: "'Fira Code', monospace"
        }}>
          Why Choose Me
        </Button>
        <Typography variant="h3" sx={{ 
          fontWeight: "bold", 
          lineHeight: 1.2,
          fontFamily: "'Fira Code', monospace"
        }}>
          My Extensive
          <br />
          List of Skills
        </Typography>
      </Box>

      {/* Description */}
      <Box sx={{ textAlign: "center", maxWidth: 600, margin: "auto", marginBottom: 4, fontSize: "1rem", opacity: 0.8 }}>
        <Typography variant="body1" sx={{ fontFamily: "'Fira Code', monospace" }}>
          Building the world's best marketing. Your trusted partner for strategy, design, and development.
        </Typography>
      </Box>

      {/* Skills Cards with Animation */}
      <div className="skills-slider">
        <div
          className="skills-slides"
          style={{
            transform: `translateX(-${currentPage * 100}%)`,
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
                          backgroundColor: "#0A0025",
                          borderRadius: "15px",
                          textAlign: "center",
                          boxShadow: "0 3px 8px rgba(0, 0, 0, 0.3)",
                          padding: "15px",
                          color: "#ffffff",
                          transition: "transform 0.3s ease",
                          '&:hover': {
                            transform: 'translateY(-5px)',
                          }
                        }}
                      >
                        <div className="logo-box">
                          <ImageWithFallback
                            src={skill.image}
                            alt={skill.title}
                          />
                        </div>
                        <CardContent>
                          <Typography variant="h6" sx={{ 
                            marginTop: 2, 
                            fontWeight: "500", 
                            fontSize: "1rem", 
                            color: "#ffffff",
                            fontFamily: "'Fira Code', monospace"
                          }}>
                            {skill.title}
                          </Typography>
                          <Typography variant="body2" sx={{ 
                            color: "#ffffff", 
                            opacity: 0.7, 
                            marginTop: 1, 
                            fontSize: "0.85rem",
                            fontFamily: "'Fira Code', monospace"
                          }}>
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
