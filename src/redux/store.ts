import { combineReducers, createStore } from 'redux';
import { languageReducer } from './language-reducer';
import { UiReducer } from './ui-reducer';

const rootReducer = combineReducers({
  languages: languageReducer,
  UI: UiReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
