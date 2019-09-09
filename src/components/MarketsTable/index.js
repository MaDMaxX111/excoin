import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from "@material-ui/core/Typography";
import { FormattedMessage } from "react-intl";
import {
    StyledWrapMarketsTable,
    StyledTabs,
} from '../../styles/components/MarketsTable';
import background from '../../images/waves.svg';
import SubscribeFrorm from './subscribeform';
import Chart from './chart';
import News from './news';
import MarketTable from './markettable';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const tabs = [
    {
        label: 'Favorites',
        market: 'favorite'
    },
    {
        label: 'BNB Markets',
        market: 'bnb',
    },
    {
        label: 'BTC Markets',
        market: 'btc',
    },
    {
        label: 'ETH Markets',
        market: 'eth',
    },
    {
        label: 'USDT Markets',
        market: 'usdt',
    },
]

const MarketsTable = () => {

    const [market, setMarket] = useState(tabs[0].market);

    function handleChange(event, newValue) {
        setMarket(newValue);
    }

    return (
        <StyledWrapMarketsTable>
            <Container>
                <StyledTabs
                    TabIndicatorProps={{
                        className: 'indicator',
                    }}
                    value={market}
                    onChange={handleChange}
                >
                    {tabs.map((tab, index) => <Tab label={tab.label} key={index} value={tab.market} />)}
                </StyledTabs>
                <MarketTable market={market} />
            </Container>
        </StyledWrapMarketsTable>
    )
}

export default MarketsTable;
