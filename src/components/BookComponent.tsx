import React from "react";
import { Book } from "../data-types";
import { Link } from "react-router-dom";

// Render the image and the title of the book
const BookComponent = ({ imageSrc, name, bookId }: Book) => {
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <img src={imageSrc} width={250} alt={name} />
      </Link>
      <div>{name}</div>
    </div>
  );
};

export { BookComponent };
