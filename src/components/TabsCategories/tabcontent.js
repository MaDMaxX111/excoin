import React from 'react';
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { StyledContent } from '../../styles/components/TabsCategories';

const TabContent = ({label, description, pros, cons, image}) => {
    return (
        <StyledContent>
            <img src={image} alt={label} title={label}/>
            <p>{description}</p>
            <ul>
                <li><span><FormattedMessage id={'label.pros'} /></span><span>{pros}</span></li>
                <li><span><FormattedMessage id={'label.cons'} /></span><span>{cons}</span></li>
            </ul>
        </StyledContent>
    )
}

TabContent.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    pros: PropTypes.string,
    cons: PropTypes.string,
    image: PropTypes.string,
};

export default TabContent;
