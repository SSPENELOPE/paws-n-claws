import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Login = (props) => {

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };
    return (

        <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                    <FontAwesomeIcon icon={faPaw} size="6x" />
                    <FontAwesomeIcon icon={faPaw} size="4x" />
                    <FontAwesomeIcon icon={faPaw} size="3x" />
                    <FontAwesomeIcon icon={faPaw} size="2x" />
                </div>

                {data ? (
                    <p>
                        Success! You may now head{' '}
                        <Link to="/">back to the homepage.</Link>
                    </p>
                ) : (
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            id="login"
                            className="fadeIn second"
                            name="login"
                            placeholder="email"
                            value={formState.email}
                            onChange={handleChange}
                        ></input>
                        <input
                            type="text"
                            id="password"
                            className="fadeIn third"
                            name="login"
                            placeholder="password"
                            value={formState.password}
                            onChange={handleChange}
                        ></input>
                        <input
                            type="submit"
                            className="fadeIn fourth"
                            value="Log In"
                        ></input>
                    </form>
                )}

                {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                        {error.message}
                    </div>
                )}

                <div id="formFooter">
                    <Link to="/signup" className="underlineHover" href="#">Or Register Here</Link>
                </div>
            </div>
        </div >
    )
}

export default Login;