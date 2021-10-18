import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    /* position: relative; */
    width: 100%;
    text-align: center;
    padding: 25px;
    background-color: ${props => props.background || "pink"}
`

export default Wrapper