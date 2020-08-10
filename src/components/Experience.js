import React from 'react'
import { Typography, Divider, Grid, Paper, makeStyles, Link } from "@material-ui/core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.primary,
  },
}));

const Experience = (props) => {
  const classes = useStyles();

  return(
    <div>
      <Typography variant='h3'>Experience</Typography>
      <Divider style={{margin: "20px 0px"}} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Link href="http://lazytech.in/" target="_blank" underline="none" color="inherit">
              <Typography align="left" variant="h5">Lazytech Infotech Soln.
                <FontAwesomeIcon icon={faExternalLinkAlt} style={{padding: "5px"}}></FontAwesomeIcon>
              </Typography>
            </Link>
            <Typography align="left" variant="body1" color="textSecondary">Android Developer Intern (Jun 2019 - Aug 2019)</Typography>
            <Divider style={{margin: "20px 0px"}} />
            <Typography variant="body1">
              ♦ Created UI/UX for a login form which has 3 different user_level (Admin, Manager, Customer)
            </Typography>
            <Typography variant="body1">
              ♦ Developed UI/UX in Easy Room Point, it shows nearby rooms available for rent.
            </Typography>
            <Typography variant="body1">
              ♦ Improved calendar widget and overall experience. 
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
   )

 }

export default Experience