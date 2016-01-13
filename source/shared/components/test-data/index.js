import { connect } from 'react-redux';
import createTitle from 'shared/components/title';

const createApp = React => ({ dispatch, books }) => {
  const Title = createTitle(React);

  const bookNodes = books.items.map(book => {
    return (
      <div key={ book.id }>
        { book.text } - Read by { book.count } people.
        <button onClick={ () => dispatch({ type: 'ADD_COUNT', item: book }) }>Add reader</button>
      </div>
    );
  });

  return (
    <div>
      <Title title="Books" />
      { bookNodes }
    </div>
  );
};

const mapStateToProps = (state) => {
  const { books } = state;
  return { books };
};

// Connect props to component
export default React => {
  const App = createApp(React);
  return connect(mapStateToProps)(App);
};
