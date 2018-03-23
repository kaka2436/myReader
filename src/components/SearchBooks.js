/*
 *  搜索页面组件
 */

import React , {Component} from 'react'
import {search} from '../BooksAPI'
import Book from './Book'
import { Debounce } from 'react-throttle'
import {Link} from 'react-router-dom'

class SearchBooksPage extends Component{
    constructor(props){
        super(props);
        this.state={
            searchValue:'',
            result:[]
        };
        this.inputHandler = this.inputHandler.bind(this);
        this.bookDiv = this.bookDiv.bind(this);
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
            search(searchText).then((res) => {
                if (Array.isArray(res)){
                    this.setState({
                        result: res
                    })
                }
            });
        }
    }
    //构建搜索结果显示
    bookDiv(){
        if (Array.isArray(this.state.result)) {
            return this.state.result.map((book) => {
                    this.props.current.map((cbook)=>{
                        if(cbook.id === book.id){
                            book.shelf = 'currentlyReading'
                        }
                        return true
                    });
                    this.props.want.map((cbook)=>{
                        if(cbook.id === book.id){
                            book.shelf = 'wantToRead'
                        }
                        return true
                    });
                    this.props.read.map((cbook)=>{
                        if(cbook.id === book.id){
                            book.shelf = 'read'
                        }
                        return true
                    });
                    return (<li key={book.title+Math.round(Math.random()*1000)}><Book book={book} changer={this.props.changer} isSearch={true}/></li>)
                }
            )
        }
    }

    render() {
        return (<div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="800" handler="onChange">
                            <input type="text" placeholder="Search by title or author" onChange={this.inputHandler}/>
                        </Debounce>
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