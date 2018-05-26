import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class NavBar extends Component {
  render() {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Food.com
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;