import React, { Component } from 'react';

// for custom styling components
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
`
const Body = styled.div`
  padding-right: 60px;
  padding-left: 35%;
`
class About extends Component {
  render() {
    return (
      <Container>
        <Body>
          This is the About Page.
        </Body>
      </Container>
    );
  }
}

export default About;
