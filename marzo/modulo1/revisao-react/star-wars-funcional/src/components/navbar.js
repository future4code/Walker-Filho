import styled from "styled-components"
import { useNavigate } from "react-router-dom";

const NavBarStyled = styled.nav`
    background-color: silver;
    height: 10vh;

    >ul {
        list-style: none;

        >li {
            display: inline-block;
            padding: 15px;
            border: 1px solid black;
            &:hover {
                cursor: pointer;
                background: white;
            }
        }
    }
`;

export const NavBar = () => {

    const navigation = useNavigate()

    return (
        <NavBarStyled>
            <ul>
                <li onClick={() => navigation('/')}>Home</li>
                <li onClick={() => navigation('pilots')}>Pilots</li>
                <li onClick={() => navigation('starships')}>Starships</li>
            </ul>
        </NavBarStyled>
    )
}