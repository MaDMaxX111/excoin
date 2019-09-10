import React from 'react';
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

export default SupportButton;
