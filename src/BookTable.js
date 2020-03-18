import React, { Component } from "react";

import BookRow from "./BookRow";

const BookTable = ({ books }) => {
  const bookRows = books.map(book => <BookRow key={book.title} book={book} />);
  return (
    <table className="mt-3 table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Authors</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>{bookRows}</tbody>
    </table>
  );
};

export default BookTable;
