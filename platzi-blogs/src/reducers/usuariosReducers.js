const INITIAL_STATE = {
  usuarios: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.payload) {
    case 'traerUsuarios' :
      return { ...state, usuarios: action.payload }

    default:
      return state;
  }
}