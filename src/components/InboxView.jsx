import React from "react";

import { makeStyles, fade } from "@material-ui/core/styles";

import {
  IconButton,
  Button,
  Modal,
  Grid,
  Card,
  CardContent,
  Box,
  TextField,
  Typography,
  Avatar,
  Paper,
  List,
  ListItemText,
  ListItem,
  ListItemAvatar,
  TextareaAutosize,
  Divider
} from "@material-ui/core";

import { Search, FilterListOutlined, MoreVert, AttachmentOutlined, MoodOutlined, MicOutlined, SendOutlined, InfoOutlined } from "@material-ui/icons";

import Chats from "./Chats";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "#ff4444",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  button: {
    backgroundColor: "#ffbb33",
    color: "#fff",
    borderRadius: 6,
  },
  chatCard: {
    backgroundColor: "#fafafa",
    borderRadius: 6,
    borderColor: "#FF8800",
  },
  iconMenu: {
    marginRight: 100,
    backgroundColor: "#1C2331",
    color: "#fff",
  },
  textFieldFormLabel: {
    color: "#1a237e",
  },
  textFieldRoot: {
    borderRadius: 26,
    paddingLeft: 30,
  },
  textFieldInput: {
    color: "#1c2331",
    paddingLeft: 30,
  },
  textFieldSearch: {
    paddingRight: 80,
  },
  paperModal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  messageCard: {
      borderRadius: 10,
      backgroundColor: '#fafafa',
  },
  profileCard: {
        borderRadius: 10,
       backgroundColor: '#b2ebf2',

  },
  list: {
      marginTop: 0
  },
  cardMessage :{
       backgroundColor: '#b2ebf2',
       color: '#1c2331',
       borderBottomLeftRadius: 45,
       borderTopRightRadius: 45,
       borderBottomRightRadius: 45


  },
   cardReply: {
        backgroundColor: '#efebe9',
       color: '#1c2331',
       borderBottomLeftRadius: 45, 
       borderTopRightRadius: 45,
       borderTopLeftRadius: 45


   }
}));

const messages = [
  {
    id: 1,
    name: 'Shirly Cook',
    twitter: "@JohntheD",
    person: '/static/images/u1.jpeg',
    title: 'Inquiry about relocation from Nairobi',
    new_message: 'Loco in voluptate velit esse cillum dolorsint occaecat ollit anim id est laborum.',
    replies: 'Lorem ercitationprehenderit in voluptate sint occaecat cupida.'
  },
];

const InboxView = () => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paperModal}>
      <Box style={{ backgroundColor: "#4B515D" }}>
        <Typography variant="h5" style={{ color: "#fff", marginLeft: 10 }}>
          Filters
        </Typography>
      </Box>
      <Box my={2}>
        <select class="browser-default custom-select rounded-pill">
          <option selected>Message Statuses</option>
          <option value="1">Message</option>
          <option value="2">Message Two</option>
          <option value="3">Message Three</option>
        </select>
      </Box>

      <Box my={4}>
        <select class="browser-default custom-select rounded-pill">
          <option selected>Time of Messages</option>
          <option value="1">10:30 AM</option>
          <option value="2">09:34 AM</option>
          <option value="3">12:28 PM</option>
        </select>
      </Box>

      <Box my={4} justifyContent="center" display="flex">
        <Button
          style={{ backgroundColor: "#FF8800", color: "#fff", borderRadius: 7 }}
        >
          Apply Filters
        </Button>
      </Box>
    </div>
  );

  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Box justifyContent="center" display="flex">
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <TextField
                size="small"
                type="search"
                placeholder="Search..."
                variant="outlined"
                className={classes.textFieldSearch}
                InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
              />
            </div>

            <IconButton
              color="primary"
              aria-label="add menu"
              className={classes.iconMenu}
              onClick={handleOpen}
            >
              <FilterListOutlined />
            </IconButton>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {body}
            </Modal>
          </Box>
        </Grid>
        <Grid item xs={4}></Grid>

        <Grid item xs={4}>
          <Button className={classes.button}>Start a new chat</Button>
        </Grid>
      </Grid>

      {/* Second Grid */}
      <Grid container spacing={3}>
        <Grid item xs={5}>
          {/* Importing chat view */}
          <Chats />
        </Grid>
        <Grid item xs={7}>
         <Card className={classes.messageCard}>
            <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title }) => (
           <Box my={3} >

            <Paper  className={classes.profileCard} key={id}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={person} />
                <ListItemText primary={name} secondary={twitter} />
                </ListItemAvatar>
                <Box p={4}>
                <Typography variant="h5" > {title}
                </Typography>
                    <Button
        variant="contained"
        style={{left: 440, backgroundColor: '#424242',borderRadius: 12, color: '#fff'}} size="large"
        className={classes.button}
        startIcon={<InfoOutlined />}
      >
        Contact info
      </Button>

<IconButton style={{left: 440, marginLeft: 5, color: '#424242'}} size="large" variant="outlined">
<MoreVert />
</IconButton>

                </Box>
              </ListItem>
              
            </Paper>

        </Box>

          ))}
        </List>


<Grid container spacing={4}>
<Grid item xs={6}>   
      <Card className={classes.cardMessage}>
        <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, new_message, replies}) => (
           <Box my={3} >

            <Typography >{new_message}</Typography>
            
           </Box>

          ))}
        </List>

        </CardContent>
        </Card>
</Grid>

   </Grid>

   <Grid container spacing={4}>
<Grid item xs={6} />   

<Grid item xs={6}>   

         <Card className={classes.cardReply}>
        <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, new_message, replies}) => (
           <Box my={3} >

            <Typography >{replies}</Typography>
            
           </Box>

          ))}
        </List>
        </CardContent>
        </Card>
   </Grid>
   </Grid>

   {/* message chat row 2 */}


<Grid container spacing={4}>
<Grid item xs={6}>   
      <Card className={classes.cardMessage}>
        <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, new_message, replies}) => (
           <Box my={3} >

            <Typography >{new_message}</Typography>
            
           </Box>

          ))}
        </List>

        </CardContent>
        </Card>
</Grid>

   </Grid>

   <Grid container spacing={4}>
<Grid item xs={6} />   

<Grid item xs={6}>   

         <Card className={classes.cardReply}>
        <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, new_message, replies}) => (
           <Box my={3} >

            <Typography >{replies}</Typography>
            
           </Box>

          ))}
        </List>
        </CardContent>
        </Card>
   </Grid>
   </Grid>

{/* message chat row 3
 */}


<Grid container spacing={4}>
<Grid item xs={6}>   
      <Card className={classes.cardMessage}>
        <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, new_message, replies}) => (
           <Box my={3} >

            <Typography >{new_message}</Typography>
            
           </Box>

          ))}
        </List>

        </CardContent>
        </Card>
</Grid>

   </Grid>

   <Grid container spacing={4}>
<Grid item xs={6} />   

<Grid item xs={6}>   

         <Card className={classes.cardReply}>
        <CardContent>
         <List className={classes.list}>
          {messages.map(({ id, name, twitter, person, title, new_message, replies}) => (
           <Box my={3} >

            <Typography >{replies}</Typography>
            
           </Box>

          ))}
        </List>
        </CardContent>
        </Card>
   </Grid>
   </Grid>


{/* Message Input typing area
 */}

<Box my={3} justifyContent="center" display="flex">
 <TextareaAutosize aria-label="minimum height"
   InputProps={{
                  disableUnderline: true,
                  classes: {
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                  className: classes.textFieldFormLabel,
                }}
  frowsMin={3} placeholder="Type your message" style={{borderRadius: 25, width: '100%', height: 100}} />
</Box>
<Box my={3} justifyContent="center" display="flex">
<IconButton
              color="primary"
              aria-label="add menu"
              className={classes.iconMenu}
            >
              <AttachmentOutlined />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="add menu"
              className={classes.iconMenu}
            >
              <MoodOutlined />
            </IconButton>

            <IconButton
              color="primary"
              aria-label="add menu"
              className={classes.iconMenu}
            >
              <MicOutlined />
            </IconButton>

             <Button
              color="primary"
              aria-label="add menu"
              style={{width: 80, color: '#fff', backgroundColor: '#fdd835',borderRadius: 6}}
            >
              <SendOutlined />
            </Button>
</Box>
           
        
            </CardContent>
            </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default InboxView;
