import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types";
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {FormattedNumber} from "react-intl";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar as faStarOpen} from '@fortawesome/free-regular-svg-icons';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {BASE_CURRENCY_SYMBOL} from '../../constants/common';
import { usePrevious } from '../../utils';


const MarketTableRow = ({ticker, market, symbol}) => {
    const {P, c, q, quoteAssetToBaseCurrency, h, l} = ticker;

    const prevValue = usePrevious(c);
    const [direction, setDirection] = useState(null);

    useEffect(() => {
        if (prevValue && prevValue > c) {
            setDirection('low');
        }
        if (prevValue && prevValue < c) {
            setDirection('high');
        }

        if (prevValue && prevValue === c) {
            setDirection(null);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [c]);

    ticker.inFavorite = false;
    return (
        <TableRow>
            <TableCell className={'favorite'}>
                <FontAwesomeIcon
                    icon={ticker.inFavorite ? faStar : faStarOpen}
                    className={ticker.inFavorite ? 'orange' : ''}
                />
            </TableCell>
            <TableCell className={'pair'}>{symbol.replace(new RegExp(market), ' / $&')}</TableCell>
            <TableCell className={'lastPrice'}>
                <span className={direction}>{c || '--'}</span><span> / {BASE_CURRENCY_SYMBOL}{quoteAssetToBaseCurrency || ` --`}</span>
            </TableCell>
            <TableCell className={'_24hChange'}><span className={parseFloat(P) > 0 ? 'high' : 'low'}>{`${P ? P : '--'}%`}</span></TableCell>
            <TableCell className={'_24hHigh'}>{h || '--'}</TableCell>
            <TableCell className={'_24hLow'}>{l || '--'}</TableCell>
            <TableCell className={'_24hVolume'}><FormattedNumber value={q || null}/></TableCell>
        </TableRow>
    )

}

MarketTableRow.propTypes = {
    market: PropTypes.string,
    symbol: PropTypes.string,
    tickers: PropTypes.object,
};

export default MarketTableRow;
