import React, { ChangeEvent } from 'react';
import  styles from './Checkbox.module.scss';

export type CheckboxPropsType = {
  checked: boolean;
  id: string;
  callback: (e: ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = ({ id, checked, callback }: CheckboxPropsType) => {
  return (

      <div className={styles.checkbox}>
          <input id={id} checked={checked} onChange={callback} type='checkbox' className={styles.checkbox__input} />
          <label htmlFor={id} className={styles.checkbox__label}>
              <div className={styles.checkbox__flip}>
                  <div className={styles.checkbox__front}></div>
                  <div className={styles.checkbox__back}>
                      <svg width='16' height='14' viewBox='0 0 16 14'>
                          <path d='M2 8.5L6 12.5L14 1.5'></path>
                      </svg>
                  </div>
              </div>
          </label>
      </div>
  );
};

export default Checkbox;
