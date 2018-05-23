import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navBar: {
    color: 'white',
  }
};

class NavBar extends Component {
  render() {
    return (
      <AppBar color="default" className={styles.navBar} position="static">
        <Toolbar>
          <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon showMenuIconButton="true" />
          </IconButton>
          <Typography variant="title" color="inherit" className={styles.flex}>
            Food.com
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
