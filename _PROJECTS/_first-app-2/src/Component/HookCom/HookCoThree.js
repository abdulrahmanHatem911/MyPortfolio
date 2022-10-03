import React, { useState } from 'react'

export default function HookCoThree() {

    const [name, setNane] = useState({ FirestNamel: '', lastName: '' })

    return (
        <div>
            <form>
                <input type="text"
                    value={name.FirestNamel}
                    onChange={e => setNane({ ...name, FirestNamel: e.target.value })}></input>

                <input type="text"
                    value={name.lastName}
                    onChange={e => setNane({ ...name, lastName: e.target.value })}></input>
            </form>

            <h1> the firestNamel is : {name.FirestNamel}</h1>
            <h1>the last name is : {name.lastName}</h1>


        </div>
    )
}
