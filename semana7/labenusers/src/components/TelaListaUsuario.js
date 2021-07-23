import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border:1px solid black;
    padding: 10px;
    margin: 10px;
    width: 300;
    display: flex;
    justify-content: space-between;
    `

export default class TelaListaUsuario extends React.Component{

    state = {
        usuarisos: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "Walker-Froes-Molina"
            }
        })
        .then((res) => {
            this.setState({usuarios: res.data})
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "Walker-Froes-Molina"
            }
        })
        .then((res) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        })
        .catch((err) => {
            alert("Ocorreu um erro, tente novamente.")
        })
    }

    render() {

        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <button>X</button>
                </CardUsuario>
            )
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
} 