import { App } from 'components/App';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import TheMovieAPI from '../services/theMovieAPI';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetails'));

export default createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'movies',
          element: <Movies />,
        },
        {
          path: 'movies/:movieId',
          element: <MovieDetailsPage />,
          loader: async ({ params }) => {
            return TheMovieAPI.getMovieDetailsById(params.movieId);
          },
          children: [
            {
              path: 'cast',
              element: <Cast />,
            },
            {
              path: 'reviews',
              element: <Reviews />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/goit-react-hw-05-movies',
  }
);
