import { useDispatch, useSelector } from "react-redux"
import { deleteBook } from "./bookSlice"
import { Link } from "react-router-dom"

const BookView = () => {
  
  const books=useSelector((state)=>state.bookReducer.books)
   
  const dispatch=useDispatch()

   const handleDelete=(id)=>{
    dispatch(deleteBook(id))
   }

    return (
    <>
    <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>NAME</th>
                <th>WRITER</th>
                <th>Edit</th>
                <th>Delete</th>                
            </tr>
        </thead>
        <tbody>
            {books && books.map((book)=>{
                const{id,title,writer}=book;
                return <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.writer}</td>
                <td><Link to={"/edit"} state={{id,title,writer}}><button>Edit</button></Link></td>
                <td><button onClick={()=>handleDelete(book.id)}>Delete</button></td>
                </tr>
            }) }
        </tbody>

    </table>
      
    </>
  )
}

export default BookView
