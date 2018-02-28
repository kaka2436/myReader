import React from 'react'
import Book from './Book'

function Bookshelf(props) {

    const title = props.title;
    const books = props.books;
    const bookDiv = books.map((book)=>
        <li key={book.title}><Book book={book} change={props.change}/></li>
    );
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookDiv}
                </ol>
            </div>
        </div>
    )
}

export default Bookshelf