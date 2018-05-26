import React, { Component } from 'react';

// for custom styling components
import styled from 'styled-components';

import Blogpost from '../components/Blogpost';
import PostForm from '../components/PostForm';

const Body = styled.div`
  padding-right: 60px;
  padding-left: 35%;
  font-family: 'Montserrat', sans-serif;
`

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogposts : []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/getposts')
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({
        blogposts: data.blogposts,
      });
    })
  }

  render() {
    return (
      <Body>
        <PostForm/>
         {this.state.blogposts.map(post => (
          <Blogpost
            date={post.createdAt}
            key={post._id}
            message={post.data}
            author={post.author}
            />
        ))}
      </Body>
    );
  }
}

export default Blog;
