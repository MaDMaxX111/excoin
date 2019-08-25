import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getRandomInt } from '../../utils';
import { CSSTransition, TransitionGroup, } from 'react-transition-group';
import { StyledWrapIncrement } from '../../styles/components/Footer';

const Randomizeincrement = ({initialValue}) => {

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        const timerInterval = getRandomInt(1000, 5000);

        const incrementValue = () => {
            const increment = getRandomInt(1, 10);
            setValue(value + increment);
        }
        const intervalTimer = setTimeout(incrementValue, timerInterval);
        return () => clearInterval(intervalTimer);

    }, [value]);

    return (
        <StyledWrapIncrement>
            <TransitionGroup component={'span'}>
                <CSSTransition
                    key={value}
                    timeout={1000}
                    classNames="item"
                >
                    <span key={value}>
                        {value}
                    </span>
                </CSSTransition>
            </TransitionGroup>
        </StyledWrapIncrement>
    )
}

Randomizeincrement.propTypes = {
    initialValue: PropTypes.number,
};

export default Randomizeincrement;
