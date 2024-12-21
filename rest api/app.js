const express = require('express')
const app = express();

//middleware

app.use(express.json())

let books = [
    {
        id: "1",
        title: "Book 1"
    },
    {
        id: "2",
        title: "Book 2"
    },
    {
        id: "3",
        title: "Book 3"
    }
]


//intro routes
app.get('/',(req, res)=>{
    res.json({
        message: "Welcome to book store"
    })
})

//get all books
app.get('/get-books',(req, res)=>{
    res.json(books)

})

//get a single book
app.get('/get/:id',(req, res)=>{
    const book = books.find(item=> item.id === req.params.id)
    if(book){
        res.status(200).json(book)
    } else{
        res.status(404).json({
            message: 'Book not found, please try with a valid id'
        })
    }

})


//add a new book (post)
app.post('/add', (req, res)=>{
    const newBook ={
        id: books.length + 1,
        title: `Book ${books.length + 1}`
    }
    books.push(newBook)
    res.status(200).json({
        data: newBook,
        message: "New book is added successfully"
    })

})

//update a book (put)
app.put('/update/:id',(req, res)=>{
    const findCurrentBook = books.find(bookItem=> bookItem.id === req.params.id)
    if(findCurrentBook){
        findCurrentBook.title=req.body.title || findCurrentBook.title
        res.status(200).json({
            message: `Book with id ${req.params.id} updated successfully`,
            data: findCurrentBook
        })
    } else{
        res.status(404).json({
            message: 'Book not found'
        })
    }
})

//delete a book (delete)
app.delete('/delete/:id',(req, res)=>{
    const findIndexOfCurrentBook = books.findIndex(item=> item.id=== req.params.id)
    if(findIndexOfCurrentBook !== -1){
        const deleteBook = books.splice(findIndexOfCurrentBook, 1);
        res.status(200).json({
            message: "Book deleted successfully",
            data: deleteBook[0]
        })

    }else{
        res.status(404).json({
            message: 'Book not found'
        })
    }
})


const port= 3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})