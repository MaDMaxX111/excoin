import React from 'react';
// import PropTypes from 'prop-types';
import {StyledIconButton} from '../../styles/components/Footer';
import Icon from '@material-ui/core/Icon';
import SupportIcon from '../../images/support.svg';

const SupportButton = () => {

    return (
        <StyledIconButton aria-label="support">
            <Icon>
                <img src={SupportIcon} alt={'support'} title={'support'}/>
            </Icon>
        </StyledIconButton>
    )
}

// NavigationButtons.propTypes = {
//     links: PropTypes.arrayOf(PropTypes.shape({
//         href: PropTypes.string,
//         text: PropTypes.string
//     })),
// };

export default SupportButton;
