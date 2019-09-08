import React from 'react';
import { FormattedMessage } from "react-intl";
import Link from "@material-ui/core/Link";
import {
    StyledWrapNews
} from '../../styles/components/MainBanner';
import { LinkButton } from '../../styles/components/Common';
import { NEWS_URL } from '../../constants/route'
import { useDimensions, useVisibility } from "../../utils";

const News = () => {
    const [marqueeRef, marqueeSize] = useDimensions();
    const isVisible = useVisibility(marqueeRef);
    const { width: marqueeWidth } = marqueeSize || {};

    return (
        <StyledWrapNews animateWidth={marqueeWidth} playAnimate={isVisible}>
            <LinkButton to={NEWS_URL}><FormattedMessage id={'link.news'} /></LinkButton>
            <div className={'marquee'} ref={marqueeRef}>
                <span>
                {Array.from({length: 50}).map((item, index) =>
                    <Link key={index} to={NEWS_URL}>{`We are specialized in Following Services...`}</Link>
                )}
                </span>
                <span>
                {Array.from({length: 50}).map((item, index) =>
                    <Link key={index} to={NEWS_URL}>{`We are specialized in Following Services...`}</Link>
                )}
                </span>
            </div>
        </StyledWrapNews>
    );
}

export default News;
