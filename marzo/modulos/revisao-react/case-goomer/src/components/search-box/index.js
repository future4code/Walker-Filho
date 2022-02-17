import styled from 'styled-components';

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 30px;

`;

const InputStyled = styled.input`
    width: 500px;
`;

export const SearchBox = ({ value, onChange }) => {
    return (
        <InputContainer>
            <InputStyled value={value} onChange={onChange} />
        </InputContainer>
    )
}