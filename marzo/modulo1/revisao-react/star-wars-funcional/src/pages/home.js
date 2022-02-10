import styled from "styled-components";

const HomePageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 85vh;

`;

const ActionButton = styled.button`
    padding: 20px;
`;

export const HomePage = () => {
    return (
        <HomePageContainer>
            <ActionButton>
                Starship
            </ActionButton>
            <ActionButton>
                Pilots
            </ActionButton>
        </HomePageContainer>
    )
}