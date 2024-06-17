import './CardsList.css'
import FilmCard from '../FilmCard/FilmCard.tsx'
import filmsData from '../../data/films.json'
import { Film } from '../../types/film.ts'



type CardsListProps = {
  films: Film[];
};

export default function CardsList({ films }: CardsListProps) {
  return (
    <div>
      {filmsData.films.map((film) => (
        <FilmCard film={film} key={film.id} />
      ))}
    </div>
  );
}