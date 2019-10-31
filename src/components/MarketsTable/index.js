import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Container from '@material-ui/core/Container';
import { FormattedMessage, injectIntl } from "react-intl";
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from '@fortawesome/free-regular-svg-icons';
import nanoid from "nanoid";

import {
    StyledWrapMarketsTable,
    StyledTabs,
} from '../../styles/components/MarketsTable';

import MarketTable from './markettable';
import miniTickerActions from '../../redux/tickers/actions';
import _ from "lodash";

const {subscribeMiniTickers, unsubscribeMiniTickers} = miniTickerActions;

const initTabs = [
    {
        label: <><FontAwesomeIcon icon={faStar} /><span>{'Favorites'}</span></>,
        market: 'favorite'
    },
    {
        label: 'BNB Markets',
        market: 'BNB',
    },
    {
        label: 'BTC Markets',
        market: 'BTC',
    },
    {
        label: 'ETH Markets',
        market: 'ETH',
    },
    {
        label: 'USDT Markets',
        market: 'USDT',
    },
]

const MarketsTable = ({
                          intl,
                          tabs,
                          symbols,
                          subscribeMiniTickers,
                          unsubscribeMiniTickers,
                          tickers,
}) => {

    useEffect(() => {
        let pairs = [];
        const markets = tabs.map(market => market.market);
        if (markets.length) {
            pairs = Object.values(symbols).filter(symbol => {
                const { quoteAsset } = symbol;
                return markets.indexOf(quoteAsset) > -1;
            })
        }

        pairs.length && subscribeMiniTickers({tickers: pairs.map(pair => pair.symbol)})
        return function cleanup() {
            unsubscribeMiniTickers({tickers: pairs});
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [symbols])

    const [market, setMarket] = useState(tabs[0].market);

    function handleChange(event, newValue) {
        setMarket(newValue);
    }

    const idInputSearch = nanoid();
    const t = tabs.concat([{
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
    const conditionTickers = new RegExp(market + '$', 'i');
    const filteredTickers = Object.keys(tickers).filter(key => key.match(conditionTickers))
        .reduce((obj, key) => {
            obj[key] = tickers[key];
            return obj;
        }, {})

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
                <MarketTable market={market} tickers={filteredTickers} />
            </Container>
        </StyledWrapMarketsTable>
    )
}

MarketsTable.defaultProps = {
    tabs: initTabs,
}

MarketsTable.propTypes = {
    intl: PropTypes.object,
    symbols: PropTypes.object,
    tabs: PropTypes.array,
    subscribeMiniTickers: PropTypes.func,
    unsubscribeMiniTickers: PropTypes.func,
    tickers: PropTypes.object,
};

function mapStateToProps(state) {

    const { Tickers, ExchangeInfo } = state;
    const { symbols } = ExchangeInfo || {};

    return {
        symbols,
        tickers:Tickers,
    }
}

export default injectIntl(connect(_.throttle(mapStateToProps, 3000, { 'trailing': false }), {
    subscribeMiniTickers, unsubscribeMiniTickers
})(React.memo(MarketsTable, (prevProps, nextProps) => {
    return _.isEqual(prevProps, nextProps);
})));

// export default injectIntl(connect(mapStateToProps, {
//     subscribeMiniTickers, unsubscribeMiniTickers
// })(React.memo(MarketsTable, (prevProps, nextProps) => {
//     return _.isEqual(prevProps, nextProps);
// })));
