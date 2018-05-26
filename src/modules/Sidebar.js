import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import AboutIcon from '@material-ui/icons/Mail';
import BlogIcon from '@material-ui/icons/Forum';
import ProjectsIcon from '@material-ui/icons/Archive';

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Projects from './pages/Projects';

import NavBar from './components/Header';

const Styledbar = styled.div`
  position: fixed;
  z-index: 1;
  top: 20px;
  left: 15%;
  top: 10%;
  overflow-x: hidden;
  padding: 5px 0px 5px 15px;
  list-style-type: none;
  transition: 0.3s;
`
const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>Home Page</div>,
    main: ()=> <Home/>
  },
  {
    path: "/about",
    sidebar: () => <div>About Page</div>,
    main: ()=> <About/>
  },
  {
    path: "/blog",
    exact: true,
    sidebar: () => <div>Blog Page</div>,
    main: ()=> <Blog/>
  },
  {
    path: "/projects",
    exact: true,
    sidebar: () => <div>Projects Page</div>,
    main: ()=> <Projects/>
  },
]

class Sidebar extends Component {
  render() {
    return (
      <Container>
      <NavBar/>
      <Router>
          <div style={{ display: "flex" }}>
            <Styledbar style={{
                padding: "10px",
                width: "20%"
              }}>
              <ul style={{ listStyleType: "none" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <HomeIcon/> Home
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none"}} to="/about">
                    <AboutIcon/> About
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none"}} to="/blog">
                    <BlogIcon/> Blog
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none"}} to="/projects">
                    <ProjectsIcon/> Projects
                  </Link>
                </li>
              </ul>

              {routes.map((route, index) => (
                <Router
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.sidebar}
                />
              ))}
            </Styledbar>
            <div style={{ flex: 1, padding: "10px" }}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                />
              ))}
            </div>
          </div>
        </Router>
      </Container>
    );
  }
}

export default Sidebar;
