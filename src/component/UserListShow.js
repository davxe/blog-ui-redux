import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class ShowList extends React.Component
{
    render() {
        console.log('users',this.props.users)
        console.log('post',this.props.posts)
        return (
            <div> {
                this.props.users?(<div>
                    <h2>User Show - {this.props.match.params.userId}</h2>
                    <h2>USER NAME:- {this.props.users.name}</h2>
                    <h2>POSTS WRITTEN BY USERS</h2>
                    <ul>
                            {
                                this.props.posts.map((ele,i)=>{
                                    return (<li key={i}><Link to={`/users/${ele.id}`}>{ele.title}</Link></li>)
                                })
                            }
                        </ul>
                </div>):(
                <p>page is uner construction...</p>)}

            </div> 
        )
    }
}

const mapStateToProps=(state,props)=>{
    return {
        users:state.users.find(user=>user.id==props.match.params.userId),
        posts:state.posts.filter(post=>post.userId==props.match.params.userId)
    }
}

export default connect(mapStateToProps)(ShowList)

