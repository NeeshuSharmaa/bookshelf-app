import { useState } from "react";
import { useDataContext } from "../../context/DataContext";
import Book from "../../components/bookCard/book";
import "./Search.css";

export default function Search() {
  const [search, setSearch] = useState();
  const { booksData } = useDataContext();

  const searchedBooks = booksData.filter(
    ({ name, author }) =>
      name.toLowerCase().includes(search?.toLowerCase()) ||
      author.toLowerCase().includes(search?.toLowerCase())
  );
  console.log(searchedBooks);
  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search here"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="books">
        {searchedBooks.map((book) => (
          <Book key={book.id} {...book} />
        ))}
      </div>
    </div>
  );
}
