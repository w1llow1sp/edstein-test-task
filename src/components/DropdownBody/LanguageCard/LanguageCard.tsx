import React, { ChangeEvent, useCallback , memo} from 'react';
import styles from './LanguageCard.module.scss';
import Checkbox from '../../UI/Checkbox/Checkbox';

/**
 * LanguageCard.tsx
 *
 * В этом файле содержится компонент React под названием LanguageCard.
 * Он отображает карточку с информацией о языке, включая изображение, название языка и флажок для выбора.
 * Также предоставляется функция обратного вызова для обработки изменений состояния чекбокса.
 */
export type LanguageCardPropsType = {
  id: string;
  picture: string;
  lang: string;
  isSelect: boolean;
  onChange: (ID: string, isSelect: boolean) => void;
};
/**
 * Компонент LanguageCard
 *
 * @param lang - объект типа LanguageCardPropsType, содержащий информацию о языке
 * @returns JSX-элемент, представляющий компонент LanguageCard
 */
export const LanguageCard = memo(({ id, picture, lang, isSelect, onChange }: LanguageCardPropsType) => {
  /**
   * Функция для обработки переключения чекбокса
   *
   * @param e - объект типа ChangeEvent<HTMLInputElement>, представляющий событие изменения флажка
   */
  const inputToggler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    onChange(id, e.currentTarget.checked);
  }, [id, onChange]);

  return (
    <div className={styles.languageCardWrapper}>
      <div key={id} className={styles.languageCard}>
        <div className={styles.languageCard__section}>
          <div className={styles.languageCard__section__img}>
            <img src={picture} alt={lang} />
          </div>
          <div className={styles.languageCard__section__info}>
            <label htmlFor={id}>{lang}</label>
          </div>
        </div>

        <Checkbox
          id={id}
          checked={isSelect}
          callback={inputToggler}
        />

      </div>
    </div>
  );
});
