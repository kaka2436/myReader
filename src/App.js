/*主程序
 *决定显示书架页面还是搜索页面
 */
import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
//导入自定义搜索页面组件
import SearchBooksPage from './components/SearchBooks'
//导入自定义书架页面组件
import * as BookAPI from './BooksAPI'
import Bookshelf from './components/Bookshelf'
import OpenSearchBooks from './components/OpenSearchBooks'

// 定义主程序组件
class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        // 定义现有书籍的数据
        this.state = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
            //决定是否显示搜索页面
            //true显示
            //false显示书架
        };
        this.getBooks = this.getBooks.bind(this);
        this.changePosition = this.changePosition.bind(this)
    }

    componentDidMount(){
        this.getBooks();
    }
    changePosition(oldPos,newPos,book,isSearch){
        if(oldPos === newPos){
            return
        }else if(isSearch === false){
            if(newPos === 'none'){
                const op = this.state[oldPos];
                const index = op.indexOf(book);
                if(index !== -1){
                    op.splice(index,1);
                    this.setState({
                        [oldPos]:op
                    })
                }
            }else{
                const op = this.state[oldPos];
                const index = op.indexOf(book);
                if(index !== -1){
                    op.splice(index,1);
                    this.setState({
                        [oldPos]:op
                    })
                }
                const np = this.state[newPos];
                book.shelf = newPos;
                np.push(book);
                this.setState({
                    [newPos]:np
                })
            }
        }else{
            if(oldPos !== 'none'){
                const op = this.state[oldPos];
                let index = 0;
                let flag = false;
                for(index = 0 ; this.state[oldPos].length;index++){
                    if(this.state[oldPos][index].id === book.id){
                        flag = true;
                        break;
                    }
                }
                if(flag){
                    op.splice(index,1);
                    this.setState({
                        [oldPos]:op
                    })
                }
            }

            if(newPos !== 'none') {
                const np = this.state[newPos];
                book.shelf = newPos;
                np.push(book);
                this.setState({
                    [newPos]: np
                })
            }
        }
    }


    getBooks() {
        let current = [];
        let want = [];
        let read = [];
        BookAPI.getAll().then((books) => {
            if (Array.isArray(books)) {
                books.map((book) => {
                    if (book.shelf === 'currentlyReading') {
                        current.push(book)
                    } else if (book.shelf === 'wantToRead') {
                        want.push(book)
                    } else if (book.shelf === 'read') {
                        read.push(book)
                    }
                    return true
                });
                this.setState({
                    currentlyReading: current,
                    wantToRead: want,
                    read: read
                })
            }
        }).catch((error) => {
            console.log(error.toString());
        });
    }

    render(){
        return (
            <div className="app">
                <Route exact path='/' render={()=>(
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            <div>
                                <Bookshelf title={ 'CurrentReading'} books={this.state.currentlyReading} changer={this.changePosition}/>
                                <Bookshelf title={ 'Want'} books={this.state.wantToRead} changer={this.changePosition}/>
                                <Bookshelf title={ 'read'} books={this.state.read} changer={this.changePosition}/>
                            </div>
                        </div>
                        <OpenSearchBooks/>
                    </div>
                )} />
                <Route path='/Search' render={()=>(
                    <SearchBooksPage changer={this.changePosition} current={this.state.currentlyReading} want={this.state.wantToRead} read={this.state.read} /> )}/>
            </div>
        )
    }
}

export default BooksApp
