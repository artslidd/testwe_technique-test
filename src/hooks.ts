import { useEffect, useState } from "react";
import { Book, Character } from "./data-types";
import { gotApi } from "./api";
import { getBookImageFromName, getIdFromUrl } from "./utils";

// Here is the main logic of the app

export const useBookWithCharacters = (
  bookId: number
): [Book | null, Character[] | null] => {
  const [book, setBook] = useState<Book | null>(null);
  const [characters, setCharacters] = useState<Character[] | null>(null);

  useEffect(() => {
    const getBooksAndAssociatedCharacters = async () => {
      // First we have to fetch the book
      const fetchedBook = await fetchBook(bookId);
      // Then the characters associated
      const bookCharacters = await fetchCharacters(fetchedBook.povCharacters);
      setBook(fetchedBook);
      setCharacters(bookCharacters);
    }; 

    getBooksAndAssociatedCharacters();
  }, [bookId]);

  return [book, characters];
};

export const useCharacterWithBooks = (
  characterId: number
): [Character | null, Book[] | null] => {
  const [character, setCharacter] = useState<Character | null>(null);
  const [books, setBooks] = useState<Book[] | null>(null);

  useEffect(() => {
    const getCharacterAndAssociatedBooks = async () => {
      // Fetch character we would like to fetch
      const fetchedCharacter = await fetchOneCharacter(characterId);
      // Then the associated books
      const associatedBooks = await fetchBooks(fetchedCharacter.povBooks);
      setCharacter(fetchedCharacter);
      setBooks(associatedBooks);
    };
    getCharacterAndAssociatedBooks();
  }, [characterId]);
  return [character, books];
};

// Book fetcher
const fetchBook = (bookId): Promise<Book> => {
  return gotApi.get<Book>(`/books/${bookId}`).then((response) => {
    const { name, url, povCharacters } = response.data;
    const imageSrc = getBookImageFromName(name);

    return { name, imageSrc, url, bookId, povCharacters };
  });
};

// One character fetcher
const fetchOneCharacter = (characterId: number): Promise<Character> => {
  return gotApi
    .get<Character>(`/characters/${characterId}`)
    .then((response) => {
      const characterId = getIdFromUrl(response.data.url);
      return { ...response.data, characterId } as Character;
    });
};

// Multiple characters fetcher
const fetchCharacters = async (characterUrls: string[]) => {
  const bookCharacters = [] as Character[];

  for (let i = 0; i < characterUrls.length; i++) {
    const characterId = getIdFromUrl(characterUrls[i]);
    const character = await fetchOneCharacter(characterId);
    bookCharacters.push(character);
  }
  return bookCharacters;
};

// Multiple books fetcher
const fetchBooks = async (booksUrl: string[]) => {
  const bookList = [] as Book[];
  for (let i = 0; i < booksUrl.length; i++) {
    const bookId = getIdFromUrl(booksUrl[i]);
    const book = await fetchBook(bookId);
    bookList.push(book);
  }
  return bookList;
};
