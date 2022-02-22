import axios from "axios"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { StarshipsCard } from '../components/starshipsCard'

const StarshipsPageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4,1fr);
    justify-items: center;
    row-gap: 15px;
`;


export const StarshipsPage = () => {

    const [ships, setShip] = useState([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/')
        .then(({ data }) => {
            setShip(data.results);
        })
        .catch(err => console.log(err))
    }, []);

    return (
        <StarshipsPageContainer>
            {ships.map((ship, index) => <StarshipsCard key={index} name={ship.name} image={'image'} />)}
        </StarshipsPageContainer>
    )
}