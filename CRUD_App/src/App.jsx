import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./page/home"
import AddBook from "./page/addBook"
import BookList from "./page/bookList"
import Navbar from "./components/navbar"
import Edit from "./page/edit"

function App() {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="addBook" element={<AddBook/>}/>
        <Route path="bookList" element={<BookList/>}/>
        <Route path="edit" element={<Edit/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
