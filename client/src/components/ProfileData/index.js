import React, { useState } from "react";

const ProfileData = (props) => {
   /*  console.log(props.profile) */
    return (
        <div className="d-flex flex-column w-100">
            <div className="profileData">
                <h1 className="text-center">Your Personal Information</h1>
                <ul style={{listStyle:"none"}} className="dataList">
                    <div>
                        <h2 className="font text-dark"><u>UserName</u></h2>
                        <li>{props.profile.name}</li>
                    </div>
                    <div>
                        <h2 className="font text-dark"><u>Address</u></h2>
                        <li>{props.profile.address}, {props.profile.city}<br></br>{props.profile.state} {props.profile.zip}</li>
                    </div>
                    <div>
                        <h2 className="font text-dark"><u>Email</u></h2>
                        <li>{props.profile.email}</li>
                    </div>
                </ul>
            </div>
            <div className="text-center my-3">
                <button className="btn font2" onClick={() => props.openModal(true)}>Edit Information</button>
            </div>
            
        </div>
    )
}

export default ProfileData;