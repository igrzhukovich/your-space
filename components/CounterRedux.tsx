"use client";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/app/redux/counterSlice";

export function DisplayCounterRedux() {
    const counterValue = useSelector((state) => state.counter);
    return <p>Redux Count: {counterValue}</p>;
}

export default function CounterRedux() {
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Counter with help of Redux</h2>
            <DisplayCounterRedux />
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>
    );
}
