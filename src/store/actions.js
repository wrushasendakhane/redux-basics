export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const STORE_RESULT = "STORE_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";

export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}
export const add = (payload) => {
  return {
    type: ADD, ...payload
  }
}
export const subtract = (payload) => {
  return {
    type: SUBTRACT, ...payload
  }
}

const saveResult = (payload) => {
  return {
    type: STORE_RESULT, ...payload
  }
}
export const storeResult = (payload) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(payload))
    }, 2000);
  }
}
export const deleteResult = (payload) => {
  return {
    type: DELETE_RESULT, ...payload
  }
}