import { useState, useRef, useLayoutEffect } from 'react';

function useDimensions() {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});

    useLayoutEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON())
    }, [ref]);

    return [ref, dimensions];
}

export { useDimensions }
