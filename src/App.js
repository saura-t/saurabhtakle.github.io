import React, {useState} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Grid, Typography, List, ListItem, Button, Divider, CssBaseline, Paper, Container, Avatar, makeStyles } from '@material-ui/core';
import image from './Assets/website_image.jpg';

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
        <Grid>
          <HashRouter basename = "/">
            <Grid item xs={12} sm={2}>
              <List>
                <ListItem style={{ justifyContent: "center" }}>
                  <Avatar
                    className={classes.large}
                    src={image}
                    alt="Saurabh Takle">
                  </Avatar>
                </ListItem>
                <ListItem style={{ textAlign: "center", justifyContent: "center" }}>
                  <Typography variant = "h4">Saurabh Takle</Typography>
                </ListItem>
                <Divider/>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    About
                  </Button>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    Experience
                  </Button>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    Skills
                  </Button>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    Education
                  </Button>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    Contact
                  </Button>
                </ListItem>
                <ListItem style={{ justifyContent: "center" }}>
                  <Button
                    color="primary"
                    to="/"
                    component={Link}
                    variant="text"
                  >
                    About
                  </Button>
                </ListItem>
              </List>
            </Grid>
          </HashRouter>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default App;