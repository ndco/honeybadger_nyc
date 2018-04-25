// actions/index.js
// Namespace actions
export const INCREMENT = 'counter/INCREMENT';
export function increamentCounter(text) {
    return {
        type: INCREMENT,
        text
    };
}

export const DECREMENT = 'counter/DECREMENT';
export function decrementCounter(text) {
    return {
        type: DECREMENT,
        text
    };
};

export const CLEAR = 'counter/CLEAR';
export function clearCounter(text) {
    return {
        type: CLEAR,
        text
    };
};

export const 