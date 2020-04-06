import axios from 'axios'
//sync action
export const setCommnts=(comments)=>{
    return {type:'SET_COMMENTS',payload:comments}
}

//asyn action

export const startGetComments=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
        .then(response=>{
            const comments=response.data
            console.log(comments)
            dispatch(setCommnts(comments))
        })
    }
}