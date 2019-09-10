import React from 'react';
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
        href: 'https://facebook.com',
        label: 'Facebook',
    },
    {
        icon: faTwitter, //tw
        href: 'https://twitter.com/',
        label: 'Twitter',
    },
    {
        icon: faTelegramPlane, //telegramm
        href: 'https://telegram.org',
        label: 'Telegram',
    },
    {
        icon: faGithub, //github
        href: 'https://github.com',
        label: 'Github',
    },
    {
        icon: faLinkedinIn, //in
        href: 'https://linkedin.cn',
        label: 'LinkedinIn',
    },
]

const SocialButtons = () => {

    return (
        <StyledSocialButtonsContainer>
            {socialLinks.map((link, key) => <Link key={key} href={link.href} target={'_blank'} aria-label={link.label} rel="noreferrer"><FontAwesomeIcon icon={link.icon} /></Link>)}
        </StyledSocialButtonsContainer>
    )
}

export default SocialButtons;
