import React, { useState, useRef } from 'react';
// import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { StyledNavigationButtonsContainer, StyledPopper } from '../../styles/components/Header';

const NavigationButtons = () => {

    const [open, setOpen] = useState(false);

    const anchorRef = useRef(null);

    const handleOpen = () => {
        !open && setOpen(true);
    }

    const handleClose = () => {
        open && setOpen(false);
    }

    return (
        <StyledNavigationButtonsContainer>
            <Link
                className={'language-switcher'}
                onMouseEnter={handleOpen}
                ref={anchorRef}
            >
                <FontAwesomeIcon icon={faGlobe}/>
                <span>EN</span>
            </Link>
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
            <Link to={'/'}>Login</Link>
            <Link to={'/'}>Sign Up</Link>
        </StyledNavigationButtonsContainer>
    )
}

// NavigationButtons.propTypes = {
//     links: PropTypes.arrayOf(PropTypes.shape({
//         href: PropTypes.string,
//         text: PropTypes.string
//     })),
// };

export default NavigationButtons;
