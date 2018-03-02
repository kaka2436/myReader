/*
 * 改变书籍位置的下拉列表组件
 */
import React, {Component} from 'react'

class Changer extends Component {
    constructor(props) {
        super(props);
        let current = this.props.book.current;
        let selectValue = '';
        if (current === 'current') {
            selectValue = 'current';
        } else if (current === 'want') {
            selectValue = 'wantToRead';
        } else if (current === 'read') {
            selectValue = 'read';
        } else if (current === 'none') {
            selectValue = 'none'
        }
        this.state = {
            value: selectValue
        };
        this.handlerChange = this.handlerChange.bind(this);
    }
    handlerChange(e) {
        if (this.state.value === 'none') {
            this.props.remove(this.props.rbook);
        }
        let newValue = e.target.value;
        let newPos = '';
        if (newValue === 'currentlyReading') {
            newPos = 'current';
        } else if (newValue === 'wantToRead') {
            newPos = 'want';
        } else if (newValue === 'read') {
            newPos = 'read';
        } else if (newValue === 'none') {
            newPos = 'none';
        }
        this.props.change(this.props.book.current, newPos, this.props.book);
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