import React, { useState, useEffect } from "react";
import { useFetching } from "./hooks/useFetching";
import { getTotalPages } from "./hooks/useTotalPage";
import FilmsList from "./components/FilmsList";
import Pagination from "./elements/Pagination";
import FilmsService from "./api/FilmsService";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Film from "./components/Film";
import { Spinner } from "react-bootstrap";

function App() {
  const [films, setFilms] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [limitFilms, setLimitFilms] = useState(10);

  const [fetchFilms, isLoading, filmsError] = useFetching(async () => {
    const response = await FilmsService.getAll(limitFilms, page);

    setFilms(response.data.data.movies);

    const totalCount = response.data.data.movie_count;
    setTotalPages(getTotalPages(totalCount, limitFilms));
  });

  useEffect(() => {
    fetchFilms();
  }, [page]);

  const changePage = (page) => {
    setPage(page);
  };
  return (
    <Router>
      <Route
        path={"/"}
        render={() => (
          <div style={{ padding: "0.5rem" }}>
            {isLoading ? (
              <Spinner
                style={{ position: "relative", left: "50%" }}
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : (
              <>
                <FilmsList films={films} />
                <Pagination
                  changePage={changePage}
                  limitPosts={limitFilms}
                  page={page}
                />
              </>
            )}
          </div>
        )}
        exact
      />
      <Route render={() => <Film films={films} />} path={"/:slug"} exact />
    </Router>
  );
}

export default App;
