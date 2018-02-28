import React , {Component} from 'react'
import Changer from './Changer'

class Book extends Component{

    render(){
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: this.props.book.url
                    }}></div>
                    <Changer book={this.props.book} change={this.props.change}/>
                </div>
                <div className="book-title">{this.props.book.name}</div>
                <div className="book-authors">{this.props.book.author}</div>
            </div>
        )
    }
}

export default Book