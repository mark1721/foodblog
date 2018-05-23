import React, { Component } from 'react';
import styled from 'styled-components';
import Blogpost from './Blogpost';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  padding-right: 60px;
  padding-left: 60px;
  // box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  // transition: 0.3s;
`
const Header = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  background-color: black;
  color: white;
  text-align: left;
  font-size: 3em;
  box-shadow: 1px 4px 8px 0 rgba(0,0,0,0.2);
`
const Body = styled.div`

`
const Footer = styled.div`
  width: 100%
  background-color: black;
  color: white;
  font-size: 1em;
  position: fixed;
  text-align: center;
  bottom: 0;
  left: 0;
`

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg : ""
    }
  }

  componentDidMount() {
    fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1').
    then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        msg: data[0],
      })
    })
  }

  render() {
    return (
      <Container>
        <Header>
        <img src={require('../assets/pear.png')} width="50" height="50" />
          FOODS
        </Header>
        <Body>
          <Blogpost></Blogpost>
          <Blogpost></Blogpost>
          <Blogpost></Blogpost>
          <Blogpost></Blogpost>
          <Blogpost></Blogpost>
        </Body>
      </Container>

    );
  }
}

export default Home;
