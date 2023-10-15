import React, { useState } from 'react';
import './App.css';
import './index.css';
import BookForm from './BookForm';
import AuthorForm from './AuthorForm';

const initialBooks = [
  {
    "name": "The Catcher in the Rye",
    "isbn_number": 1234567890,
    "published_date": "1951-07-16",
    "author": {
      "name": "J.D. Salinger",
      "dob": "1919-01-01",
      "description": "American writer known for his novel 'The Catcher in the Rye'"
    }
  },
  {
    "name": "To Kill a Mockingbird",
    "isbn_number": 2345678901,
    "published_date": "1960-07-11",
    "author": {
      "name": "Harper Lee",
      "dob": "1926-04-28",
      "description": "American novelist best known for her novel 'To Kill a Mockingbird'"
    }
  },
  {
    "name": "1984",
    "isbn_number": 3456789012,
    "published_date": "1949-06-08",
    "author": {
      "name": "George Orwell",
      "dob": "1903-06-25",
      "description": "English novelist, essayist, journalist, and critic known for his dystopian novel '1984'"
    }
  },
  {
    "name": "Pride and Prejudice",
    "isbn_number": 4567890123,
    "published_date": "1813-01-28",
    "author": {
      "name": "Jane Austen",
      "dob": "1775-12-16",
      "description": "English novelist known for her romantic fiction set among the British landed gentry"
    }
  },
  {
    "name": "The Great Gatsby",
    "isbn_number": 5678901234,
    "published_date": "1925-04-10",
    "author": {
      "name": "F. Scott Fitzgerald",
      "dob": "1896-09-24",
      "description": "American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century"
    }
  },
  {
    "name": "Moby-Dick",
    "isbn_number": 6789012345,
    "published_date": "1851-10-18",
    "author": {
      "name": "Herman Melville",
      "dob": "1819-08-01",
      "description": "American novelist, short story writer, and poet of the American Renaissance period"
    }
  },
  {
    "name": "One Hundred Years of Solitude",
    "isbn_number": 7890123456,
    "published_date": "1967-05-30",
    "author": {
      "name": "Gabriel García Márquez",
      "dob": "1927-03-06",
      "description": "Colombian novelist and Nobel Prize laureate, best known for his novel 'One Hundred Years of Solitude'"
    }
  },
  {
    "name": "The Hobbit",
    "isbn_number": 8901234567,
    "published_date": "1937-09-21",
    "author": {
      "name": "J.R.R. Tolkien",
      "dob": "1892-01-03",
      "description": "English writer, poet, philologist, and university professor, best known as the author of 'The Hobbit' and 'The Lord of the Rings'"
    }
  },
  {
    "name": "Crime and Punishment",
    "isbn_number": 9012345678,
    "published_date": "1866-11-14",
    "author": {
      "name": "Fyodor Dostoevsky",
      "dob": "1821-11-11",
      "description": "Russian novelist, philosopher, and essayist, best known for his novel 'Crime and Punishment'"
    }
  },
  {
    "name": "Brave New World",
    "isbn_number": 9123456789,
    "published_date": "1932-10-27",
    "author": {
      "name": "Aldous Huxley",
      "dob": "1894-07-26",
      "description": "English writer and philosopher, best known for his dystopian novel 'Brave New World'"
    }
  }];
const initialAuthors = [
  {
    
      "name": "J.D. Salinger",
      "dob": "1919-01-01",
      "description": "American writer known for his novel 'The Catcher in the Rye'"
    
  },
  {
    
      "name": "Harper Lee",
      "dob": "1926-04-28",
      "description": "American novelist best known for her novel 'To Kill a Mockingbird'"
    
  },
  {
    
      "name": "George Orwell",
      "dob": "1903-06-25",
      "description": "English novelist, essayist, journalist, and critic known for his dystopian novel '1984'"
    
  },
  {
    
      "name": "Jane Austen",
      "dob": "1775-12-16",
      "description": "English novelist known for her romantic fiction set among the British landed gentry"
    
  },
  {
    
      "name": "F. Scott Fitzgerald",
      "dob": "1896-09-24",
      "description": "American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century"
    
  },
  {
    
      "name": "Herman Melville",
      "dob": "1819-08-01",
      "description": "American novelist, short story writer, and poet of the American Renaissance period"
    
  },
  {
    
      "name": "Gabriel García Márquez",
      "dob": "1927-03-06",
      "description": "Colombian novelist and Nobel Prize laureate, best known for his novel 'One Hundred Years of Solitude'"
    
  },
  {
    
      "name": "J.R.R. Tolkien",
      "dob": "1892-01-03",
      "description": "English writer, poet, philologist, and university professor, best known as the author of 'The Hobbit' and 'The Lord of the Rings'"
    
  },
  {
    
      "name": "Fyodor Dostoevsky",
      "dob": "1821-11-11",
      "description": "Russian novelist, philosopher, and essayist, best known for his novel 'Crime and Punishment'"
    
  },
  {
    
      "name": "Aldous Huxley",
      "dob": "1894-07-26",
      "description": "English writer and philosopher, best known for his dystopian novel 'Brave New World'"
    
  }
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [authors, setAuthors] = useState(initialAuthors);
  const [selectedBookIndex, setSelectedBookIndex] = useState(null);
  const [selectedAuthorIndex, setSelectedAuthorIndex] = useState(null);

  const addBook = (book) => {
    setBooks([...books, book]);
  };

  const addAuthor = (author) => {
    setAuthors([...authors, author]);
  };

  const editBook = (index, book) => {
    const updatedBooks = [...books];
    updatedBooks[index] = book;
    setBooks(updatedBooks);
    setSelectedBookIndex(null);
  };

  const deleteBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
    setSelectedBookIndex(null);
  };

  const editAuthor = (index, author) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = author;
    setAuthors(updatedAuthors);
    setSelectedAuthorIndex(null);
  };

  const deleteAuthor = (index) => {
    const updatedAuthors = [...authors];
    updatedAuthors.splice(index, 1);
    setAuthors(updatedAuthors);
    setSelectedAuthorIndex(null);
  };

  return (
    <div className="App">
    <div className="form-container">
        <BookForm
          onSubmit={selectedBookIndex !== null ? (book) => editBook(selectedBookIndex, book) : addBook}
          initialData={selectedBookIndex !== null ? books[selectedBookIndex] : null}
        />
        <AuthorForm
          onSubmit={selectedAuthorIndex !== null ? (author) => editAuthor(selectedAuthorIndex, author) : addAuthor}
          initialData={selectedAuthorIndex !== null ? authors[selectedAuthorIndex] : null}
        />
      </div>
    <div className="data-container">
        <h2>Books</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
             Title: {book.name}<br/>
              Author : {book.author.name}<br/>
              Published on: {book.published_date}<br/>
              ISBN: {book.isbn_number}<br/>
              <button onClick={() => setSelectedBookIndex(index)}>Edit</button>
              <button onClick={() => deleteBook(index)}>Delete</button>
            </li>
          ))}
        </ul>
        </div>
      <div className="data-container">
        <h2>Authors</h2>
        <ul>
          {authors.map((author, index) => (
            <li key={index}>
             Author: {author.name}<br/>
             DOB: {author.dob}<br/>
             Description: {author.description}<br/>
              <button onClick={() => setSelectedAuthorIndex(index)}>Edit</button>
              <button onClick={() => deleteAuthor(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;