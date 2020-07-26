import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "../../hooks/useForm";
import validator from "validator/es";
import {useDispatch, useSelector} from "react-redux";
import {removeError, setError} from "../../actions/ui";
import {startRegisterWithEmailPassword} from "../../actions/auth";

const RegisterScreen = () => {

    const dispatch = useDispatch();
    const {msgError} = useSelector(state => state.ui);

    const [values, handleInputChange] = useForm({
        name: 'Daniel',
        email: 'daniel@example.com',
        password: '123456',
        password2: '123456'
    });

    const {name, email, password, password2} = values;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPassword(email,password,name))
        }
    }

    const isFormValid = () => {

        if (name.trim() === '') {
            dispatch(setError('Name required'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Email is not valid'))
            return false;
        } else if (password !== password2 || password.trim().length < 6) {
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false;
        }

        dispatch(removeError())
        return true;
    }

    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleRegister}>

                {
                    msgError !== null &&
                    <div className="auth__alert-error">
                        {msgError}
                    </div>
                }


                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    defaultValue={name}
                    autoComplete='off'
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    defaultValue={email}
                    autoComplete='off'
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    defaultValue={password}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    className="auth__input"
                    defaultValue={password2}
                    onChange={handleInputChange}
                />

                <button type="submit" className='btn btn-primary btn-block mb-5'>
                    Register
                </button>
                <Link className={'link'} to={'/auth/login'}>Alredy registered?</Link>
            </form>
        </>
    );
};

export default RegisterScreen;
