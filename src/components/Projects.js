import React from 'react'
import { Card, Typography, Divider, Link, Paper, Grid, makeStyles, CardHeader, CardMedia, Avatar, Collapse, IconButton, CardContent, CardActions } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import clsx from 'clsx'

import cp from '../Assets/project/cp.png'
import tweet from '../Assets/project/twitter.jpg'

const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    color: theme.palette.text.secondary,
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Projects = (props) => {
  const grids = styles();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    e = e || window.event;
    e.preventDefault();
    setExpanded(!expanded);
  };

  return(
    <div>
      <Typography variant="h3">Projects</Typography>
      <Divider style={{margin: "20px 0px"}}/>
      <Grid container className={grids.root} >
        <Grid item xs={12} sm={6}>
          <Paper className={grids.paper}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    C
                  </Avatar>
                }
                title="College Portal"
                subheader="September 23, 2019"/>
              <CardMedia
                className={classes.media}
                image={cp}
                title="Paella dish"/>
              <CardActions disableSpacing>
                <IconButton href="https://github.com/saurabhtakle/Website-College-Portal">
                  <FontAwesomeIcon icon={faGithub} style={{margin: "5px"}} />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body1" component="p">
                    College Portal website, where admins can post notices and any user can view without logging in.
                  </Typography><br/>
                  <Typography paragraph>
                    Technologies: HTML5, CSS3, phpMyAdmin
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={grids.paper}>
            <Card className={classes.root}>
              <CardHeader
                avatar={<Avatar aria-label="recipe" className={classes.avatar}>T</Avatar>}
                title="Tweet Search"
                subheader="May 29, 2019"/>
              <CardMedia
                className={classes.media}
                image={tweet}
                title="Paella dish"/>
              <CardActions disableSpacing>
              <IconButton href="https://github.com/saurabhtakle/Twitter-API">
                  <FontAwesomeIcon icon={faGithub} style={{margin: "5px"}} />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more">
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography variant="body1" component="p">
                    Tweet Seracher can search all the recent tweets when a valid twitter user_id is entered.
                  </Typography><br/>
                  <Typography paragraph>
                    Technologies: Python, Tweepy
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Paper>
        </Grid>
      </Grid>
    </div>
   )

 }

export default Projects