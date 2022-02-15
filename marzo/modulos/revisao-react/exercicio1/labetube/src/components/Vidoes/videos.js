import styled from 'styled-components';
import React from 'react';

const BoxPaginaPrincipal = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin;
    align-items: start;
    justify-items: stretch;
`

const Titulo = styled.div`
    margin-left: 20px;
`

export const PageVideos = (props) => {
    return
        <BoxPaginaPrincipal>
            url: {props.url}
            <Titulo />
        </BoxPaginaPrincipal>

}