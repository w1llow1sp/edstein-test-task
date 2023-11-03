import { v1 } from 'uuid';
import RU from '../assets/flags/RU.png';
import EN from '../assets/flags/EN.png';
import EN1 from '../assets/flags/EN1.png';
import DE from '../assets/flags/DE.png';
import IT from '../assets/flags/IT.png';
import PL from '../assets/flags/PL.png';

export const LANGUAGES = [
  { id: v1(), picture: RU, lang: 'Русский' },
  { id: v1(), picture: EN, lang: 'Английский' },
  { id: v1(), picture: EN1, lang: 'Английский' },
  { id: v1(), picture: DE, lang: 'Немецкий' },
  { id: v1(), picture: IT, lang: 'Итальянский' },
  { id: v1(), picture: PL, lang: 'Польский' },
];
