const usersInitialState=[]
const commentsReducer=(state=usersInitialState,action)=>{
    switch(action.type)
    {
        case 'SET_COMMENTS':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export default commentsReducer