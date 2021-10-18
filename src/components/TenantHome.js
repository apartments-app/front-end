import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const TenantHome = () => {
    const Header = styled.h1`
        font-family: 'Grand Hotel', cursive, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        line-height: 42px;
        color: #FFFFFF;
    `
    return (
        <Wrapper background="linear-gradient(180deg, #CD77DB 0%, #A1D8FF 54.53%, #FFFFFF 88.31%, #FFFFFF 100%)">
            <div>Schedule

            </div>
            <div>Tasks

            </div>
            <div>Recent Activity    
                
            </div>
        </Wrapper>
    )
}

export default TenantHome