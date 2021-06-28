import React from 'react';
import axios from 'axios';
import "./styles.css";

export default class App extends React.Component {

  state = {
    pokemons: [],
    picture: []
  }

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    this.setState({pokemons: response.data.results})
  };
  
  getLokePicture = async (event) => {
    const url = event.target.value
    const response = await axios.get(`${url}`)
    this.setState({picture: response.data.sprites.front_default});
  }

  render() {

    const pokeList = this.state.pokemons.map((poke) => {
      return <option key={poke.name} value={poke.url}>{poke.name}</option>
    })

    return (
      <div className="App">
        <h1>Pokemons</h1>
        <select onChange={this.getLokePicture}>
          <option>Selecione um pokemon.</option>
          {pokeList}
        </select>
        {this.state.picture &&
        <img src={this.state.picture} alt="Foto do Pokemon"></img>
        }

      </div>
    );
  }    
}

