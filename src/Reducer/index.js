

export function init(state) {
    return {...state};
}

export function reducer(state, action) {
    switch (action.type) {
      case "item":
        return  {...state, item: action.payload}
      case "value":
        return  {...state, value: action.payload}
      case "contentTask":
        return  {...state, contentTask: action.payload}
      case "contentValue":
        return  {...state, contentValue: action.payload}
      case "route":
        return  {...state, route: action.payload}
      case "visible":
          return  {...state, visible: action.payload}
      case "reset":
        return  init(action.payload)
    
      default:
        return state;
    }
  }