import React from 'react';
import axios from 'axios';

// axios.get(`https://localhost:4000/moviesOfTheMonth/homepageLayout`)
//       .then(res => {
//         const persons = res.data;
//         console.log(persons)
//     })
export default class PersonList extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://localhost:4000/moviesOfTheMonth/homepageLayout`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>
      )
    }
  }