import React, {useState} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import {Grid, Typography, List, ListItem, Button, Divider, CssBaseline, Paper, Container } from '@material-ui/core';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid>
          <HashRouter basename = "/">
            <Grid>
              <List>
                <ListItem>
                  <Typography>Saurabh Takle</Typography>
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