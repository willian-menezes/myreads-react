import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Shelfs from './Shelfs'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, books, changeShelf } = this.props

    return (
          <li>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{ backgroundImage: `url(${book.imageLinks.thumbnail})`}}>
                </div>
                <Shelfs
                  book={ book }
                  books={ books }
                  changeShelf={changeShelf }
                />
              </div>
              <div className="book-title">{ book.title }</div>
              { book.authors && book.authors.map((author, index) => (
                  <div key={index} className="book-authors">{author}</div>
              ))}
            </div>
          </li>
    )
  }

}

export default Book
