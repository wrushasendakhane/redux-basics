const redux = require("redux")

const createStore = redux.createStore

const initialState = {
  counter: 0
}
//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === "INC_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  if (action.type === "ADD_COUNTER") {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }
  return state;
}

//Store
const store = createStore(rootReducer)
console.log(store.getState());
//Subscribe
store.subscribe(() => {
  console.log("[Subscription]", store.getState());
})

//Dispatch Actions
store.dispatch({ type: "INC_COUNTER", value: 1 });
store.dispatch({ type: "ADD_COUNTER", value: 10 })