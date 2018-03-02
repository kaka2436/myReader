/*
 *  搜索页面组件
 */

import React , {Component} from 'react'
import {search} from '../BooksAPI'
import Book from './Book'

class SearchBooksPage extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue:'',
            result:[]
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.bookDiv = this.bookDiv.bind(this);
        this.removeBook = this.removeBook.bind(this);
    }
    //处理图书搜索输入框的输入操作
    inputHandler(e){
        const searchText = e.target.value;
        this.setState({searchValue:searchText});
        if (searchText === ''){
            this.setState({
                result:[]
            })
        }else {
            search(searchText).then((res) => this.setState({
                result: res
            }));
        }
    }
    //构建搜索结果显示
    bookDiv(){
        if (this.state.result !== undefined) {
            return this.state.result.map((book) => {
                    let img = '';
                    if(book.imageLinks){
                        img = book.imageLinks.thumbnail;
                    }else{
                        img = book.previewLink;
                    }
                    let b = {
                        url: `url("${img}")`,
                        title: book.title,
                        author: book.authors,
                        current: 'none'
                    };
                    return (<li key={b.title}><Book book={b} change={this.props.change} remove={this.removeBook} rbook={book}/></li>)
                }
            )
        }
    }
    //在用户将搜索结果添加到书架后，移除该书籍在搜索窗口的显示
    removeBook(book){
        const index = this.state.result.indexOf(book);
        const books = this.state.result;
        books.splice(index,1);
        this.setState({
            result:books
        })
    }

    render() {
        return (<div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={this.props.back}>Close</a>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.inputHandler}/>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.bookDiv()}
                    </ol>
                </div>
            </div>
        )
    }
}



export default SearchBooksPage