import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'sticky',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  root: {
    // Bottom 50% Dialog 
    height: '50vh',
    left: 'auto !important',
    bottom: '0 !important',
    top: 'auto !important',
    right: 'auto !important',
    width: '100%'
  },
  paper: {
    margin: 0,
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ResultDialog({open, handleDialogOpen, resultList}) {

  useEffect(() => {
    handleClickOpen();
  }, []);

  const classes = useStyles();

  const handleClickOpen = () => {
    //setOpen(true);
  };

  const handleClose = () => {
    handleDialogOpen('result', false);
  };

  return (
    <React.Fragment>
      <Dialog 
        fullScreen 
        disableBackdropClick={true} 
        hideBackdrop={true} 
        open={open} 
        onClose={handleClose} 
        onEntered={() => handleDialogOpen('search', false)}
        TransitionComponent={Transition} 
        classes={{ root: classes.root, paper: classes.paper }} 
        BackdropProps={{ open: false }}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Search Result
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          {resultList.map((object, index) => (
            <ListItem button key={index}>
              <ListItemText primary={object.name} secondary={object.country} />
            </ListItem>
            //<Divider />
          ))}
        </List>
      </Dialog>
    </React.Fragment>
  );
}