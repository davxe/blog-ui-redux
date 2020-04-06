import React from 'react'
import {connect} from 'react-redux'
import {Link } from 'react-router-dom'
import {startGetUsers} from '../actions/usersAction'
import { startGetPosts } from '../actions/postsAction'

class UserList extends React.Component
{
    componentDidMount()
    {
       if(this.props.users.length===0)
       {
           this.props.dispatch(startGetUsers())
           this.props.dispatch(startGetPosts())
       }
    }
    render()
    {
        console.log('data',this.props.users)
        return(
        <div>
            <h2>Listing Users - {this.props.users.length}</h2>
            <ul>
                {
                    this.props.users.map((ele,i)=>{
                    return (<li key={i}><Link to={`/users/${ele.id}`}>{ele.name}</Link></li>)
                    })
                }
            </ul>
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(UserList)