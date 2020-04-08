import React from 'react'
import Home from './component/Home'
import UserList from './component/UserList'
import ShowList from './component/UserListShow'
import PostList from './component/PostList'
import ShowListPost from './component/PostListShow'
import {BrowserRouter,Route,Link} from 'react-router-dom'

function App(props)
{
    return(
        <BrowserRouter>
            <div>
                <h2>Hello React App!!!</h2>
                <Link to='/'>Home</Link>-
                <Link to='/userlist'>Users</Link>-
                <Link to='/postlist'>Posts</Link>

                <Route path='/' component={Home} exact={true}/>
                <Route path='/userlist' component={UserList} exact={true}/>
                <Route path='/users/:userId' component={ShowList}/>
                <Route path='/postlist' component={PostList} exact={true}/>
                <Route path='/posts/:userId' component={ShowListPost}/>
            </div>
        </BrowserRouter>
    )
}

export default App