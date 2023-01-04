import { Card, CardActionArea, CardMedia, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import config from 'config';
import { MoviesListPropTypes } from './MoviesList.props';

export default function MoviesList({ list }) {
  const location = useLocation();

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 15 }}
    >
      {list.map(({ id, poster_path, title }) => (
        <Grid item xs={2} sm={2} md={3} key={id}>
          <Card sx={{ maxWidth: 250 }}>
            <CardActionArea
              component={Link}
              to={`movies/${id}`}
              state={{ from: location }}
            >
              <CardMedia
                component="img"
                height="250"
                image={`${config.urls.theMovies.image.poster}${poster_path}`}
                alt={title}
              />
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

MoviesList.propTypes = MoviesListPropTypes;
