import React, { useState, useEffect } from 'react'

function HookUseEffectr() {

    const [count, setcount] = useState(0)
    const [name, SetName] = useState('')

    useEffect(() => {
        console.log("document from useeffect");
        document.title = `click times is ${count}`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => { SetName(e.target.value) }} />

            <button onClick={() => setcount(count + 1)}> the click times is {count}</button>

        </div>
    )
}

export default HookUseEffectr
