import React from 'react';
import PropTypes from "prop-types";
import {
    StyledWrapNews,
} from '../../styles/components/LatestNews';
import Link from "@material-ui/core/Link";
import { FormattedMessage, FormattedDate } from "react-intl";

const News = ({date, title, description, link}) => {
    return (
        <StyledWrapNews>
            <span className={'date'}>
                <FormattedDate value={date} day={'numeric'} month={'short'} year={'numeric'} />
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <Link to={link}><FormattedMessage id={'text.readMore'}/></Link>
        </StyledWrapNews>
    )
}

News.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
};
export default News;
