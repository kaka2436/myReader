import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooksPage from './components/SearchBooks'

import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          /**
           * TODO: Instead of using this state variable to keep track of which page
           * we're on, use the URL in the browser's address bar. This will ensure that
           * users can use the browser's back and forward buttons to navigate between
           * pages, as well as provide a good URL they can bookmark and share.
           */
          showSearchPage: false
      };
      this.closeSearchBooks = this.closeSearchBooks.bind(this);
      this.openSearchBooks = this.openSearchBooks.bind(this);
  }
  closeSearchBooks(){
    this.setState({
        showSearchPage:false
    });
  }

  openSearchBooks(){
    this.setState({
        showSearchPage:true
    });
  }

  render() {
    return (
      <div className="app">
          {this.state.showSearchPage ? <SearchBooksPage back={this.closeSearchBooks}/> : <ListBooks open={this.openSearchBooks}/>}
      </div>
    )
  }
}

export default BooksApp
