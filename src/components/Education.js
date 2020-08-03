import React from 'react'
import { Typography, Divider, Card, CardActionArea, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Education = (props) => {
  const classes = useStyles();

  return(
    <div>
      <Typography variant="h3">Education</Typography>
      <Divider style={{margin: "20px 0px"}}/>
      <Card style={{padding: "20px"}} variant="outlined">
        <Typography 
          variant="h5"
          style={{padding: "0px 10px 0px 0px"}}>
          Vidyalankar Institute of Technology,
          <Typography>Mumbai, IN</Typography>
        </Typography>
        <Divider style={{margin: "20px 0px"}}/>
        <Typography>
          🎓 B.E in Information Technology
        </Typography>
        <br/>
        <Typography>
          🎓 6.93 GPA (till-date)
        </Typography>
      </Card>
    </div>
   )

 }

export default Education