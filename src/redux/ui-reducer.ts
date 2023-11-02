export type InitialStateUIType = {
    isShow: boolean;
    isIconFlipped: boolean;
};

export type ActionsUIType = ReturnType<typeof VisibilityTogglerAC>;

const initialState: InitialStateUIType = {
    isShow: false,
    isIconFlipped: false,
};

export const UiReducer = (
    state: InitialStateUIType = initialState,
    action: ActionsUIType,
): InitialStateUIType => {
    switch (action.type) {
        case 'VISIBILITY_TOGGLER':
            return {
                ...state,
                isShow: !state.isShow,
                isIconFlipped: !state.isIconFlipped,
            }
      default:
            return state

    }
};

export const VisibilityTogglerAC = () => {
    return {
        type: 'VISIBILITY_TOGGLER',
    } as const;
};
