import React from "react";
import { usePagination } from "../hooks/useTotalPage";
import { Pagination } from "react-bootstrap";

const MyPagination = ({ limitPosts, page, changePage }) => {
  const pagesArr = usePagination(limitPosts);

  return (
    <Pagination size="sm" style={{ justifyContent: "center" }}>
      {pagesArr.map((v) => (
        <Pagination.Item
          active={v === page}
          onClick={() => changePage(v)}
          key={v}
        >
          {v}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default MyPagination;
