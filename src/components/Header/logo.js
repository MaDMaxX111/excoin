import React from 'react';
import PropTypes from "prop-types";
import { StyledLogo } from '../../styles/components/Header'

const Logo = ({img, title}) => {
    return (
        <StyledLogo>
            <img src={img} alt={title} title={title}/>
            <span>{title}</span>
        </StyledLogo>
    )
}

Logo.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
};

export default Logo;
