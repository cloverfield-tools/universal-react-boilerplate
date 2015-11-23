import { combineReducers } from 'redux';

const initialItems = [
  { text: 'Book 1', count: 2 },
  { text: 'Book 2', count: 3 },
  { text: 'Book 3', count: 4 },
];

// Combine reducers
const books = (state = {
  items: initialItems,
}, action) => {
  switch (action.type) {
    case 'ADD_COUNT':
      return action.item.count++;
    default:
    return state;
  }
};

const rootReducer = combineReducers({
  books,
});

export default rootReducer;
