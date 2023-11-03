import {
  InitialStateUIType,
  UiReducer,
  VisibilityTogglerAC,
} from './ui-reducer';

describe('UiReducer', () => {
  const initialState: InitialStateUIType = {
    isShow: false,
    isIconFlipped: false,
  };

  it('should return the initial state', () => {
    expect(UiReducer(undefined, {} as any)).toEqual(initialState);
  });

  it('should handle VISIBILITY_TOGGLER action', () => {
    const expectedState: InitialStateUIType = {
      isShow: true,
      isIconFlipped: true,
    };

    expect(UiReducer(initialState, VisibilityTogglerAC())).toEqual(
      expectedState,
    );
  });
});

describe('VisibilityTogglerAC', () => {
  it('should return the correct action object', () => {
    const expectedAction = {
      type: 'VISIBILITY_TOGGLER',
    };

    expect(VisibilityTogglerAC()).toEqual(expectedAction);
  });
});
