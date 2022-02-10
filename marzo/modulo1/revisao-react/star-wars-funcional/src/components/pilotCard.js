import styled from "styled-components";
import StarWarsLogo from "../img/Star-wars-logo.jpg";

export const PilotCardContainer = styled.div`
    width: 100px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: end;
    p{
        margin: 0;
    }
`;

const Image = styled.img`

`;

const Name = styled.p`
    color: white;
    background-color: #1f2738;
    padding: 10px;
`;

export const PilotCard = ({name, image}) => {
    return (
        <PilotCardContainer>
            <Image src={StarWarsLogo} />
            <Name>{name}</Name>
        </PilotCardContainer>
    )
}    
