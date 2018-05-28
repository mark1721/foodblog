import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: "100%"
  },
  buttons: {
    flex: 1
  }
}
class NavBar extends Component {
  render() {
    return (
      <AppBar style={styles.root} color="primary" position="static">
        <Toolbar>
          <Typography style={styles.flex} variant="title" color="inherit">
            Food.com
          </Typography>
          <Button style={styles.buttons} color="inherit">Home</Button>
          <Button style={styles.buttons} color="inherit">About</Button>
          <Button style={styles.buttons} color="inherit">Blog</Button>
          <Button style={styles.buttons} color="inherit">Projects</Button>
          <Button style={styles.buttons} color="inherit">Contact Us</Button>
        </Toolbar>
      </AppBar>
    );
  }
}

export default NavBar;
