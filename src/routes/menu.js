import {
    EXCHANGE_URL,
    CHARTS_URL,
    FEATURES_URL,
    SUPPORT_URL,
    NEWS_URL,
    MORE_URL,
    OUR_TEAM_URL,
    OUR_COMPANY_URL,
    CONTACT_US_URL,
    TOKEN_LISTING_URL,
    JOIN_US_URL,
    LEGAL_URL,
    TERMS_OF_USE_URL,
    AML_CFT_URL,
    PRIVACY_POLICY_URL,
    API_SUPPORT_URL,
    COIN_TOKEN_LISTING_URL,
    PARTNERSHIP_URL,
} from '../constants/route';

export const MainMenu = [
    {
        label: 'link.exchange',
        href: EXCHANGE_URL,
    },
    {
        label: 'link.charts',
        href: CHARTS_URL,
    },
    {
        label: 'link.features',
        href: FEATURES_URL,
    },
    {
        label: 'link.support',
        href: SUPPORT_URL,
    },
    {
        label: 'link.news',
        href: NEWS_URL,
    },
    {
        label: 'link.more',
        href: MORE_URL,
    }
];

export const FooterMenus = [
    {
        title: 'title.aboutUs', //About Us
        links: [
            {
                label: 'link.ourTeam',//'Our Team',
                href: OUR_TEAM_URL,
            },
            {
                label: 'link.ourCompany', //'Our Company',
                href: OUR_COMPANY_URL,
            },
            {
                label: 'link.contactUs', //'Contact Us',
                href: CONTACT_US_URL,
            },
            {
                label: 'link.tokenListing',//'Token Listing',
                href: TOKEN_LISTING_URL,
            },
            {
                label: 'link.joinUs', //'Join Us',
                href: JOIN_US_URL,
            },
        ]
    },
    {
        title: 'title.learn', //Learn
        links: [
            {
                label: 'link.legal',//'Legal',
                href: LEGAL_URL,
            },
            {
                label: 'link.termsOfUse', //'Terms of Use',
                href: TERMS_OF_USE_URL,
            },
            {
                label: 'link.amlcft', //'AML&CFT',
                href: AML_CFT_URL,
            },
            {
                label: 'link.privacyPolicy', //'Privacy Policy',
                href: PRIVACY_POLICY_URL,
            },
        ]
    },
    {
        title: 'title.help', //Help
        links: [
            {
                label: 'link.support',//'Support',
                href: SUPPORT_URL,
            },
            {
                label: 'link.apiSupport', //'API Support',
                href: API_SUPPORT_URL,
            },
            {
                label: 'link.coinTokenListing', //Coin/Token Listing,
                href: COIN_TOKEN_LISTING_URL,
            },
            {
                label: 'link.partnership',//'Partnership',
                href: PARTNERSHIP_URL,
            },
        ]
    },
];