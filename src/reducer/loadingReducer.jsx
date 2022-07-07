const LOADING = 'LOADING';

const initialState = {
  load: false,
};

export const loadReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, load: action.payload };

    default:
      return state;
  }
};

export const getBooksAction = (payload) => ({ type: LOADING, payload });
