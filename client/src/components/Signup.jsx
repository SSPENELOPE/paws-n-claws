import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);

        try {
            const { data } = await addProfile({
                variables: { ...formState },
            });

            Auth.login(data.addProfile.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main className="d-flex flex-column align-items-center mb-4 w-100">
            
            <div className="col-12 col-lg-10">
                <div className="card">
                    <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
                    <div className="card-body">
                        {data ? (
                            <p>
                                Success! You may now head{' '}
                                <Link to="/">back to the homepage.</Link>
                            </p>
                        ) : (
                            /*   <form onSubmit={handleFormSubmit}>
                                <input
                                  className="form-input"
                                  placeholder="Your username"
                                  name="name"
                                  type="text"
                                  value={formState.name}
                                  onChange={handleChange}
                                />
                                <input
                                  className="form-input"
                                  placeholder="Your email"
                                  name="email"
                                  type="email"
                                  value={formState.email}
                                  onChange={handleChange}
                                />
                                <input
                                  className="form-input"
                                  placeholder="******"
                                  name="password"
                                  type="password"
                                  value={formState.password}
                                  onChange={handleChange}
                                />
                                <button
                                  className="btn btn-block btn-info"
                                  style={{ cursor: 'pointer' }}
                                  type="submit"
                                >
                                  Submit
                                </button>
                              </form> */
                            <form className="d-flex align-items-center flex-column w-100">
                                <div className="form-row w-100">
                                <div className="form-group col-md-6 w-100">
                                        <label htmlFor="inputName4">Name</label>
                                        <input 
                                        type="text" 
                                        className="form-control w-100" 
                                        id="inputName4"
                                        ></input>
                                    </div>
                                    <div className="form-group col-md-6 w-100">
                                        <label htmlFor="inputEmail4">Email</label>
                                        <input 
                                        type="email" 
                                        className="form-control w-100" 
                                        id="inputEmail4"
                                        ></input>
                                    </div>
                                    <div className="form-group col-md-6 w-100">
                                        <label htmlFor="inputPassword4">Password</label>
                                        <input 
                                        type="password" 
                                        className="form-control w-100" 
                                        id="inputPassword4"
                                        ></input>
                                    </div>
                                </div>
                                <div className="form-group w-100">
                                    <label htmlFor="inputAddress">Address</label>
                                    <input 
                                    type="text" 
                                    className="form-control w-100" 
                                    id="inputAddress" 
                                    placeholder="1234 Main St"
                                    ></input>
                                </div>
        
                                <div className="form-row w-100">
                                    <div className="form-group col-md-6 w-100">
                                        <label htmlFor="inputCity">City</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="inputCity"
                                        ></input>
                                    </div>
                                    <div className="form-group col-md-4 w-100">
                                        <label htmlFor="inputState">State</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="inputCity"
                                        ></input>
                                    </div>
                                    <div className="form-group col-md-2 w-100">
                                        <label htmlFor="inputZip">Zip</label>
                                        <input 
                                        type="text" 
                                        className="form-control w-100" 
                                        id="inputZip"
                                        ></input>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Sign Up</button>
                            </form>
                        )}

                        {error && (
                            <div className="my-3 p-3 bg-danger text-white">
                                {error.message}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Signup;