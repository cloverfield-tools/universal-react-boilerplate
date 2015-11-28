import React from 'react';
import { connect } from 'react-redux';

const App = ({ dispatch, books }) => {
  const bookNodes = books.items.map(book => {
    return (
      <div key={ book.id }>
        { book.text } - Read by { book.count } people.
        <button onClick={ () => dispatch({ type: 'ADD_COUNT', book }) }>Add reader</button>
      </div>
    );
  });

  return <div>{ bookNodes }</div>;
};

function mapStateToProps (state) {
  const { books } = state;
  return { books };
}

// Connect props to component
export default connect(mapStateToProps)(App);
