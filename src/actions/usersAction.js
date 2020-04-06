import axios from 'axios'
//sync action
export const setUsers=(users)=>{
    return {type:'SET_USERS',payload:users}
}

//asyn action

export const startGetUsers=()=>{
    return (dispatch)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data
            dispatch(setUsers(users))
        })
    }
}