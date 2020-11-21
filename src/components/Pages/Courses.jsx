import React from 'react';
import { Component } from 'react';
import axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid.jsx';

class Courses extends Component {
  constructor(props) {
    super(props)

    this.state = {
      curses: []
    }
  }

  componentDidMount() {
    axios.get('http://my-json-server.typicode.com/sergiohdezchi/json-db/curses')
    .then(
      response => 
      this.setState(
        { curses: response.data }
      )
    )
  }

  render(){
    const { curses } = this.state

    return(
      <CourseGrid curses={curses}></CourseGrid>
    )
  }
}

export default Courses;
