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