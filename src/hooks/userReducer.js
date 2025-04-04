const initialState = { firstName: '', emailOrPhone: '', password: '' };

function userReducer(state, action) {
    switch (action.type) {
        case 'SET_FIRSTNAME':
            return { ...state, firstName: action.payload };
        case 'SET_EMAILORPHONE':
            return { ...state, emailOrPhone: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        case 'CLEAR_STATE':
            return {...state, firstName: '', emailOrPhone: '', password: '' };
        default:
            return state;
    }
}

export { initialState, userReducer }