import React from "react";
import { Grid, Typography, Box, Link, Container } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useNavigate } from 'react-router-dom';

function Footer() {

    const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8);",
          fontWeight: "700",
          color: "white",
          padding: "2rem 0",
          marginTop: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography textAlign="center" variant="h6" gutterBottom>
                Happy Booking
              </Typography>
              <Typography sx={{display:"flex",textAlign:"justify", justifyContent:"center"}} variant="body2" >
                Manage everything from our Web-Application Keep track of
                scheduling and services from anywhere.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography textAlign="center" variant="h6" gutterBottom>
                About Us
              </Typography>
              <Typography textAlign="justify" variant="body2">
                We provide top-notch cleaning services with a focus on quality
                and customer satisfaction. Our professional team ensures your
                space is spotless and welcoming.
              </Typography>
              <Typography sx={{margin:"0.8rem 0"}} variant="body2"><b>Phone:</b> (123) 456-7890</Typography>
              <Typography sx={{margin:"0.8rem 0"}} variant="body2">
                <b>Email:</b> info@cleaningservice.com
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" textAlign="center" gutterBottom>
                Book Services
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate()} color="inherit" underline="hover" 
                    sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  Home Cleaning
                </Link>
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate()} color="inherit" underline="hover" 
                sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  Office Cleaning
                </Link>
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate()} color="inherit" underline="hover" 
                sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  Carpet Cleaning
                </Link>
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate()} color="inherit" underline="hover"
                sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  Window Cleaning
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography variant="h6" textAlign="center" gutterBottom>
                Quick Links
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate('/home')} color="inherit" underline="hover" 
                    sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  Home
                </Link>
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate('/about')} color="inherit" underline="hover" 
                sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  About Us
                </Link>
              </Typography>
              <Typography sx={{margin:"0.5rem 0"}} textAlign="center" variant="body2">
                <Link onClick={()=>navigate('/contact')} color="inherit" underline="hover" 
                sx={{ "&:hover": { color: "#3CB371", // Use the green color for hover
                            },
                        }}>
                  Contact
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Box
            mt={4}
            textAlign="center"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="body2" color="inherit">
              © {new Date().getFullYear()} Cleaning Service. All rights
              reserved.
            </Typography>
            <Stack
              direction="row"
              sx={{
                width: "100%",
                justifyContent: "center",
                paddingTop: "1rem",
              }}
              spacing={1}
            >
              <IconButton onClick={() => window.open("https://www.facebook.com/", "_blank")}color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton onClick={() => window.open("https://x.com/", "_blank")} color="inherit" aria-label="Twitter">
                <XIcon />
              </IconButton>
              <IconButton onClick={() => window.open("https://www.instagram.com", "_blank")} color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
