import React, { useEffect, useState } from 'react';
import { FormattedMessage } from "react-intl";
import Link from "@material-ui/core/Link";
import {
    StyledWrapNews
} from '../../styles/components/MainBanner';
import { LinkButton } from '../../styles/components/Common';
import { NEWS_URL } from '../../constants/route'
import { useDimensions, useVisibility } from "../../utils";
import { getLatestNews } from "../../api/cryptocompare";

const News = () => {

    const [news, setNews] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const news = await getLatestNews();
            const { Data } = news;
            setNews(Data);
        }
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [marqueeRef, marqueeSize] = useDimensions();
    const isVisible = useVisibility(marqueeRef);
    const { width: marqueeWidth } = marqueeSize || {};
    return (
        <StyledWrapNews animateWidth={marqueeWidth} playAnimate={isVisible}>
            <LinkButton to={NEWS_URL}><FormattedMessage id={'link.news'} /></LinkButton>
            <div className={'marquee'} ref={marqueeRef}>
                <span>
                {news.map((item, index) =>
                    <Link key={index} href={item.url} target={'blank'}>{item.title}</Link>
                )}
                </span>
                <span>
                {news.map((item, index) =>
                    <Link key={index} href={item.url} target={'blank'}>{item.title}</Link>
                )}
                </span>
            </div>
        </StyledWrapNews>
    );
}

export default News;
