import React , {Component} from 'react'

class OpenSearchBooks extends Component{
    render(){
        return (
            <div className="open-search">
                <a onClick={this.props.open}>Add a book</a>
            </div>
        )
    }
}

export default OpenSearchBooks