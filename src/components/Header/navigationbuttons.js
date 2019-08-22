import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Collapse from '@material-ui/core/Collapse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
    StyledNavigationButtonsContainer,
    StyledMobileNavigationButtonsContainer,
    StyledPopper,
} from '../../styles/components/Header';
import PropTypes from "prop-types";

const NavigationButtons = ({variant = 'desktop'}) => {

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

    return (
        <Wrap>
            <Link
                className={'language-switcher'}
                onMouseEnter={variant === 'mobile' ? null : handleOpen}
                onClick={variant === 'mobile' ? handlToggle : null}
                ref={anchorRef}
            >
                <FontAwesomeIcon icon={faGlobe}/>
                <span>EN</span>
            </Link>
            {variant === 'mobile' ?
                <Collapse in={open}>
                    <Paper>
                        <MenuList>
                            <MenuItem>Руский</MenuItem>
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
                                    <MenuItem onClick={handleClose}>Руский</MenuItem>
                                </MenuList>
                            </Paper>
                        </Grow>
                    )}
                </StyledPopper>
            }
            <Link to={'/'}>Login</Link>
            <Link to={'/'}>Sign Up</Link>
        </Wrap>
    )
}

NavigationButtons.propTypes = {
    variant: PropTypes.oneOf(['mobile', 'desktop']),
};

export default NavigationButtons;
