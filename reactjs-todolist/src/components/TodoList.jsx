import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  let todos = [
    'Go to the Gym',
    'Eact more fruits and vegetables',
    'Drink a plenty of water'
]
  return (
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return(
          <TodoCard key={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul>
  )
}
