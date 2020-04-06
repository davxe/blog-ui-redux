import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/userReducers'
import postsReducer from '../reducers/postReducers'
import commentsReducer from '../reducers/commentReducers'

const configureStore = () => {
    const store = createStore(combineReducers({
        posts: postsReducer,
        users:usersReducer,
        comments:commentsReducer
    }),applyMiddleware(thunk))
    return store 
}

export default configureStore