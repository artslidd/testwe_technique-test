import React, { useState, useEffect } from 'react';
import './App.css';
import { gotApi } from '../../api';
import { Book } from '../../data-types'
import { getBookImageFromName, getIdFromUrl } from '../../utils'
import { BookComponent } from '../../components/BookComponent'

const App = () => {

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = () => {
      gotApi.get<Book[]>('/books').then((response) => {
        const rawBooks = response.data;
        const usableBooks = rawBooks.map(({name, url} : {name: string; url: string;}) => {
          const bookId = getIdFromUrl(url) 
          return {
              name, bookId, imageSrc: getBookImageFromName(name)
            } as Book
          })
        setBooks(usableBooks);
      })
    }
    fetchBooks()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Bienvenue dans le repertoire officiel de Game of Thrones
        </h1>
        <div className="Books">
          <ul>
            {books.map((book, i) => {
              return <li key={i}>
                <BookComponent {...book} />
                </li>
            })}
            </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
