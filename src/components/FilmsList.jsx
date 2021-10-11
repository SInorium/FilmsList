import React from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const FilmsList = ({ films }) => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>title</th>
            <th>year</th>
            <th>rating</th>
            <th>runtime(min)</th>
            <th>genres</th>
            <th>comments</th>
          </tr>
        </thead>
        <tbody>
          {films.map((film) => (
            <tr key={film.id}>
              <td>{film.title}</td>
              <td>{film.year}</td>
              <td>{film.rating}</td>
              <td>{film.runtime}</td>
              <td>{film.genres?.join(", ")}</td>

              <td>
                <Link to={`/${film.slug}`}>comments</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default FilmsList;
