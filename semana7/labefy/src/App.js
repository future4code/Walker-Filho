import React from "react";
import axios from "axios";

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
const headers = {
  headers: {
    Authorization: "Walker-Froes-Molina"
  }
}

export default class App extends React.Component {

  state = {
    playlists: [],
    inputPlaylist: ""
  }

  componentDidMount() {
    this.pegarPlaylists();
  }

  mudarInputPlaylist = (event) => {
    this.setState({inputPlaylist: event.target.value})
  }

  pegarPlaylists = (event) => {
    axios  
      .get(url, headers)
      .then((res) => {
        this.setState({playlists: res.data.result.list})
      })
      .catch((err) => {
        //alert(err.response.data.message);
      })
    }

  criarPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist
    }

    axios
      .post(url,body, headers)
      .then((res) => {
        alert("Playlist cadastrada!")
        this.setState({inputPlaylist: ""})
        this.pegaPlaylists()
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
  }  

  deletarPlaylist = () => {
    
  }

  render () {

    const componentsPlaylist = this.state.playlists.map((play) => {
      return <li key={play.id}>{play.name}</li>;
    })

    return (
      <div>
        <h1>Playlists</h1>
        <input 
          value={this.state.inputPlaylist}
          onChange={this.mudarInputPlaylist}/>
        <button onClick={this.criarPlaylist}>Enviar</button>
        {componentsPlaylist}
      </div>
    );
  }
}

