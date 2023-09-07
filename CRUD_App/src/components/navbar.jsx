import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
     <nav>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'bookList'}>Books</Link></li>
            <li><Link to={'addBook'}>AddBook</Link></li>
        </ul>
     </nav> 
    </>
  )
}

export default Navbar
