import styled from 'styled-components';

const RestaurantCardContainer = styled.div` 
    border: 1px solid black;
    @media(max-width: 1200px) {
        width: 40%;
    }
    @media(max-width: 300px) {
        width: 60%;
    }
    margin: 0 auto;
`;

export const RestaurantCard = ({ name, address }) => {
    return (
        <RestaurantCardContainer>
            <p>{name}</p>
            <p>{address}</p>
        </RestaurantCardContainer>
    )
}