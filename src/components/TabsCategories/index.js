import React, { useState } from 'react';
import { FormattedMessage, injectIntl } from "react-intl";
import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import {
    StyledWrapCategories,
    StyledWrapperContent,
    StyledImgWrap,
} from '../../styles/components/TabsCategories';
import walletImg from '../../images/wallet.png';
import TabContent from './tabcontent';
import logo from '../../images/walletlogo.png';
import PropTypes from "prop-types";

const wallets = [
    {
        label: 'Bread Wallet',
        description: 'Advanced users searching for a Bitcoin mobile digital wallet, should look no further than mycelium. The Mycelium mobile wallet allows iPhone and Android users to send and receive bitcoins and keep complete control over bitcoins. No third party can freeze or lose your funds! With enterprise-level security superior to most other apps and features like cold storage and encrypted PDF backups, an integrated QR-code scanner receive bitcoins and keep.',
        pros: 'Good privacy, advanced security, feature-rich, open source Software, free',
        cons: 'No web or desktop interface, hot wallet, not for beginners',
        image: logo,
    },
    {
        label: 'Mycelium',
        description: 'Advanced users searching for a Bitcoin mobile digital wallet, should look no further than mycelium. The Mycelium mobile wallet allows iPhone and Android users to send and receive bitcoins and keep complete control over bitcoins. No third party can freeze or lose your funds! With enterprise-level security superior to most other apps and features like cold storage and encrypted PDF backups, an integrated QR-code scanner receive bitcoins and keep.',
        pros: 'Good privacy, advanced security, feature-rich, open source Software, free',
        cons: 'No web or desktop interface, hot wallet, not for beginners',
        image: logo,
    },
    {
        label: 'Exodus',
        description: 'Advanced users searching for a Bitcoin mobile digital wallet, should look no further than mycelium. The Mycelium mobile wallet allows iPhone and Android users to send and receive bitcoins and keep complete control over bitcoins. No third party can freeze or lose your funds! With enterprise-level security superior to most other apps and features like cold storage and encrypted PDF backups, an integrated QR-code scanner receive bitcoins and keep.',
        pros: 'Good privacy, advanced security, feature-rich, open source Software, free',
        cons: 'No web or desktop interface, hot wallet, not for beginners',
        image: logo,
    },
    {
        label: 'Copay',
        description: 'Advanced users searching for a Bitcoin mobile digital wallet, should look no further than mycelium. The Mycelium mobile wallet allows iPhone and Android users to send and receive bitcoins and keep complete control over bitcoins. No third party can freeze or lose your funds! With enterprise-level security superior to most other apps and features like cold storage and encrypted PDF backups, an integrated QR-code scanner receive bitcoins and keep.',
        pros: 'Good privacy, advanced security, feature-rich, open source Software, free',
        cons: 'No web or desktop interface, hot wallet, not for beginners',
        image: logo,
    },
    {
        label: 'Ledger Nano',
        description: 'Advanced users searching for a Bitcoin mobile digital wallet, should look no further than mycelium. The Mycelium mobile wallet allows iPhone and Android users to send and receive bitcoins and keep complete control over bitcoins. No third party can freeze or lose your funds! With enterprise-level security superior to most other apps and features like cold storage and encrypted PDF backups, an integrated QR-code scanner receive bitcoins and keep.',
        pros: 'Good privacy, advanced security, feature-rich, open source Software, free',
        cons: 'No web or desktop interface, hot wallet, not for beginners',
        image: logo,
    },
];

const TabsCategories = ({intl}) => {

    const [value, setValue] = useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    return (
        <StyledWrapCategories>
            <Container>
                <h3><FormattedMessage id={'title.categoriesOfWallets'}/></h3>
                <p><FormattedMessage id={'text.descriptionCategory'}/></p>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item lg={3} md={4} xs={12}>
                        <Tabs
                    orientation="vertical"
                    value={value}
                    onChange={handleChange}
                >
                    {wallets.map((wallet, index) =>
                        <Tab
                            key={index}
                            label={wallet.label}
                            id={`vertical-tab-${index}`}
                        />
                    )}
                </Tabs>
                    </Grid>
                    <Grid item lg={6} md={8} xs={12}>
                        {wallets.map((wallet, index) =>
                            <StyledWrapperContent
                                hidden={value !== index}
                                id={`vertical-tabpanel-${index}`}
                                value={value}
                                index={index}
                                key={index}
                            >
                                <TabContent
                                    description={wallet.description}
                                    image={wallet.image}
                                    pros={wallet.pros}
                                    cons={wallet.cons}
                                    label={wallet.label}
                                />
                            </StyledWrapperContent>
                        )}
                    </Grid>
                    <Hidden mdDown>
                    <Grid item lg={3} md={4} xs={12}>
                        <StyledImgWrap>
                            <img src={walletImg} alt={intl.formatMessage({id:'title.categoriesOfWallets'})} />
                        </StyledImgWrap>
                    </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </StyledWrapCategories>
    )
}

TabsCategories.propTypes = {
    intl: PropTypes.object,
};

export default injectIntl(TabsCategories);

