import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addBook } from "../features/book/bookSlice"
import { useNavigate } from "react-router-dom"

const AddBook = () => {

const [title,setTitle]=useState("")
const [writer,setWriter]=useState("")

const dispatch=useDispatch();
const navigate=useNavigate()
 
const numberOfBook=useSelector((state)=>state.bookReducer.books.length)

const handleSubmit=(e)=>{
  e.preventDefault()
  const book={id:numberOfBook + 1,title,writer}
  dispatch(addBook(book))
  console.log(book)
  navigate('/bookList')
}



  return (
    <>
    <h2>Add Book</h2>
      
     <form onSubmit={handleSubmit}>
     <label htmlFor="title">Title:</label>
     <input type="text" value={title} onChange={(event)=> setTitle(event.target.value)} /><br/>
     <label htmlFor="writer">Writer</label>
     <input type="text" value={writer} onChange={(event)=> setWriter(event.target.value)} />
     <button type="submit">Add Book</button>
     </form>


    </>
  )
}

export default AddBook
