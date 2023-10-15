import React, { useRef } from "react"
import { useAppDispatch } from "../../store/store"
import { addPerson } from "../../store/features/personSlice"

export const Add = () => {
    const name = useRef<string>('')
    const dispatch = useAppDispatch()

    return(
        <form id="addForm">
            <label >Person Name 
                <input type="text" onChange={e => name.current = e.target.value}/>
            </label>
            <button onClick={() => dispatch(addPerson({name: name.current}))}>Add</button>
        </form>
        )
}