import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Save from '@material-ui/icons/Save';

import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  margin-top: 10px;
  padding-bottom: 20px;
  width: 100%;
  box-shadow: 1px 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`
const Input = styled.input`
  width: 100px;
  height: 100px;
`
class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      entry: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    let head = 'http://localhost:3001/addpost';
    fetch(head, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        author: this.state.name,
        data: this.state.entry,
      }),
    })
    .then(res => res.json())
    .then( (res) => {
      console.log("blog posted");
      if (res.success) {
        this.setState({
          name: '',
          entry: '',
        });
      } else {
        console.log("not posted");
      }
    })
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.handleSubmit} method="POST">
          <label>
            Name:<br/>
            <Input type="text" value={this.state.name} name="name" onChange={this.handleChange}/>
          </label>
          <br/><br/>
          <label>
            Entry: <br/>
            <Input type="text" value={this.state.entry} name="entry" onChange={this.handleChange}/>
          </label>
          <br/><br/>
          <Button type="submit" variant="raised" size="small">
            <Save/>
            Save
          </Button>
          <br/>
        </form>
      </Wrapper>

    );
  }
}

export default PostForm;
