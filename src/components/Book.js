/*
 * 书籍展示组件，显示一组书
 */
import React from 'react'
import Changer from './Changer'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${props.book.imageLinks.thumbnail})`
                }}></div>
                <Changer book={props.book} changer={props.changer} isSearch={props.isSearch}/>
            </div>
            <div className="book-title">{props.book.title}</div>
            <div className="book-authors">{(
                    props.book.authors
            )}</div>
        </div>
    )
}

export default Book