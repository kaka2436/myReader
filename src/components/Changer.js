/*
 * 改变书籍位置的下拉列表组件
 */
import React, {Component} from 'react'
import * as BookAPI from '../BooksAPI'

class Changer extends Component {
    constructor(props) {
        super(props);
        let current = this.props.book.shelf;
        if(current === undefined){
            current = 'none';
            this.props.book.shelf = 'none';
        }
        this.state = {
            value: current
        };
        this.handlerChange = this.handlerChange.bind(this);
    }
    handlerChange(e) {
        e.persist();
        let shelf = e.target.value;
        BookAPI.update(this.props.book, shelf).then(()=>{
            if(this.props.isSearch !== true){
                this.props.changer(this.props.book.shelf,shelf,this.props.book,false);
            }else{
                this.props.changer(this.props.book.shelf,shelf,this.props.book,true);
            }
        }).catch(()=>{
            alert("网络连接故障，请检查网络");
        });
        this.setState({
            value:e.target.value
        })
    }

    render() {
        return(
            <div className="book-shelf-changer" >
                <select value={this.state.value} onChange={this.handlerChange}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default Changer