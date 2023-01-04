import { useInfiniteQuery } from 'react-query';

export const useFetchMovieAPI = (key, fn, select) => {
  const query = useInfiniteQuery({
    queryKey: key,
    queryFn: ({ pageParam = 1 }) => fn(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < lastPage.total_pages) {
        return allPages.length + 1;
      }
    },
    select,
  });

  return query;
};
