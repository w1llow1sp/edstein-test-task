import React, {ChangeEvent, useCallback, useEffect, useMemo, useState} from 'react';
import styles from './DropdownBody.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../redux/store';
import {
    addLanguageAC,
    removeLanguageAC,
    searchLanguagesAC,
    selectedLanguagesAC,
} from '../../redux/language-reducer';
import {LanguageCard} from './LanguageCard/LanguageCard';


export const DropdownBody = React.memo(function () {
    // Использование useDispatch для доступа к dispatch
    const dispatch = useDispatch();

    //Использование редьюсера selectedLanguagesAC . Возвращаем текущее состояние и выбранные языки
    const selectedLang = useCallback(() => {
        dispatch(selectedLanguagesAC());
    }, [dispatch]);



    useEffect(()=>{
        selectedLang();
    },[])
    // Использование useSelector для выбора searchTerm из store. Является поисковой строкой для языков.
    const searchTerm = useSelector<AppRootState, string>(
        (state) => state.languages.searchTerm,
    );
    {/*Достаем даннные из store. Да, их здесь много*/}

    // Использование useSelector для выбора isShow из store. Он нужен для отображдения компоненты DropdownBody
    const isShow = useSelector<AppRootState, boolean>((state) => state.UI.isShow);

    // Использование useSelector для выбора language из store. Мы передаем массив
    // языков для рендера карточек
    const language = useSelector(
        (state: AppRootState) => state.languages.languages,
    );

    // Использование useSelector для выбора selectedLanguages из store.
    const selectedLanguages = useSelector(
        (state: AppRootState) => state.languages.selectedLanguages,
    );

    {/*dispatch functions*/}

    // Функция, которая позволяет смотреть по состонию чекбокса,выбран язык или нет
    const selectToggler = useCallback(
        (ID: string, isSelect: boolean) => {
            if (isSelect) {
                dispatch(addLanguageAC(ID));
            } else {
                dispatch(removeLanguageAC(ID));
            }
        },
        [dispatch],
    );

    //Использование редьюсера searchLanguagesAC .Фильтрация списка языков по введенному поисковому термину
    const searchLanguages = useCallback(
        (searchTerm: string) => {
            dispatch(searchLanguagesAC(searchTerm));
        },
        [dispatch],
    );




    //Нейминг мне не нравится, но.
    // Мы массив со всеми языками передаем в компоненту, которая отображает каждый
    // язык с чекбоксом. Обернули в хук useMemo чтобы лишних ререндеров у нас не было.
    const mappedLanguages = useMemo(() => language.map((lang) => (
        <LanguageCard
            key={lang.id}
            id={lang.id}
            picture={lang.picture}
            onChange={selectToggler}
            lang={lang.lang}
            isSelect={Boolean(selectedLanguages[lang.id])}
        />
    )), [language, selectToggler, selectedLanguages]);

    // Специальная функция с редьюсером для инпута.
    // Если значение меняется -- то уходит и обоновляется по поисковой строке (searchTerm)


    // Не красивое решение, но иначе много перерисовок. Реализовать хук не вышло :(
    const handleSearchInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            let searchTerm = e.currentTarget.value;
            searchLanguages(searchTerm);
        },
        [searchLanguages],
    );

    //Условный импорт . если у нас isShow === false (то есть не нажимали на кнопку в DropdownHeader,
    //то и компоненту мы не показываем.
    if (!isShow) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchInput}
                    type='search'
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    placeholder='Поиск'
                />
            </div>
            {mappedLanguages}
        </div>
    );
});

//TODO:Мне нравится решение с динамическим поиском, но у нас может быть Debounce, придумаю что-нибудь.
