import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { StyledNav } from '../../styles/components/Header'
import { Typography } from "@material-ui/core";


const NavigationLinks = ({ title = null, links, direction = 'row' }) => {
    return (
        <StyledNav direction={direction}>
            {title && <Typography variant={'h3'}>{title}</Typography>}
            {links.map((link, index) => <Link key={index} to={link['href']}>{link['text']}</Link>)}
        </StyledNav>
    )
}

NavigationLinks.propTypes = {
    title: PropTypes.string,
    direction: PropTypes.oneOf(['row', 'column']),
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
    })),
};

export default NavigationLinks;
