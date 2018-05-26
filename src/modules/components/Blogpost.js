import React, { Component } from 'react';
import styled from 'styled-components';
import img from '../../assets/atom.png';

import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const Title = styled.h1`
  padding-left: 15px;
  float: left;
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
const AlignButton = styled.div`
  float: right;
  padding-left: 25px;
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
          <img src={require('../../assets/logo.jpg')} alt="logo" width="100" height="75" />
          Filipino Style Carinderia
          <Text>Author: {this.state.author}</Text>
        </Title><br/>
        <AlignButton>
          <Button variant="fab" color="primary" aria-label="edit">
            <Icon>edit_icon</Icon>
          </Button>
        </AlignButton>
        <Hr/>
        <BodyContainer>
          <LeftContainer>
            {this.state.date}
            <img src={require('../../assets/atom.png')} alt="blogpost thumbnail" width="100" height="150" />
          </LeftContainer>
          <RightContainer>{this.state.msg}</RightContainer>
        </BodyContainer>
        <SeeMore>See more</SeeMore>
      </Wrapper>
    );
  }
}

export default Blogpost;
