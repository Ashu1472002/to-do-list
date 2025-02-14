import { useState } from "react"

export default function TodoInput(props){
    const { handleAddTodos, todoValue, setTodoValue} = props
    
    return(
            <div>
                <h1>Let's make a ToDo</h1>
                <header>
                    <input value={todoValue} onChange={(e)=>{
                        setTodoValue(e.target.value)
                    }} placeholder="Enter Todo content..."/>
                    <button onClick={()=>{
                        handleAddTodos(todoValue)
                        setTodoValue('')
                    }}>Add</button>
                </header>
            </div>
    )
}