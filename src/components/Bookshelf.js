/*
 * 书架每一层的显示组件，显示一类书
 */
import React from 'react'
import Book from './Book'

function Bookshelf(props) {
    const title = props.title;
    const bookDiv = props.books.map((book)=>
        <li key={book.title}><Book book={book} changer={props.changer}/></li>
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