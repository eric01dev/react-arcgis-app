import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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

export default function SearchDialog({open, handleDialogOpen, setResultList}) {

  const [locName, setlocName] = useState("");
  const [address, setAddress] = useState("");
  const [inHongKong, setInHongKong] = useState(false);

  useEffect(() => {
    handleClickOpen();
  }, []);

  const classes = useStyles();

  const handleClickOpen = () => {
    //setOpen(true);
  };

  const handleClose = () => {
    handleDialogOpen('search', false);
  };

  const handleSearch = () => {
    fetchAddress(locName, address, inHongKong)
      .then(result => {
        handleDialogOpen('result', true);
        setResultList(result);
      })
      .catch(reason => console.error(reason.toString()));
  }

  const handleClear = () => {
    setlocName("");
    setAddress("");
    setInHongKong(false);
  }

  const fetchAddress = async (locName, address, inHongKong) => {
    console.log('Search Criteria - Location Name:', locName);
    
    // Same Domain Sample
    //const response = await fetch('/api/search?keyword=' + locName + '&extent=');
    
    // Mock Request
    const response = await fetch('http://universities.hipolabs.com/search?country=Hong+Kong');
    const json = await response.json();
    return json;
  }

  return (
    <React.Fragment>
      <Dialog 
        fullScreen 
        disableBackdropClick={true} 
        hideBackdrop={true} 
        open={open} 
        onClose={handleClose}
        onEntered={() => handleDialogOpen('result', false)}
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
              Search
            </Typography>
          </Toolbar>
        </AppBar>
        
        <Container component="main">
          <CssBaseline />
          <div className={classes.paper}>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="locName"
                label="Location Name"
                name="locName"
                autoComplete="off"
                //autoFocus
                value={locName}
                onChange={(event) => {
                  setlocName(event.target.value);
                }}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="address"
                label="Address"
                name="address"
                autoComplete="off"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox 
                    checked={inHongKong}
                    color="primary" 
                    onChange={(event) => {
                      setInHongKong(event.target.checked);
                    }}
                  />
                }
                label="In Hong Kong"
              />
              <Grid container>
                <Grid item xs={6}>
                  <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  className={classes.submit}
                  onClick={handleClear}
                  >
                    Clear
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
        
      </Dialog>
    </React.Fragment>
  );
}