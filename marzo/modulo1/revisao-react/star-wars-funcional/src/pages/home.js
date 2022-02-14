import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 85vh;

`;

const ActionButton = styled.button`
    padding: 20px;
    display: inline-block;
    padding: 15px;
    width: 18%;
    border: 1px solid black;
    color: #FEE819;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 12px;
    &:hover {
        background: white;
    }
`;

export const HomePage = () => {

    const navigation = useNavigate()

    return (
        <HomePageContainer>
            <ActionButton onClick={() => navigation('starships')}>
                Starship
            </ActionButton>
            <ActionButton onClick={() => navigation('pilots')}>
                Pilots
            </ActionButton>
        </HomePageContainer>
    )
}