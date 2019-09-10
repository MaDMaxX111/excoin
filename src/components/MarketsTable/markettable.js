import React from 'react';
import PropTypes from "prop-types";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarOpen } from '@fortawesome/free-regular-svg-icons';
import { faStar } from "@fortawesome/free-solid-svg-icons";

import {
    StyledWrapTable
} from '../../styles/components/MarketsTable';

const rows = [
    {
        inFavorite: false,
        pair: 'POA / BTC',
        lastPrice: ['0.00006822', '$0.48'],
        direction: 'low',
        '24hChange': '-23.80%',
        '24hHigh': '0.00007300',
        '24hLow': '0.00005510',
        '24hVolume': '7,522.88586112',
    },
    {
        inFavorite: false,
        pair: 'ONT/BTC',
        lastPrice: ['0.00050900', '$3.55'],
        direction: 'high',
        '24hChange': '+8.70%',
        '24hHigh': '0.0005700',
        '24hLow': '0.0004910',
        '24hVolume': '5,774.97192430',
    },
    {
        inFavorite: true,
        pair: 'ETH/BTC',
        lastPrice: ['0.05722', '$399.8'],
        direction: 'high',
        '24hChange': ' +2.76%',
        '24hHigh': '0.05723',
        '24hLow': '0.05550',
        '24hVolume': '5,523.15018959',
    },
    {
        inFavorite: false,
        pair: 'POA / BTC',
        lastPrice: ['0.00006822', '$0.48'],
        direction: 'low',
        '24hChange': '-23.80%',
        '24hHigh': '0.00007300',
        '24hLow': '0.00005510',
        '24hVolume': '7,522.88586112',
    },
    {
        inFavorite: false,
        pair: 'ONT/BTC',
        lastPrice: ['0.00050900', '$3.55'],
        direction: 'high',
        '24hChange': '+8.70%',
        '24hHigh': '0.0005700',
        '24hLow': '0.0004910',
        '24hVolume': '5,774.97192430',
    },
    {
        inFavorite: true,
        pair: 'ETH/BTC',
        lastPrice: ['0.05722', '$399.8'],
        direction: 'high',
        '24hChange': ' +2.76%',
        '24hHigh': '0.05723',
        '24hLow': '0.05550',
        '24hVolume': '5,523.15018959',
    },
    {
        inFavorite: false,
        pair: 'POA / BTC',
        lastPrice: ['0.00006822', '$0.48'],
        direction: 'low',
        '24hChange': '-23.80%',
        '24hHigh': '0.00007300',
        '24hLow': '0.00005510',
        '24hVolume': '7,522.88586112',
    },
    {
        inFavorite: false,
        pair: 'ONT/BTC',
        lastPrice: ['0.00050900', '$3.55'],
        direction: 'high',
        '24hChange': '+8.70%',
        '24hHigh': '0.0005700',
        '24hLow': '0.0004910',
        '24hVolume': '5,774.97192430',
    },
    {
        inFavorite: true,
        pair: 'ETH/BTC',
        lastPrice: ['0.05722', '$399.8'],
        direction: 'high',
        '24hChange': ' +2.76%',
        '24hHigh': '0.05723',
        '24hLow': '0.05550',
        '24hVolume': '5,523.15018959',
    },
    {
        inFavorite: true,
        pair: 'ETH/BTC',
        lastPrice: ['0.05722', '$399.8'],
        direction: 'high',
        '24hChange': ' +2.76%',
        '24hHigh': '0.05723',
        '24hLow': '0.05550',
        '24hVolume': '5,523.15018959',
    },
];

const MarketTable = ({ market }) => {
    return (
        <StyledWrapTable>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell className={'pair'}><FormattedMessage id={'table.columnPair'}/></TableCell>
                    <TableCell><FormattedMessage id={'table.columnLastPrice'}/></TableCell>
                    <TableCell><FormattedMessage id={'table.column24hChange'}/></TableCell>
                    <TableCell><FormattedMessage id={'table.column24hHigh'}/></TableCell>
                    <TableCell><FormattedMessage id={'table.column24hLow'}/></TableCell>
                    <TableCell><FormattedMessage id={'table.column24hVolume'}/></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index}>
                        <TableCell className={'favorite'}>
                            <FontAwesomeIcon icon={row.inFavorite ? faStar : faStarOpen} className={row.inFavorite ? 'orange' : ''} />
                        </TableCell>
                        <TableCell className={'pair'}>{row.pair}</TableCell>
                        <TableCell className={'lastPrice'}><span className={row.direction}>{row.lastPrice[0]}</span> / {row.lastPrice[1]}</TableCell>
                        <TableCell className={'24hChange'}><span className={row.direction}>{row['24hChange']}</span></TableCell>
                        <TableCell>{row['24hHigh']}</TableCell>
                        <TableCell>{row['24hLow']}</TableCell>
                        <TableCell>{row['24hVolume']}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </StyledWrapTable>
    );
}

MarketTable.propTypes = {
    market: PropTypes.string,
};

export default MarketTable;
