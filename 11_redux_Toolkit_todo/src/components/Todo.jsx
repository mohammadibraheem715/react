import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import {removeTodo} from "../features/todo/todoSlice"

function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()


  return (
    <>
    <div>Todo</div>
    </>
  )
}

export default Todo