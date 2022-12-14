import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { UPDATE_PROFILE } from '../utils/mutations'
import Auth from '../utils/auth';


const Modal = (props) => {
   /*  const profile = props.profile; */
   /*  console.log(profile); */

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    
    const [updateProfile, { data, error }] = useMutation(UPDATE_PROFILE);
    
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
            const { data } = await updateProfile({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.updateProfile.token);
        } catch (e) {
            console.error(e);
        }
    };
    
    return (
        <div className="modalBackground">
            <form className="custom-form text-light flex-column p-3"  onSubmit={handleFormSubmit}>
                <h3>Edit your profile</h3>
                <div className="form-row custom-row">
                    <div className="form-group col-md-6 w-100">
                        <label htmlFor="inputName4">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="form-control w-70"
                            id="inputName4"
                        ></input>
                    </div>
                    <div className="form-group col-md-6 w-100">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="form-control w-100"
                            id="inputEmail4"
                        ></input>
                    </div>
                    <div className="form-group col-md-6 w-100">
                        <label htmlFor="inputPassword4">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formState.password}
                            onChange={handleChange}
                            className="form-control w-100"
                            id="inputPassword4"
                        ></input>
                    </div>
                    <div className="form-group w-100">
                        <label htmlFor="inputAddress">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formState.address}
                            onChange={handleChange}
                            className="form-control w-100"
                            id="inputAddress"
                            placeholder="Please enter the address where your animal will be"
                        ></input>
                    </div>
                </div>

                <div className="form-row custom-row">
                    <div className="form-group col-md-6 w-100">
                        <label htmlFor="inputCity">City</label>
                        <input
                            type="text"
                            name="city"
                            value={formState.city}
                            onChange={handleChange}
                            className="form-control w-70"
                            id="inputCity"
                        ></input>
                    </div>
                    <div className="form-group col-md-4 w-100">
                        <label htmlFor="inputState">State</label>
                        <input
                            type="text"
                            name="state"
                            value={formState.state}
                            onChange={handleChange}
                            className="form-control w-70"
                            id="inputState"
                        ></input>
                    </div>
                    <div className="form-group col-md-2 w-100">
                        <label htmlFor="inputZip">Zip</label>
                        <input
                            type="text"
                            name="zip"
                            value={formState.zip}
                            onChange={handleChange}
                            className="form-control w-70"
                            id="inputZip"
                        ></input>
                    </div>
                </div>
                <div className="d-flex justify-content-around mt-5">
                    <button onClick={() => props.closeModal(false)} className="btn btn-danger mx-1">Cancel</button>
                    <button type="submit" className="btn btn-primary mx-1">Submit Changes</button>
                </div>
            </form>
        </div>

    )
}

export default Modal;