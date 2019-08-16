import React from 'react';
import { StyledLogo } from '../../styles/components/Header'
const Logo = ({ img, title }) => {
    return (
        <StyledLogo>
            <img src={img} title={title}/>
            <span>{title}</span>
        </StyledLogo>
    )
}

export default Logo;
