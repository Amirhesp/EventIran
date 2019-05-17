import {createStore , applyMiddleware, combineReducers} from 'redux'
import {createLogger} from 'redux-logger'
import {filtering_reducer} from './reducers/filtering_reducer'
import {search_reducer} from './reducers/search_reducer'
import {login_reducer , register_reducer} from './reducers/Login_Register_reducer'

const reducers = combineReducers({
    filteredEvents : filtering_reducer,
    searchedQuery  : search_reducer,
    logindata : login_reducer,
    registerdata : register_reducer
})

// const middleware = applyMiddleware(createLogger())
const middleware = applyMiddleware()

export const store = createStore(reducers , middleware)
