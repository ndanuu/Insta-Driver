import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';


const messages = [
  {
    id: 1,
    name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u1.jpeg',
    text: 'Vacancy ads helps you attract potential hires who are...',
    title: 'Inquiry about reloca...'
  },
  {
    id: 2,
      name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u2.jpeg',
    text: 'Vacancy ads helps you attract potential hires who are...',
    title: 'Inquiry about reloca...'
  },
  {
    id: 3,
   name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u1.jpeg',
    text: 'Vacancy ads helps you attract potential hires who are...',
    title: 'Inquiry about reloca...'
  },
  {
    id: 4,
   name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u2.jpeg',
    text: 'Vacancy ads helps you attract potential hires who are...',
    title: 'Inquiry about reloca...'
  },
  {
    id: 5,
      name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u1.jpeg',
    text: 'Vacancy ads helps you attract potential hires who are...',
    title: 'Inquiry about reloca...'
  },
  {
    id: 6,
    name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u1.jpeg',
    text: 'Vacancy ads helps you attract potential hires who are...',
    title: 'Inquiry about reloca...'
  },
 
];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
    
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  listCard: {
      backgroundColor: '#e0f7fa',
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 12
  }
}));

const Chats = () =>  {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Paper square className={classes.paper}>
       
        <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, text }) => (
<Box my={3}>

            <Card  className={classes.listCard} key={id}>
        <CardContent>

              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                <ListItemText primary={name} secondary={twitter} />
                </ListItemAvatar>
                <Box p={4}>
                <Typography variant="h6">{title}</Typography>
                <ListItemText secondary={text} />
                </Box>
              </ListItem>
       </CardContent>

            </Card>
        </Box>

          ))}
        </List>

      </Paper>
    </React.Fragment>
  );
}

export default Chats;
