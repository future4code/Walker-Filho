import styled from "styled-components";
import StarWarsLogo from '../img/Star-wars-logo.jpg';

const BackImageStyled = styled.img`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${StarWarsLogo});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const BackImage = () => {
    return(
        <BackImageStyled />
    );
}