import { GET_FILMS } from "@/graphql/queries";
import { useQuery } from "@apollo/client";
import Card from "../atoms/Card";

type Props = {
  search: string;
}

function CardList({ search }: Props) {
  const { data, loading, error } = useQuery(GET_FILMS);
  if (loading)
    return (
      <p className="text-white flex items-center justify-center">
        Loading ....
      </p>
    );
  if (error)
    return (
      <p className="text-white flex items-center justify-center">
        Oops! Something went wrong ....
      </p>
    );

  let filteredFilmData = data?.allFilms?.films;

  if (search) {
    filteredFilmData = data?.allFilms?.films.filter((film: { title: string }) =>
      film.title.toLowerCase().includes(search.toLowerCase())
    );
  }
  return (
    <ul className="card-section">
      {filteredFilmData &&
        filteredFilmData.map((film: { title: string; image: string }) => (
          <li key={film.title}>
            <Card image={film.image} heading={film.title} />
          </li>
        ))}
    </ul>
  );
}

export default CardList;
