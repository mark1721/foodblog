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
  height: 250px;
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
 width: 80%;
`
const SeeMore = styled.div`
  text-align: right;
  font-size: 0.8em;
`
const Text = styled.h2`
  text-align: right;
  padding-right: 150px;
  font-size: 1em;
`
class Blogpost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg : "",
      author: "",
      date: "",
    }
  }

  componentWillMount() {
    let date = this.props.date;
    this.setState({
      msg: this.props.message,
      id: this.props.id,
      author: this.props.author,
      date: date,
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>
          <img src={require('../assets/logo.jpg')} width="100" height="75" />
          Filipino Style Carinderia
        </Title>
        <Text>Author: {this.state.author}</Text>
        <Hr/>
        <BodyContainer>
          <LeftContainer>
            {this.state.date}
            <img src={require('../assets/atom.png')} width="100" height="150" />
          </LeftContainer>
          <RightContainer>{this.state.msg}</RightContainer>
        </BodyContainer>
        <SeeMore>See more</SeeMore>
      </Wrapper>
    );
  }
}

export default Blogpost;
