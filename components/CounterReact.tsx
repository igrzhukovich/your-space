"use client";

import React, { useContext, useReducer } from "react";

const initialState = { count: 0 };
const CounterContext = React.createContext(initialState);

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

export const DisplayCounterReact = () => {
    const { state } = useContext(CounterContext);

    return <p>React Count: {state.count}</p>;
};

const CounterButtons = () => {
    const { dispatch } = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
                Increment
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
                Decrement
            </button>
        </div>
    );
};

export default function CounterReact() {
    return (
        <div>
            <h2>Counter with help of React</h2>
            <DisplayCounterReact />
            <CounterButtons />
        </div>
    );
}
