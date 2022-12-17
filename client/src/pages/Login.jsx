import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

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
    <div className="loginBackground">
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
                            type="email"
                            id="login"
                            className="fadeIn second"
                            name="email"
                            placeholder="email"
                            value={formState.email}
                            onChange={handleChange}
                        ></input>
                        <input
                            type="password"
                            id="password"
                            className="fadeIn third"
                            name="password"
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
                        <h5>user does not exist</h5>
                        <p>please create an account <Link to="/signup"><u>here</u></Link></p>
                    </div>
                )}

                <div id="formFooter">
                    <p>Dont have an accout yet?</p>
                    <Link to="/signup" className="underlineHover" href="#"><strong>Register Here</strong></Link>
                </div>
            </div>
        </div >
    </div>
    )
}

export default Login;