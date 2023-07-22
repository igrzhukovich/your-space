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

const CounterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
};

const CounterDisplay = () => {
    const { state } = useContext(CounterContext);

    return <p>Count: {state.count}</p>;
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

export default function Counter() {
    return (
        <CounterProvider>
            <CounterDisplay />
            <CounterButtons />
        </CounterProvider>
    );
}
