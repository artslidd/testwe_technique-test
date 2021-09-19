export type Character = {
    name: string;
    imageSrc: string;
    url: string;
    characterId: number;
    titles: string[]
    gender: string;
    died: string;
    povBooks: string[];
    playedBy: string[];
}

// Unused but could be used if we were building a more complex app
export type House = {
    name: string;
    membersUrl: string[];
    words: string;
    houseId: number;
    url: string;
}

export type Book = { 
    name: string;
    imageSrc: string;
    url: string;
    bookId: number;
    povCharacters: string[]
 }