/*
 * 书架展示组件
 */

import React , {Component} from 'react'
import OpenSearchBooks from './OpenSearchBooks'
import Bookshelf from './Bookshelf'

class ListBooks extends Component{
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title={this.props.current.title} books={this.props.current.books} change={this.props.change}/>
                        <Bookshelf title={this.props.want.title} books={this.props.want.books} change={this.props.change}/>
                        <Bookshelf title={this.props.read.title} books={this.props.read.books} change={this.props.change}/>
                    </div>
                </div>
                <OpenSearchBooks open={this.props.open}/>
            </div>
        )
    }
}

export default ListBooks