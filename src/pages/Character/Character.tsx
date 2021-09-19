import React from "react";
import "./character.css";
import { useParams } from "react-router-dom";
import { useCharacterWithBooks } from "../../hooks";
import { Link } from "react-router-dom";

const CharacterPage = () => {
  const { characterId } = useParams();

  // Use custom hook to get back the character and books associated
  const [character, books] = useCharacterWithBooks(characterId);

  return (
    character &&
    books && (
      <div className="Character">
        <header className="Character-header">
          <h1>
            {character.name} (
            {character.died ? `Mort ${character.died}` : "Encore vivant"})
          </h1>
          {character.playedBy[0] && <h3>Joué par {character.playedBy[0]}</h3>}
          <div>
            <span>Genre : {character.gender}</span>
          </div>
          <div>
            <ul className="list">
              Titres:{" "}
              {character.titles.length && character.titles[0] !== "" ? (
                character.titles.map((title, i) => <li key={i}>{title}</li>)
              ) : (
                <li>Aucun titre</li>
              )}
            </ul>
            <ul className="list">
              Présent dans les livres:
              {books.map((book, i) => (
                <Link to={`/books/${book.bookId}`}>
                  <li key={i}>{book.name}</li>
                </Link>
              ))}
            </ul>
          </div>
          <Link to="/">Menu</Link>
        </header>
      </div>
    )
  );
};

export { CharacterPage };
