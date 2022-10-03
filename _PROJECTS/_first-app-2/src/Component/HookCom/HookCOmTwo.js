import React, { useState } from 'react'

export default function HookCOmTwo() {

    const initialcount = 0
    const [count, setCount] = useState(initialcount)

    return (
        <div>
            Count = {count}

            <button onClick={() => { setCount(initialcount) }}>reset</button>
            <button onClick={() => { setCount(prepCount => prepCount + 1) }}>increment</button>
            <button onClick={() => { setCount(prepCount => prepCount - 1) }}>decrement</button>

        </div >
    )
}
