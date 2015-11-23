import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  addReader (book) {
    console.log('test');
    console.log(book);
    // this.props.dispatch({
    //   type: 'ADD_COUNT',
    //   book,
    // });
  }

  render () {
    return <button onClick={this.addReader.bind(this)}>Test</button>;
    // const bookNodes = this.props.books.items.map(item => {
    //   return <div>{ item.text } - Read by { item.count } people. <button onClick={this.addReader.bind(this)}>Add reader</button></div>;
    // }  );
    //
    // return <div>{ bookNodes }</div>;
  }
}

function mapStateToProps (state) {
  const { books } = state;
  return { books };
}

// Connect props to component
export default connect(mapStateToProps)(App);
