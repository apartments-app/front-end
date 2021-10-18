import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from './Wrapper';

const Landing = () => {

    const Header = styled.h1`
        font-family: 'Grand Hotel', cursive, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        line-height: 42px;
        color: #FFFFFF;
    `
    const Slogan = styled.div`
        font-family: 'Cabin';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
        color: #FFFFFF;
    `

    

    return (

        // all of our stuff right here
        // logo
        // app name
        <Wrapper background = "pink">
            <Header>Apartmates</Header>
            <Slogan>Find your place and the people to share it with</Slogan>
        </Wrapper>
        // catchphrase

        // button
        // button
        // button
        
    )

}

export default Landing;