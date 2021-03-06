/*
 * 书籍展示组件，显示一组书
 */
import React from 'react'
import Changer from './Changer'

function Book(props) {
    let imgUrl;
    if (props.book.hasOwnProperty("imageLinks")){
        imgUrl = props.book.imageLinks.thumbnail;
    }else{
        imgUrl = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3175501794,1851207697&fm=27&gp=0.jpg"
    }
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${imgUrl})`
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