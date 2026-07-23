import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: null,
      loading: true
    };
  }

  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
    console.log(data.results[0]);
  }

  render() {
    if (this.state.loading || !this.state.person) {
      return <div>loading...</div>;
    }

    const { person } = this.state;
    const nameStr = `${person.name.title} ${person.name.first} ${person.name.last}`;

    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', marginTop: '0px' }}>{nameStr}</h2>
        <img 
          src={person.picture.large} 
          alt={nameStr} 
          style={{ width: '128px', height: '128px', objectFit: 'cover' }} 
        />
      </div>
    );
  }
}

export default Getuser;
