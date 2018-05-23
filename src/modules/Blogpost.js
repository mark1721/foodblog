import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../assets/atom.png';

const Title = styled.h1`
  padding-top: 10px;
  text-align: center;
`
const Wrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  box-shadow: 1px 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`
const BodyContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`
const Hr = styled.hr`
  color: black;
  background-color: black;
  width: 90%;
  height: 5;
`
const LeftContainer = styled.div`
  width: 20%;
  float:left;
`
const RightContainer = styled.div`

`
const SeeMore = styled.div`
  text-align: right;
  font-size: 0.8em;
`

class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg : ""
    }
  }

  componentWillMount() {
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
      <Wrapper>
        <Title>
          <img src={require('../assets/logo.jpg')} width="100" height="75" />
          Filipino Style Carinderia
          <Hr/>
        </Title>
        <BodyContainer>
          <LeftContainer>
            <img src={require('../assets/atom.png')} width="100" height="100" />
          </LeftContainer>
          <RightContainer>{this.state.msg}</RightContainer>
        </BodyContainer>
        <SeeMore>See more</SeeMore>
      </Wrapper>
    );
  }
}

export default Blogpost;
