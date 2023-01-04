import { Outlet, useLoaderData } from 'react-router-dom';

export default function MovieDetails() {
  const data = useLoaderData();

  console.log(data);

  return (
    <>
      <h2>Movie Details</h2>
      <Outlet />
    </>
  );
}
