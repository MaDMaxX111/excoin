import React from 'react';
import PropTypes from "prop-types";
import {
    StyledWrapNews,
} from '../../styles/components/LatestNews';

const FeatureItem = ({image, title, description}) => {
    return (
        <StyledWrapNews>
            <img src={image} title={title} alt={title} />
            <h4>{title}</h4>
            <p>{description}</p>
        </StyledWrapNews>
    )
}

FeatureItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
};
export default FeatureItem;
