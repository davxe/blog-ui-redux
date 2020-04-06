import {connect} from 'react-redux'
import {startGetPosts} from '../actions/postsAction'
import {startGetUsers} from '../actions/usersAction'
import React from 'react'
import {Link} from 'react-router-dom'

class PostList extends React.Component
{
    componentDidMount()
    {
        if(this.props.posts.length===0)
        {
            this.props.dispatch(startGetPosts())
        }
    }
    render()
    {
        console.log(this.props.posts)
        return(
        <div>
            <h2>Total Posts - {this.props.posts.length}</h2>
            <ul>
                {
                    this.props.posts.map((ele,i)=>{
                    return (<li key={i}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        users:state.users,
        posts:state.posts
    }
}

export default connect(mapStateToProps)(PostList)