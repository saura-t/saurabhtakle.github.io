import React, {useState} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Grid, Typography, List, ListItem, Button, Divider, CssBaseline, Paper, Container, Avatar } from '@material-ui/core';

function App() {
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
                    alt = "Saurabh Takle"
                    variant = "circle"
                    src = 'src/Assets/website_image.jpg'>

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