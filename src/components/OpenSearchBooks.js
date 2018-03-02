import React , {Component} from 'react'

//打开搜索按钮组件
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