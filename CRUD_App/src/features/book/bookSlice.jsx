import { createSlice } from "@reduxjs/toolkit";


const initialBooks={
    books:[
        {id:1,title:"Bangladesh",writer:"Hasan"},
        {id:2,title:"River",writer:"Rokib"},
    ]
}


export const bookSlice=createSlice({
    name:"book",
    initialState:initialBooks,
    reducers:{
       showBook:(state)=>state,

       addBook:(state,action)=>{
        state.books.push(action.payload)
       
       },

       deleteBook:(state,action)=>{
        const id=action.payload;
        state.books=state.books.filter((book)=>book.id !==id)    
       },

       updateBook:(state,action)=>{
        const {id,title,writer}=action.payload;
        const isBookExist=state.books.filter((book)=>book.id === id);
        if(isBookExist){
            isBookExist[0].title=title;
            isBookExist[0].writer=writer;
        }
       }
    }

})

export const {showBook,addBook,deleteBook,updateBook}=bookSlice.actions;

export default bookSlice.reducer

