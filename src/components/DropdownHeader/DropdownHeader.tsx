import React, {FC, memo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {VisibilityTogglerAC} from '../../redux/ui-reducer';
import {AppRootState} from '../../redux/store';
import styles from './DropdownHeader.module.scss';
import {DropdownBubble} from "./DropdownBubble/DropdownBubble";
// Определение интерфейса Language
interface Language {
    lang: string;
    id: string;
}
// Создание функционального компонента DropdownHeader
export const DropdownHeader: FC = memo(() => {
    // Использование useDispatch для доступа к dispatch
    const dispatch = useDispatch();
    // Использование useCallback для создания memoized версии функции visibilityToggler
    const visibilityToggler = useCallback(() => {
        dispatch(VisibilityTogglerAC());
    }, [dispatch]);
    // Использование useSelector для выбора selectedLanguages из store
    // Использование useSelector для выбора isIconFlipped из store
    const isIconFlipped = useSelector<AppRootState, boolean>(
        (state) => state.UI.isIconFlipped,
    );


    return (
        <div className={styles.dropdownHeader}>
            <h2 className={styles.dropdownHeader__header}>Язык</h2>
            <div className={styles.dropdownHeader__sectionContainer}>
                <div className={styles.dropdownHeader__leftContainer}>{<DropdownBubble/>}</div>
                <div className={styles.dropdownHeader__rightContainer}>
                    <button onClick={visibilityToggler} className={styles.dropdownHeader__button}>
                        <div
                            className={`${styles.dropdownHeader__icon} ${
                                isIconFlipped ? styles.dropdownHeader__icon__flipped : ''
                            }`}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
});

export default DropdownHeader;
