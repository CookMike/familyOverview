import { useState } from "react"
import {useDispatch} from 'react-redux'
import { addTodo } from "../../store/features/toDoSlice"

export function AddTodo (){
    const [input,setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e:Event) =>{
        e.preventDefault()

        dispatch(addTodo(input))
        setInput('')
    }
return (
        <div>
            <div>AddTodo</div>
            <form>
                <input type="text" id='todo' placeholder="enter your TODO" onChange={(e)=>setInput(e.target.value)}/>

            </form>
        </div>
    )
}