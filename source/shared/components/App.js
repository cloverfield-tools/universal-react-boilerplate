import { connect } from 'react-redux';

import settings from 'server/settings';
import createTitle from './Title';

const App = React => ({ dispatch, books }) => {
  const Title = createTitle(React);

  const bookNodes = books.items.map(book => {
    return (
      <div key={ book.id }>
        { book.text } - Read by { book.count } people.
        <button onClick={ () => dispatch({ type: 'ADD_COUNT', book }) }>Add reader</button>
      </div>
    );
  });

  return (
    <div>
      <Title title={settings.TITLE} />
      { bookNodes }
    </div>
  );
};

function mapStateToProps (state) {
  const { books } = state;
  return { books };
}

// Connect props to component
export default connect(mapStateToProps)(App);
