import React from 'react';
import { useTheme } from '@material-ui/styles';
import { AreaChart, Area } from 'recharts';

import { useDimensions } from '../../utils';
import {
    StyledWrapChart
} from '../../styles/components/MainBanner';
import PropTypes from "prop-types";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarOpen } from '@fortawesome/free-regular-svg-icons';
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
];

const MarketTable = ({ market }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell><FormattedMessage id={'table.columnPair'}/></TableCell>
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
                        <TableCell>
                            <FontAwesomeIcon icon={faStar} />
                            <FontAwesomeIcon icon={faStarOpen} />
                        </TableCell>
                        <TableCell>{row.pair}</TableCell>
                        <TableCell>{row.lastPrice[0]}{row.lastPrice[1]}</TableCell>
                        <TableCell>{row['24hChange']}</TableCell>
                        <TableCell>{row['24hHigh']}</TableCell>
                        <TableCell>{row['24hLow']}</TableCell>
                        <TableCell>{row['24hVolume']}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}

MarketTable.propTypes = {
    market: PropTypes.string,
};

export default MarketTable;
