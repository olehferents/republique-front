import React, {useEffect} from 'react';
import './index.scss';
import Header from "../Header";
import {useForm} from "react-hook-form";
import googleIcon from './../../assets/google-icon.svg';
import FacebookLogin from 'react-facebook-login';
import {GoogleLogin} from 'react-google-login';
import { useHistory } from "react-router-dom";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../actions/auth";
import {getIsSignedUp} from "../../reducers/auth";

const SignUpForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {register, handleSubmit, errors} = useForm();
    const isSignedUp = useSelector(getIsSignedUp);

    useEffect(() => {
        if(isSignedUp) {
            history.push('/calendar');
        }
    }, [isSignedUp])

    const handleAuth = (data) => {
        dispatch(signUp(data));
    }

    return (
        <div className="sign-up-form">
            <Header/>
            <h1 className="sign-up-form__heading">
                ENTER YOUR DETAILS BELOW FOR THE CHANCE TO WIN A ONE-OF-A-KIND
                DIGITAL GLAM OUTFIT FOR THE FESTIVE PERIOD!
                THE WINNER WILL BE DRAWN ON THE 24TH DECEMBER 2020
            </h1>
            <div className="sign-up-form__fields">
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="sign-up-form__field"
                    ref={register({
                        required: {
                            value: true,
                            message: 'Name is required!',
                        },
                    })}
                    placeholder="enter here your name"
                    autoComplete="off"
                />
                <input
                    id="email"
                    name="email"
                    type="text"
                    className="sign-up-form__field"
                    ref={register({
                        required: {
                            value: true,
                            message: 'Email is required!',
                        },
                    })}
                    placeholder="enter here your email"
                    autoComplete="off"
                />
            </div>
            <h1 className="sign-up-form__heading">
                OR
            </h1>
            <div className="sign-up-form__auth">
                <div>
                    <FacebookLogin
                        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                        fields="name,email"
                        callback={(response) => console.log(response)}
                        textButton="Sign In with Facebook"
                        icon="fa-facebook"
                        cssClass="sign-up-form__social sign-up-form__social__facebook"
                    />
                </div>
                <div>
                    <GoogleLogin
                        clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}
                        render={renderProps => (
                            <button className="sign-up-form__social sign-up-form__social__google"
                                    onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                <img src={googleIcon} alt=""/>
                                Sign In with Google+
                            </button>
                        )}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>
            <h1 className="sign-up-form__text">
                for t&cs, please <span onClick={() => history.push('/description')}>click here</span>
            </h1>
            <div className="sign-up-form__button">
                <Button text="Enter" action={handleSubmit(handleAuth)} />
            </div>
        </div>
    );
};

export default SignUpForm;
