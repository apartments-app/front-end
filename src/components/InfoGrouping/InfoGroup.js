import React from 'react';
import styled from 'styled-components';

const InfoGroup = (props) => {

    const InfoHeader = styled.h2`
        font-family: Cabin;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        color: #FFFFFF;
        text-align: left;
    `

    const InfoContainer = styled.div`    
        width: 311px;
        height: 89px;
        left: 32px;
        top: 108px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 20px;
    `

    const InfoMore = styled.div`
        font-family: Cabin;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 24px;
        /* or 171% */

        text-align: right;
        color: rgba(0, 0, 0, 0.25);
    `

    return (
        <>
            <InfoHeader >
                {props.heading}
            </InfoHeader>
            <InfoContainer>

            </InfoContainer>
            <InfoMore>
                {props.more}
            </InfoMore>
        </>
    )
}

export default InfoGroup