import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { StyledNav } from '../../styles/components/Header'


const NavigationLinks = ({ links }) => {
    return (
        <StyledNav>
            {links.map((link, index) => <Link key={index} to={link['href']}>{link['text']}</Link>)}
        </StyledNav>
    )
}

NavigationLinks.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
    })),
};

export default NavigationLinks;
