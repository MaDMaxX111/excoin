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

    const t = tabs.concat([    {
        market: 'search',
        label: <><TextField
            // InputLabelProps={{
            //     htmlFor: idMailField,
            // }}
            // id={idMailField}
            label={<FormattedMessage id={'text.search'} />}
            placeholder={intl.formatMessage({id: 'text.search'})}
            // value={values.email}
            // error={!!errors.email && touched.email}
            // helperText={(errors.email && touched.email) ? errors.email : null}
            // onChange={handleChange}
            // onBlur={handleBlur}

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
