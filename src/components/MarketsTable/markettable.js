import React from 'react';
import PropTypes from "prop-types";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {FormattedMessage} from "react-intl";
import { StyledWrapTable, StyledWrapTableContainer, } from '../../styles/components/MarketsTable';
import MarketTableRow from './markettablerow';

const MarketTable = ({tickers, market}) => {
    return (
        <StyledWrapTableContainer>
            <StyledWrapTable>
                <TableHead>
                    <TableRow>
                        <TableCell className={'favorite'}></TableCell>
                        <TableCell className={'pair'}><FormattedMessage id={'table.columnPair'}/></TableCell>
                        <TableCell className={'lastPrice'}><FormattedMessage id={'table.columnLastPrice'}/></TableCell>
                        <TableCell className={'_24hChange'}><FormattedMessage id={'table.column24hChange'}/></TableCell>
                        <TableCell className={'_24hHigh'}><FormattedMessage id={'table.column24hHigh'}/></TableCell>
                        <TableCell className={'_24hLow'}><FormattedMessage id={'table.column24hLow'}/></TableCell>
                        <TableCell className={'_24hVolume'}><FormattedMessage id={'table.column24hVolume'}/></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.keys(tickers).sort((a, b) => {
                        return parseFloat(tickers[a].q) > parseFloat(tickers[b].q) ? -1 : 1;
                    }).map((symbol, index) =>
                        <MarketTableRow key={index} ticker={tickers[symbol]} market={market} symbol={symbol} />
                    )}
                </TableBody>
            </StyledWrapTable>
        </StyledWrapTableContainer>
    );
}

MarketTable.propTypes = {
    market: PropTypes.string,
    tickers: PropTypes.object,
};

export default MarketTable;
