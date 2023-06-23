import { createContext, useContext, useState } from "react";
import { books } from "../db";

const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);

export default function DataContextProvider({ children }) {
  const [booksData, setBooksData] = useState(books);

  const reading = booksData.filter(({ category }) => category === "reading");
  const read = booksData.filter(({ category }) => category === "read");
  const toBeRead = booksData.filter(({ category }) => category === "tbr");

  const handleBooks = (id, category) => {
    const updatedBooks = booksData.reduce(
      (acc, curr) =>
        curr.id === id
          ? [...acc, { ...curr, category: category }]
          : [...acc, curr],
      []
    );
    console.log(updatedBooks);
    setBooksData(updatedBooks);
  };

  const values = {
    booksData,
    reading,
    read,
    toBeRead,
    booksData,
    setBooksData,
    handleBooks,
  };
  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
}
