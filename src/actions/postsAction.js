import axios from 'axios'
//sync action
export const setPosts=(posts)=>{
    return {type:'SET_POSTS',payload:posts}
}

//asyn action
export const startGetPosts=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>{
            const posts=response.data
            dispatch(setPosts(posts))
        })
    }
}