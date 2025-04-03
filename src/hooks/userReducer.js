const initialState = { name: '', emailOrPhone: '', password: '' };

function userReducer(state, action) {
    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload };
        case 'SET_EMAILORPHONE':
            return { ...state, emailOrPhone: action.payload };
        case 'SET_PASSWORD':
            return { ...state, password: action.payload };
        default:
            return state;
    }
}

export { initialState, userReducer }