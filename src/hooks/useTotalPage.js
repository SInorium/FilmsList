import { useMemo } from "react";

export const getTotalPages = (totalCount, limitPosts) => {
  return Math.ceil(totalCount / limitPosts);
};

export const usePagination = (limitPosts) => {
  const pagination = useMemo(() => {
    let pagesArr = [];
    for (let i = 0; i < limitPosts; i++) {
      pagesArr.push(i + 1);
    }
    return pagesArr;
  }, [limitPosts]);
  return pagination;
};
