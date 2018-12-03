const redux = require('redux')

const initialState = {
    counter : 0
}

const createStore = redux.createStore

const rootReducer = (state = initialState, action) => {

    if(action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter : state.counter + (action.value = 1)
        }
    } else if (action.type === 'DEC_COUNTER') {
        return {
            ...state,
            counter : state.counter - (action.value = 1)
        }
    }
}

const store = createStore(rootReducer)

store.subscribe(() => {
    // do something
})

console.log("initial counter = 0")


store.dispatch({type : 'INC_COUNTER'})

console.log("increased")
console.log(store.getState())

store.dispatch({type : 'DEC_COUNTER'})

console.log("decreased")
console.log(store.getState())