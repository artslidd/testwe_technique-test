import React from "react";
import "./book.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {useBookWithCharacters} from '../../hooks'


const BookPage = () => {
  const { bookId } = useParams();

  // Use custom hook to get back the book and characters associated
  const [book, characters] = useBookWithCharacters(bookId);

  return (
    book && characters && (
      <div className="Book">
        <header className="Book-header">
          <img src={book.imageSrc} alt={book.name} width={200} />
          <h2>
            Livre numéro {bookId} : {book.name}
          </h2>
          <h3>Personnages principaux du livre</h3>
          <ul className="character-list">
            {characters.map((character, i) => (
              <Link key={i} to={`/characters/${character.characterId}`}><li>{character.name}</li></Link>
            ))}
          </ul>
        <Link to="/">Menu</Link>
        </header>
      </div>
    )
  );
};

export { BookPage };
