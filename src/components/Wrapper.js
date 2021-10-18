import React from 'react';
import styled from 'styled-components';



const Wrapper = styled.div`
    /* position: relative; */
    /* width: 375px; */
    text-align: center;
    padding: 25px;
    background: ${props => props.background || "pink"}
`

export default Wrapper