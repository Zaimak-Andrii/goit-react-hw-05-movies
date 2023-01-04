import { uniqBy } from 'lodash';
import TheMovieAPI from 'services/theMovieAPI';
import { useFetchMovieAPI } from '../../hooks/useFetchMovieAPI';
import Loader from 'components/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { LoadMoreButton } from './Home.styled';

export default function Home() {
  const {
    isFetching,
    isError,
    error,
    data: moviesList,
    hasNextPage,
    fetchNextPage,
  } = useFetchMovieAPI(
    'thrending-by-day',
    TheMovieAPI.getThrendingByDay,
    querySelectFn
  );

  function querySelectFn(data) {
    return uniqBy(
      data.pages.reduce((acc, page) => [...acc, ...page.results], []),
      'id'
    );
  }

  if (isError) {
    // TODO: Зробити окремий компонент
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      {moviesList && <MoviesList list={moviesList} />}

      {isFetching && <Loader mt={3} />}

      {!isFetching && hasNextPage && (
        // TODO: Винейсти в окремий компонент
        <LoadMoreButton onClick={fetchNextPage}>Load more</LoadMoreButton>
      )}
    </>
  );
}
