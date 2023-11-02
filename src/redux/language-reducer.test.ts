import {LANGUAGES} from "../const";
import {
  addLanguageAC,
  languageReducer,
  removeLanguageAC,
  searchLanguagesAC,
  selectedLanguagesAC
} from "./language-reducer";

test('addLanguageAC добавляет выбранный язык в список выбранных языков', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {},
  };

  const selectedLang = LANGUAGES[0].id
  const action = addLanguageAC(selectedLang);
  const newState = languageReducer(initialState, action);

  expect(newState.selectedLanguages[selectedLang]).toBeDefined();
});

test('addLanguageAC возвращает текущее состояние, если язык не найден', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {},
  };
  const action = addLanguageAC('99');
  const newState = languageReducer(initialState, action);

  expect(newState).toEqual(initialState);
});

test('removeLanguageAC удаляет выбранный язык из списка выбранных языков', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {
      '1': { id: '1', picture: 'picture1', lang: 'Language 1' },
      '2': { id: '2', picture: 'picture2', lang: 'Language 2' },
    },
  };
  const action = removeLanguageAC('1');
  const newState = languageReducer(initialState, action);

  expect(newState.selectedLanguages['1']).toBeUndefined();
});

test('removeLanguageAC возвращает текущее состояние, если выбранный язык не найден', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {
      '1': { id: '1', picture: 'picture1', lang: 'Language 1' },
      '2': { id: '2', picture: 'picture2', lang: 'Language 2' },
    },
  };
  const action = removeLanguageAC('99');
  const newState = languageReducer(initialState, action);

  expect(newState).toEqual(initialState);
});

test('searchLanguagesAC фильтрует список языков по введенному поисковому термину', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {},
  };
  const action = searchLanguagesAC('Русский');
  const newState = languageReducer(initialState, action);

  expect(newState.languages.length).toBe(1);
  expect(newState.languages[0].lang).toBe('Русский');
});

test('searchLanguagesAC сбрасывает поисковый термин и возвращает полный список, если поисковый термин пуст', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: 'language 1',
    selectedLanguages: {},
  };
  const action = searchLanguagesAC('');
  const newState = languageReducer(initialState, action);

  expect(newState.languages).toEqual(LANGUAGES);
});

test('selectedLanguagesAC возвращает текущее состояние', () => {
  const initialState = {
    languages: LANGUAGES,
    searchTerm: '',
    selectedLanguages: {},
  };
  const action = selectedLanguagesAC();
  const newState = languageReducer(initialState, action);

  expect(newState).toEqual(initialState);
});