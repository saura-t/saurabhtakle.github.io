import React, {useState} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Grid, 
  Typography, 
  List, 
  ListItem, 
  Button, 
  Divider, 
  CssBaseline, 
  Paper, 
  Container, 
  Avatar, 
  makeStyles, 
  ListItemText,
  ListItemAvatar
} from '@material-ui/core';
import image from './Assets/website_image.jpg';

import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container spacing={10}>
          <HashRouter basename = "/">
            <Grid item xs={12} sm={2}>
              <List>
                <ListItem style={{display: "flex", flexDirection: "column"}}>
                  <Avatar alt="Saurabh Takle" src={image} className={classes.large} />
                  <Typography variant="h4" align='center'>Saurabh Takle</Typography>
                  <Typography>• Student •</Typography>
                </ListItem>
                <Divider/>
                <ListItem >
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    About
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    color="primary"
                    to="/experience"
                    component={Link}
                    variant="text"
                  >
                    Experience
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    color="primary"
                    to="/projects"
                    component={Link}
                    variant="text"
                  >
                    Projects
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    color="primary"
                    to="/skills"
                    component={Link}
                    variant="text"
                  >
                    Skills
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    color="primary"
                    to="/education"
                    component={Link}
                    variant="text"
                  >
                    Education
                  </Button>
                </ListItem>
                <ListItem >
                  <Button
                    color="primary"
                    to="/contact"
                    component={Link}
                    variant="text"
                  >
                    Contact
                  </Button>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={9}>
                <Paper style={{ padding: "20px" }}>
                  <Route exact path="/" component={About} />
                  <Route path="/experience" component={Experience} />
                  <Route path="/projects" component={Projects} />
                  <Route path="/skills" component={Skills} />
                  <Route path="/education" component={Education} />
                  <Route path="/contact" component={Contact} />
                </Paper>
              </Grid>
          </HashRouter>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;