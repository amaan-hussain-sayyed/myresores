import React from 'react'

const Todo = ({todo ,HndelUpdate ,HandelDelete ,key}) => {
  return (
      <tr key={key+"a"}>
          <td>{todo.name}</td>
          <td>{todo.id}</td>
          <td>
              <button onClick={() => HndelUpdate(todo.id,todo)} >update</button>
              <button onClick={() => HandelDelete(todo.id+"")}>delete</button>
          </td>
    </tr>
  )
}

export default Todo