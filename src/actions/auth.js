import axios from 'axios';
import {FAILED, REQUEST, SIGN_IN, SIGN_UP, SUCCESS} from "../actionTypes";

export const signUp = ({name, email}) => {
    return async dispatch => {
        try {
            dispatch({ type: SIGN_UP + REQUEST });

            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signUp`, {
                name,
                email,
            });

            dispatch({ type: SIGN_UP + SUCCESS });
            dispatch(signIn(data));
        } catch (e) {
            console.log(e);
            dispatch({ type: SIGN_UP + FAILED, payload: e.response.request.responseText });
        }
    }
}

export const signIn = ({name, email}) => {
    return async dispatch => {
        try {
            dispatch({ type: SIGN_IN + REQUEST });

            const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signIn`, {
                name,
                email,
            });

            localStorage.setItem('accessToken', data.accessToken);

            dispatch({ type: SIGN_IN + SUCCESS });
        } catch (e) {
            console.log(e);
            dispatch({ type: SIGN_IN + FAILED, payload: e.response.request.responseText });
        }
    }
}
