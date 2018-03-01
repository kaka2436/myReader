import React from 'react'
import Changer from './Changer'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: props.book.url
                }}></div>
                <Changer book={props.book} change={props.change} remove={props.remove} rbook={props.rbook}/>
            </div>
            <div className="book-title">{props.book.name}</div>
            <div className="book-authors">{(
                    props.book.author?props.book.author.join('，'):'unknow'
            )}</div>
        </div>
    )
}

export default Book