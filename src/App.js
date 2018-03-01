import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooksPage from './components/SearchBooks'

import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          current:{
              title:'Currently Reading',
              books:[
                  {
                      url:'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")',
                      title:'To Kill a Mockingbird',
                      author:['Harper Lee'],
                      current:'current'
                  },
                  {
                      url:'url("http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api")',
                      title:'Ender\'s Game',
                      author:['Orson Scott Card'],
                      current:'current'
                  },
              ]
          },
          want:{
              title:'Want to Read',
              books:[
                  {
                      url:'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")',
                      title:1776,
                      author:['David McCullough'],
                      current:'want'
                  },
                  {
                      url:'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")',
                      title:'Harry Potter and the Sorcerer\'s Stone',
                      author:['J.K. Rowling'],
                      current:'want'
                  }
              ]
          },
          read:{
              title:'Read',
              books:[
                  {
                      url:'url("http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api")',
                      title:'The Hobbit',
                      author:['J.R.R. Tolkien'],
                      current:'read'
                  },
                  {
                      url:'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")',
                      title:'Oh, the Places You\'ll Go!',
                      author:['Seuss'],
                      current:'read'
                  },
                  {
                      url:'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")',
                      title:'The Adventures of Tom Sawyer',
                      author:['Mark Twain'],
                      current:'read'
                  }
              ]
          },
          showSearchPage: false
      };
      this.closeSearchBooks = this.closeSearchBooks.bind(this);
      this.openSearchBooks = this.openSearchBooks.bind(this);
      this.changePosition = this.changePosition.bind(this);
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

    changePosition(oldPos,newPos,book){
      if(oldPos === 'none'){
          const np = this.state[newPos];
          book.current = newPos;
          np.books.push(book);
          this.setState({
              [newPos]:np
          })
      }else if(newPos === 'none'){
          const op = this.state[oldPos];
          const index = op.books.indexOf(book);
          if(index !== -1){
              op.books.splice(index,1);
              this.setState({
                  [oldPos]:op
              })
          }
      }else{
          const op = this.state[oldPos];
          const index = op.books.indexOf(book);
          if(index !== -1){
              op.books.splice(index,1);
              this.setState({
                  [oldPos]:op
              })
          }
          const np = this.state[newPos];
          book.current = newPos;
          np.books.push(book);
          this.setState({
              [newPos]:np
          })
      }
    }

  render() {
    return (
      <div className="app">
          {this.state.showSearchPage ? (
              <SearchBooksPage
                  back={this.closeSearchBooks}
                  change={this.changePosition}
              />
          ) : (
              <ListBooks
                  open={this.openSearchBooks}
                  current={this.state.current}
                  want={this.state.want}
                  read={this.state.read}
                  change={this.changePosition}
              />
          )}
      </div>
    )
  }
}

export default BooksApp
