import React, {ChangeEvent, useCallback} from "react";
import styles from './DropdownBody.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from "../../redux/store";
import {addLanguageAC, removeLanguageAC, searchLanguagesAC, selectedLanguagesAC} from "../../redux/language-reducer";
import {LanguageCard} from "./LanguageCard/LanguageCard";


export const DropdownBody = React.memo(function () {
    const dispatch = useDispatch()
    //
    const isShow = useSelector<AppRootState, boolean>(state => state.UI.isShow)
    const language = useSelector((state: AppRootState) => state.languages.languages)
    const selectedLanguages = useSelector((state: AppRootState) => state.languages.selectedLanguages)
    const searchTerm = useSelector<AppRootState, string>(state => state.languages.searchTerm)


    // dispatch functions
    const selectToggler = useCallback(
        (ID: string, isSelect: boolean) => {
            if (isSelect) {
                dispatch(addLanguageAC(ID))
            } else {
                dispatch(removeLanguageAC(ID))
            }
        },
        [dispatch],
    );

    const searchLanguages = useCallback(
        (searchTerm: string) => {
            dispatch(searchLanguagesAC(searchTerm))
        },
        [dispatch],
    );


    const selectedLang = useCallback(
        () => {
            dispatch(selectedLanguagesAC())
        },
        [dispatch],
    );

    const mappedLanguages = language.map(lang => {
        selectedLang()

        return (
            <LanguageCard key={lang.id}
                          id={lang.id}
                          picture={lang.picture}
                          onChange={selectToggler}
                          lang={lang.lang}
                          isSelect={Boolean(selectedLanguages[lang.id])}/>
        );
    });
    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchTerm = e.currentTarget.value
        searchLanguages(searchTerm);
    };

    if (!isShow) {
        return null
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    placeholder="Поиск"
                />
            </div>
            {mappedLanguages}
        </div>
    );
})