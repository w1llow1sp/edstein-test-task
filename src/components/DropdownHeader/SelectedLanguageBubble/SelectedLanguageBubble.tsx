import React, {FC, useCallback, useMemo} from 'react';
import styles from './SelectedLanguageBubble.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from '../../../redux/store';
import { removeLanguageAC } from '../../../redux/language-reducer';

// Интерфейс для описания языка
interface Language {
  lang: string;
  id: string;
}

export const SelectedLanguageBubble: FC = () => {
  // Использование useDispatch для доступа к dispatch
  const dispatch = useDispatch();

  // Использование useSelector для выбора selectedLanguages из store
  const selectedLanguages = useSelector(
    (state: AppRootState) => state.languages.selectedLanguages,
  ) as Record<string, Language>;

  // Создание функции для удаления языка
    const handleLanguageRemove = useCallback((ID: string) => () => {
        dispatch(removeLanguageAC(ID));
    }, [dispatch]);

  // Использование useMemo для создания массива languageCards
  const languageCards = useMemo(
    () =>
      Object.values(selectedLanguages).map(({ lang, id }) => (
        <span key={id} className={styles.languageCard}>
          {lang}
          <button
            onClick={handleLanguageRemove(id)}
            className={styles.languageCard__removeButton}
          >
            <span className={styles.languageCard__removeButton__removeCross}>
              {' '}
              X{' '}
            </span>
          </button>
        </span>
      )),
    [selectedLanguages, handleLanguageRemove],
  );

  return <>{languageCards}</>;
};
