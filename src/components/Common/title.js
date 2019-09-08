import React from 'react';
import PropTypes from 'prop-types';

import {
    StyledWrapTitle,
} from '../../styles/components/Common';

export const Title = ({ title = ''}) => {

    return (
        <StyledWrapTitle>
            <h3>{title}</h3>
        </StyledWrapTitle>
    )
}

Title.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
    ]),
};

export default Title;
