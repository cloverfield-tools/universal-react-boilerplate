import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';

const initialState = [
  { id: 1, text: 'Book 1', count: 2 },
  { id: 2, text: 'Book 2', count: 3 },
  { id: 3, text: 'Book 3', count: 4 },
];

// Combine reducers
const books = (state = {
  items: initialState,
}, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      const newItems = state.items.map(item => {
        if (item.id === action.item.id) {
          item.count++;
        }

        return item;
      });

      return Object.assign({}, state.items, {
        items: newItems,
      });
    default:
    return state;
  }
};

const rootReducer = combineReducers({
  routing: routeReducer,
  books,
});

export default rootReducer;
