import React, { useState } from 'react';
import PropTypes from "prop-types";
import Container from '@material-ui/core/Container';
import { FormattedMessage, injectIntl } from "react-intl";
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-regular-svg-icons';

import {
    StyledWrapMarketsTable,
    StyledTabs,
} from '../../styles/components/MarketsTable';

import MarketTable from './markettable';
import nanoid from "nanoid";

const tabs = [
    {
        label: <><FontAwesomeIcon icon={faStar} /><span>{'Favorites'}</span></>,
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

const MarketsTable = ({intl}) => {

    const [market, setMarket] = useState(tabs[0].market);

    function handleChange(event, newValue) {
        setMarket(newValue);
    }

    const idInputSearch = nanoid();
    const t = tabs.concat([    {
        market: 'search',
        label:
            <>
                <TextField
                    InputLabelProps={{
                        htmlFor: idInputSearch,
                    }}
                    label={<FormattedMessage id={'text.search'} />}
                    placeholder={intl.formatMessage({id: 'text.search'})}
                    id={idInputSearch}
                />
                <FontAwesomeIcon icon={faSearch} />
            </>,
    }])

    return (
        <StyledWrapMarketsTable>
            <Container>
                <StyledTabs
                    TabIndicatorProps={{
                        className: 'indicator',
                    }}
                    value={market}
                    onChange={handleChange}
                    scrollButtons={'off'}
                >
                    {t.map((tab, index) => <Tab label={tab.label} key={index} value={tab.market} />)}
                </StyledTabs>
                <MarketTable market={market} />
            </Container>
        </StyledWrapMarketsTable>
    )
}

MarketsTable.propTypes = {
    intl: PropTypes.object,
};
export default injectIntl(MarketsTable);
