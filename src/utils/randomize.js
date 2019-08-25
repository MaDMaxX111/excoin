export const getRandomArbitrary = (min, max)  => {
    return Math.random() * (max - min) + min;
}

export const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}
