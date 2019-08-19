import React from 'react';
// import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import {
    faFacebookF,
    faTwitter,
    faTelegramPlane,
    faGithub,
    faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledSocialButtonsContainer } from '../../styles/components/Footer';

const socialLinks = [
    {
        icon: faFacebookF, //fb
        href: 'https://facebook.com'
    },
    {
        icon: faTwitter, //tw
        href: 'https://twitter.com/'
    },
    {
        icon: faTelegramPlane, //telegramm
        href: 'https://telegram.org'
    },
    {
        icon: faGithub, //github
        href: 'https://github.com'
    },
    {
        icon: faLinkedinIn, //in
        href: 'https://linkedin.cn'
    },
]

const SocialButtons = () => {

    return (
        <StyledSocialButtonsContainer>
            {socialLinks.map((link, key) => <Link key={key} href={link.href} target={'_blank'}><FontAwesomeIcon icon={link.icon} /></Link>)}
        </StyledSocialButtonsContainer>
    )
}

// NavigationButtons.propTypes = {
//     links: PropTypes.arrayOf(PropTypes.shape({
//         href: PropTypes.string,
//         text: PropTypes.string
//     })),
// };

export default SocialButtons;
