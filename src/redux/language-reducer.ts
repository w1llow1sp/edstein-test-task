// Импорт констант языков
import {LANGUAGES} from '../const';

// Определение типа языка с id, изображением и названием
export type LanguagesType = {
    id: string;
    picture: string;
    lang: string;
};

// Определение начального состояния языков
export type InitialStateLangType = {
    languages: Array<LanguagesType>;
    searchTerm: string;
    selectedLanguages: Record<LanguagesType['id'], LanguagesType>;
};

// Определение типа действий языков
export type ActionsLangType =
    | ReturnType<typeof addLanguageAC>
    | ReturnType<typeof removeLanguageAC>
    | ReturnType<typeof selectedLanguagesAC>
    | ReturnType<typeof searchLanguagesAC>
    | ReturnType<typeof setSearchTermAC>;

// Определение начального состояния
const initialState: InitialStateLangType = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {},
};

// Определение редьюсера языков
export const languageReducer = (
    state: InitialStateLangType = initialState,
    action: ActionsLangType,
): InitialStateLangType => {
    switch (action.type) {
        case 'ADD_LANGUAGE':
            // Поиск выбранного языка в списке языков
            const selectedLanguage = [...state.languages].find(
                ({id}) => id === action.ID,
            );
            // Если язык не найден, возвращаем текущее состояние
            if (!selectedLanguage) {
                return state;
            }
            // Добавление выбранного языка в список выбранных языков
            return {
                ...state,
                selectedLanguages: {
                    ...state.selectedLanguages,
                    [action.ID]: {...selectedLanguage},
                },
            };
        case 'REMOVE_LANGUAGE':
            // Удаление выбранного языка из списка выбранных языков
            const newSelectedLanguages = {...state.selectedLanguages};

            delete newSelectedLanguages[action.ID];

            return {
                ...state,
                selectedLanguages: {...newSelectedLanguages},
            };
        case 'SEARCH_LANGUAGES':
            // Фильтрация списка языков по введенному поисковому термину
            return {
                ...state,
                searchTerm: action.searchTerm,
                languages: LANGUAGES.filter((lang) =>
                    lang.lang.toLowerCase().includes(action.searchTerm.toLowerCase()),
                ),
            };

        case 'SELECTED_LANG':
            // Возвращаем текущее состояние
            return {
                ...state,
            };
        case "SET_SEARCH_TERM":
            return {
                ...state,
                searchTerm: action.payload,
            };
        default:
            // Возвращаем текущее состояние по умолчанию
            return state;
    }
};

// Определение действия добавления языка
export const addLanguageAC = (ID: string) => {
    return {
        type: 'ADD_LANGUAGE',
        ID,
    } as const;
};

// Определение действия удаления языка
export const removeLanguageAC = (ID: string) => {
    return {
        type: 'REMOVE_LANGUAGE',
        ID,
    } as const;
};

// Определение действия поиска языков
export const searchLanguagesAC = (searchTerm: string) => {
    return {
        type: 'SEARCH_LANGUAGES',
        searchTerm,
    } as const;
};

// Определение действия выбора языков
export const selectedLanguagesAC = () => {
    return {
        type: 'SELECTED_LANG',
    } as const;
};

export const setSearchTermAC = (newSearchTerm:string) => {
    return {
        type: 'SET_SEARCH_TERM',
        payload: newSearchTerm,
    } as const
}