import React , {Component} from 'react'
import {Link} from 'react-router-dom'

//打开搜索按钮组件
class OpenSearchBooks extends Component{
    render(){
        return (
            <div className="open-search">
                <Link to='/Search'>Add a book</Link>
            </div>
        )
    }
}

export default OpenSearchBooks