import React from "react";

const ProfileData = (props) => {
    return (
        <div>
            <h1>Your Personal Information</h1>
            <ul style={{listStyle:"none"}}>
                <h2 className="font">UserName</h2>
                <li>{props.profile.name}</li>
                <li>Address</li>
                <li>etc...</li>
            </ul>
        </div>
    )
}

export default ProfileData;