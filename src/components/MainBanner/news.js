import React from 'react';
import { FormattedMessage } from "react-intl";
import Link from "@material-ui/core/Link";
import {
    StaledWrapNews
} from '../../styles/components/MainBanner';
import { LinkButton } from '../../styles/components/Common';
import { NEWS_URL } from '../../constants/route'
import { Typography } from "@material-ui/core";

const News = () => {
    return (
        <StaledWrapNews>
            <LinkButton to={NEWS_URL}><FormattedMessage id={'link.news'} /></LinkButton>
            <Typography>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
                <Link to={NEWS_URL}>{'ghjfggfffghfghfghfghfghgfhghffgfgfghghfhfgfhggfh'}</Link>
            </Typography>
        </StaledWrapNews>
    );
}

export default News;
