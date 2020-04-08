import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
class ShowListPost extends React.Component
{
    render() {
        console.log('users',this.props.users)
        console.log('post',this.props.posts)
        console.log('coment',this.props.comments)
        return (
            <div> 
                <h2>USER NAME:- {this.props.users.find(user=>user.id===this.props.posts.userId).name}</h2>
                <h2>TITLE :-
                    {
                        this.props.posts.title
                    }
                </h2>
                <h2>BODY:-
                    {
                        this.props.posts.body
                    }
                </h2>
                <hr/>
                <h2>Comments:</h2>
                <ul>
                    {
                        this.props.comments.map((ele,i)=>{
                        return (<li key={i}>{ele.body}</li>)
                        })
                    }
                </ul><hr/>
                <p><Link to={`/users/${this.props.users.find(user=>user.id==this.props.posts.userId).id}`}>More Posts from author:{this.props.users.find(user=>user.id===this.props.posts.userId).name}</Link></p>
            </div> 
        )
    }
}
const mapStateToProps=(state,props)=>{
    return {
        posts:state.posts.find(post=>post.id==props.match.params.userId),
        users:state.users,
        comments:state.comments.filter(comment=>comment.postId==props.match.params.userId)
    }
}

export default connect(mapStateToProps)(ShowListPost)