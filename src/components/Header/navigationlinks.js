import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import { StyledNav, StyledMobileNav } from '../../styles/components/Header'
import { Typography } from "@material-ui/core";


const NavigationLinks = ({ title = null, links, direction = 'row', variant = 'desktop' }) => {
    const Wrap = variant === 'mobile' ? StyledMobileNav : StyledNav
    return (
        <Wrap direction={direction}>
            {title && <Typography variant={'h3'}>{title}</Typography>}
            {links.map((link, index) => <Link key={index} to={link['href']}>{link['text']}</Link>)}
        </Wrap>
    )
}

NavigationLinks.propTypes = {
    title: PropTypes.string,
    direction: PropTypes.oneOf(['row', 'column']),
    variant: PropTypes.oneOf(['mobile', 'desktop']),
    links: PropTypes.arrayOf(PropTypes.shape({
        href: PropTypes.string,
        text: PropTypes.string
    })),
};

export default NavigationLinks;
