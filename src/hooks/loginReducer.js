const initialState = {  emailOrPhone: '', password: '' };

function loginReducer(state, action) {
    switch (action.type) {
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

export { initialState, loginReducer }