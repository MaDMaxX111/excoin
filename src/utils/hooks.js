import { useState, useRef, useLayoutEffect, useEffect } from 'react';

function useDimensions() {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});

    useLayoutEffect(() => {
        setDimensions(ref.current.getBoundingClientRect().toJSON())
    }, [ref]);

    return [ref, dimensions];
}

export { useDimensions }

function useVisibility(node, options = {}) {
    const [ visible, setVisibilty ] = useState(false);

    const handleObserverUpdate = (entries) => {
        const ent = entries[0];
        const { isIntersecting } = ent || {};
        setVisibilty(isIntersecting);
    };

    const observer = new IntersectionObserver(handleObserverUpdate, options);

    useEffect(() => {
        const { current } = node;

        if (!current) {
            return;
        }

        observer.observe(current);

        return function cleanup() {
            observer.unobserve(current);
        };
    });

    return visible;
}

export { useVisibility }

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export { usePrevious }
