import styled from "styled-components";
import StarWarsLogo from "../img/Star-wars-logo.jpg";

const StarshipsContainer = styled.div`
    width: 100px;
    height: 150px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: end;
    p {
        margin: 0;
    }
    background-image: url(${StarWarsLogo});
    background-position:  center;
    background-size: cover;
`;

const Image = styled.img`
`;

const Starship = styled.p`
    color: white;
    background-color: #1f2738;
    padding: 10px;
`;

export const StarshipsCard =({ name, image}) => {
    return (
        <StarshipsContainer>
            <Image src={StarWarsLogo} />
            <Starship>{name}</Starship>
        </StarshipsContainer>

    )
}