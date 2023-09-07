import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom"
import { updateBook } from "../features/book/bookSlice"

const Edit = () => {

const location=useLocation()
const dispatch=useDispatch()
const navigate=useNavigate()

const [id,setId]=useState(location.state.id)
const [title,setTitle]=useState(location.state.title)
const [writer,setWriter]=useState(location.state.writer)

const handleSubmit=(e)=>{
e.preventDefault();
dispatch(updateBook({id,title,writer}));
navigate("/bookList")
}

  return (
    <div>
      <h2>Edit</h2>
      <form onSubmit={handleSubmit}>
     <label htmlFor="title">Title:</label>
     <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)} /><br/>
     <label htmlFor="writer">Writer</label>
     <input type="text" value={writer} onChange={(event)=> setWriter(event.target.value)} />
     <button type="submit">update Book</button>
     </form>
    </div>
  )
}

export default Edit
