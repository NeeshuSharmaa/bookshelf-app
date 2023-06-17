import "./Home.css";

import Book from "../../components/bookCard/book";

import { useDataContext } from "../../context/DataContext";

export default function Home() {
  const { reading, read, toBeRead } = useDataContext();

  return (
    <div className="home-page">
      <div className="reading">
        <h2>Currently Reading</h2>

        <div className="books">
          {reading.map((book) => (
            <Book {...book} key={book.id} />
          ))}
        </div>
      </div>
      <div className="read">
        <h2>Already Read</h2>

        <div className="books">
          {read.map((book) => (
            <Book {...book} key={book.id} />
          ))}
        </div>
      </div>
      <div className="tbr">
        <h2>Want to Read</h2>

        <div className="books">
          {toBeRead.map((book) => (
            <Book {...book} key={book.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
