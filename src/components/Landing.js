import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const Landing = () => {

    const Header = styled.h1`
        font-family: 'Grand Hotel', cursive, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 56px;
        line-height: 42px;
        color: black;
        /* color: #FFFFFF */
    `
    const Slogan = styled.div`
        font-family: 'Cabin';
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 24px;
    `

    

    return (

        // all of our stuff right here
        // logo
        // app name
        <MobileWrapper>
            <Header>Apartmates</Header>
            <Slogan>Find your place and the people to share it with</Slogan>
        </>
        // catchphrase

        // button
        // button
        // button
        
    )

}

export default Landing;