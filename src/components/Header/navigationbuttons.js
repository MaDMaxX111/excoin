import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import Link from '@material-ui/core/Link';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Collapse from '@material-ui/core/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FormattedMessage } from 'react-intl';

import {
    StyledNavigationButtonsContainer,
    StyledMobileNavigationButtonsContainer,
    StyledPopper,
} from '../../styles/components/Header';

import languageActions from '../../redux/language/actions';

const {changeLanguage} = languageActions;

export const NavigationButtons = ({
                                      variant = 'desktop',
                                      avalableLanguages,
                                      currentLanguage,
                                      changeLanguage,
                                  }) => {

    const [open, setOpen] = useState(false);

    const anchorRef = useRef(null);

    const handleOpen = () => {
        !open && setOpen(true);
    }

    const handleClose = () => {
        open && setOpen(false);
    }

    const handlToggle = () => {
        setOpen(!open);
    }

    const Wrap = variant === 'mobile' ? StyledMobileNavigationButtonsContainer : StyledNavigationButtonsContainer

    const languages = avalableLanguages.length > 1 ? avalableLanguages : null;
    const language = avalableLanguages.find(lang => lang.languageId === currentLanguage)

    const onLanguageChange = ({languageId}) => {
        changeLanguage({languageId});
        handleClose();
    }

    const getMenuItemsLang = () => languages.filter(lang => lang.languageId !== language.languageId).map((lang, key) =>
        <MenuItem key={key} disableRipple onClick={() => onLanguageChange({languageId: lang.languageId})}>{lang.text}</MenuItem>)

    return (
        <Wrap>
            {language &&
            <Link
                className={'language-switcher'}
                onMouseEnter={(variant === 'mobile' || !languages) ? null : handleOpen}
                onClick={(variant === 'desktop' || !languages) ? null : handlToggle}
                ref={anchorRef}
            >
                <FontAwesomeIcon icon={faGlobe}/>
                <span>{language.text}</span>
            </Link>
            }
            {languages &&
            (variant === 'mobile' ?
                    <Collapse in={open}>
                        <Paper>
                            <MenuList>
                                {getMenuItemsLang()}
                            </MenuList>
                        </Paper>
                    </Collapse> :
                    <StyledPopper
                        onMouseEnter={handleOpen}
                        onMouseLeave={handleClose}
                        open={open}
                        anchorEl={anchorRef.current}
                        transition
                        disablePortal
                    >
                        {({TransitionProps, placement}) => (
                            <Grow
                                {...TransitionProps}
                                style={{
                                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                                }}
                            >
                                <Paper>
                                    <MenuList>
                                        {getMenuItemsLang()}
                                    </MenuList>
                                </Paper>
                            </Grow>
                        )}
                    </StyledPopper>
            )
            }
            <Link to={'/'}><FormattedMessage id={'text.login'} /></Link>
            <Link to={'/'}><FormattedMessage id={'text.signUp'} /></Link>
        </Wrap>
    )
}

NavigationButtons.propTypes = {
    variant: PropTypes.oneOf(['mobile', 'desktop']),
    currentLanguage: PropTypes.string,
    avalableLanguages: PropTypes.arrayOf(PropTypes.shape({
        languageId: PropTypes.string,
        locale: PropTypes.arrayOf(PropTypes.string),
        text: PropTypes.string,
    })),
    changeLanguage: PropTypes.func,
};

function mapStateToProps(state) {
    // debugger;
    const {Language} = state;
    const {currentLanguage, avalableLanguages} = Language || {}
    return {
        currentLanguage,
        avalableLanguages,
    }
}

export default connect(mapStateToProps, {changeLanguage})(NavigationButtons);
