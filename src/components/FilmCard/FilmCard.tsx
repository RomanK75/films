import './FilmCard.css'
import Stars from '../Stars/Stars.tsx'
import { Film } from '../../types/film.ts'

interface FilmCardProps {
  film: Film; // Используем тип Film для пропса film
}

const FilmCard: React.FC<FilmCardProps> = ({ film }) => {
  const starsCount: number = Math.floor(film.rating); // Округляем рейтинг до целого числа
  return (
    <div>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <Stars count={starsCount}/>
    </div>
  );
};

export default FilmCard;