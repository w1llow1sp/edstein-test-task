import React, {ChangeEvent, useCallback} from 'react';
import styles from './LanguageCard.module.scss'
import Checkbox from "../../UI/Checkbox/Checkbox";
export type LanguageCardPropsType = {
    id: string,
    picture: string
    lang: string
    isSelect: boolean
    onChange:(ID: string, isSelect: boolean) => void
}


export const LanguageCard = React.memo((lang:LanguageCardPropsType) => {

    const inputToggler = (e: ChangeEvent<HTMLInputElement>) => {
        lang.onChange(lang.id, e.currentTarget.checked);
    };

    return (
        <div className={styles.languageCardWrapper}>
            <div key={lang.id} className={styles.languageCard}>
                <div className={styles.languageCard__section}>
                    <div className={styles.languageCard__section__img}>
                        <img src={lang.picture} alt={lang.lang} />
                    </div>
                    <div className={styles.languageCard__section__info}>
                        <label htmlFor={lang.id}>{lang.lang}</label>
                    </div>
                </div>

                <Checkbox id={lang.id} checked={lang.isSelect} callback={inputToggler}/>

{/*                <input
                    className={styles.languageCard__checkbox}
                    type="checkbox"
                    checked={lang.isSelect}
                    id={lang.id}
                    onChange={inputToggler} />*/}
            </div>
        </div>
    );
})

