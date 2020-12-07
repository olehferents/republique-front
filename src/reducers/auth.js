import {FAILED, REQUEST, SIGN_IN, SIGN_UP, SUCCESS} from "../actionTypes";

const initialState = {
    isLoading: false,
    isSignedUp: null,
    isSignedIn: null,
    error: null,
};

export const auth = (state = initialState, {type, payload}) => {
    switch (type) {
        case SIGN_UP + REQUEST:
        case SIGN_IN + REQUEST:
            return {
                ...state,
                isLoading: true,
            };
        case SIGN_UP + SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSignedUp: true,
                error: null,
            };
        case SIGN_UP + FAILED:
            return {
                ...state,
                isLoading: false,
                isSignedUp: false,
                error: payload.message,
            }
        case SIGN_IN + SUCCESS:
            return {
                ...state,
                isLoading: false,
                isSignedIn: true,
                error: null,
            };
        case SIGN_IN + FAILED:
            return {
                ...state,
                isLoading: false,
                isSignedIn: false,
                error: payload.message,
            }
        default:
            return state;
    }
}

export const getIsLoading = (state) => state.auth.isLoading;
export const getIsisSignedUp = (state) => state.auth.isSignedUp;
export const getError = (state) => state.auth.error;
