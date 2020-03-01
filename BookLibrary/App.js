/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import AppNavigator from './routes/AppNavigator';

export default class App extends React.Component {

  //TODO create the state object with an authors property set to an empty array
  constructor(props) {
    super(props);

    this.state={
      authors: [],
    };
  }

  //TODO Define the addAuthor function 
  // it will need to update the state to add a new author to the state
  addAuthor = author => {
    this.setState({
      authors: [...this.state.authors, author]
    })
  }

  //TODO define the addBook function. It takes an author and an index and 
  // adds a new book title to the books property of the author
  addBook = (title, author) => {
    author.books.push(title);
    this.setState({
      author: [...this.state.authors]
    })
  }
  
  render() {
    return (
      <AppNavigator
        screenProps={{
          authors: this.state.authors,
          addAuthor: this.addAuthor,
          addBook: this.addBook
        }}
      />
    );
  }
}
