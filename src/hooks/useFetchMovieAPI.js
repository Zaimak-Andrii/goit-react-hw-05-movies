import { useInfiniteQuery } from 'react-query';

export const useFetchMovieAPI = (key, fn, select, enabled = true) => {
  const query = useInfiniteQuery({
    queryKey: key,
    queryFn: ({ pageParam = 1 }) => fn(pageParam),
    enabled: enabled,
    getNextPageParam: (lastPage, allPages) => {
      if (allPages.length < lastPage.total_pages) {
        return allPages.length + 1;
      }
    },
    select,
  });

  return query;
};
