import React, { Component } from 'react';
import styled from 'styled-components';
import Blogpost from './Blogpost';
import NavBar from './Header';
import PostForm from './PostForm';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  padding-right: 60px;
  padding-left: 60px;
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
      blogposts : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/getposts').
    then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        blogposts: data.blogposts,
      });
      console.log(data);
    })
  }


  render() {
    return (
      <Container>
        <NavBar/>
        <Body>
          <PostForm/>
           {this.state.blogposts.map(post => (
            <Blogpost date={post.createdAt} key={post._id} message={post.data} author={post.author}/>
          ))}
        </Body>
      </Container>

    );
  }
}

export default Home;
