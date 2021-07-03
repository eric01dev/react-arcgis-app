import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
});

export default function MainSimpleBottomNavigation({ children, handleDialogOpen }) {
  
  const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <React.Fragment>
      {children}

      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="Search" icon={<SearchIcon />} onClick={() => handleDialogOpen('search')} />
        <BottomNavigationAction label="Result" icon={<ListIcon />} onClick={() => handleDialogOpen('result')} />
        <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
      </BottomNavigation>
    </React.Fragment>
  );
}