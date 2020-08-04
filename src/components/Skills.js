import React from 'react'
import { Typography, Card, Divider, Avatar, makeStyles, Link } from "@material-ui/core";

import html5 from '../Assets/html5.png';
import css3 from '../Assets/css3.png';
import react from '../Assets/react.png';
import bs from '../Assets/bootstrap.png'
import psql from '../Assets/postgre.png';
import tf from '../Assets/tf.png';
import keras from '../Assets/keras.jpg';
import win10 from '../Assets/win10.jpg';
import linux from '../Assets/linux.png';
import mysql from '../Assets/mysql.png';
import python from '../Assets/python.png';
import cpp from '../Assets/cpp.png';
import git from '../Assets/git.png';
import ps from '../Assets/photoshop.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));

const Skills = (props) => {
  const classes = useStyles();

  return(
    <div>
      <Typography variant="h3">Skills</Typography>
      <Divider style={{margin: "20px 0px"}}/>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Front-End Development
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div style={{padding: "20px"}}>
            <Avatar alt="HTML5" src={html5} className={classes.large}/>
            <Typography align='center'>HTML5</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="CSS3" src={css3} className={classes.large}/>
            <Typography align='center'>CSS3</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="Bootstrap" src={bs} className={classes.large}/>
            <Typography align='center'>Bootstrap</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="react" src={react} className={classes.large}/>
            <Typography align='center'>React JS</Typography>
          </div>
        </div>
      </Card>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Back-End Development
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div style={{padding: "20px"}}>
            <Avatar alt="PostgreSQL" src={psql} className={classes.large}/>
            <Typography align='center'>PostgreSQL</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="mysql" src={mysql} className={classes.large}/>
            <Typography align='center'>MySQL</Typography>
          </div>
        </div>
      </Card>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Deep Learning Libraries
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div style={{padding: "20px"}}>
            <Avatar alt="TensorFlow" src={tf} className={classes.large}/>
            <Typography align='center'>TensorFlow</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="Keras" src={keras} className={classes.large}/>
            <Typography align='center'>Keras</Typography>
          </div>
        </div>
      </Card>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Lanfuage Proficiency
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div style={{padding: "20px"}}>
            <Avatar alt="Python" src={python} className={classes.large}/>
            <Typography align='center'>Python</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="C++" src={cpp} className={classes.large}/>
            <Typography align='center'>C++</Typography>
          </div>
        </div>
      </Card>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Operating System
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div style={{padding: "20px"}}>
            <Avatar alt="Windows 10" src={win10} className={classes.large}/>
            <Typography align='center'>Windows 10</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="Linux" src={linux} className={classes.large}/>
            <Typography align='center'>Linux</Typography>
          </div>
        </div>
      </Card>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Extras
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "flex-start"}}>
          <div style={{padding: "20px"}}>
            <Avatar alt="Git" src={git} className={classes.large}/>
            <Typography align='center'>Git</Typography>
          </div>
          <div style={{padding: "20px"}}>
            <Avatar alt="photoshop" src={ps} className={classes.large}/>
            <Typography align='center'>Photoshop</Typography>
          </div>
        </div>
      </Card>
      
    </div>
   )

 }

export default Skills