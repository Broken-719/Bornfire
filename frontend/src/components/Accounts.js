import React , { useState } from "react";
import './Accounts.css';
import pfp from './images/pfp.jpeg';

const MyAccount = () => {

    function ProfilePicture() {
        const [ image , setImage ] = useState(null);


        const handleImageChange = (e) => {
            const file = e.target.files[0];
            if (file) {
               const reader = new FileReader();
                reader.onloadend = () => {
                    setImage(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };

return (
<div className="my-account">
    <div className="my-account-header">
        <h1>My Account</h1>
        <p>Account Details</p>
    </div>
        <div className="my-account-content">
            <div className="my-account-left">
                <div className="my-account-pfp">
                    <img src={image || pfp} alt="User profile" />
                    <input type="file" id="profile-picture" accept="image/*" onChange={handleImageChange} />
                    <button type="button" className="link-button" onClick={() => document.getElementById('profile-picture').click()}>Edit profile picture</button>
                </div>
                <hr />
                <section className="my-account-profile-info">
                    <h3>
                        Profile Info <span className="edit-icon" aria-hidden="true" />
                    </h3>
                    <p><strong>Name:</strong> Admin</p>
                    <p><strong>Email:</strong> admin@example.com</p>
                    <p><strong>Role:</strong> Admin</p>
                </section>

                <section className="my-account-security">
                    <h3>
                        Security <span className="edit-icon" aria-hidden="true" />
                    </h3>
                    <p><strong>Password:</strong> **********</p>
                    <button type="button" className="link-button">Change password</button>
                </section>
            </div>
            <hr />
            <aside className="my-account-right">
                <section className="my-account-preferences">
                    <h3>
                        Preferences <span className="edit-icon" aria-hidden="true" />
                    </h3>
                    <p>Theme: Light</p>
                    <p>Notifications: Enabled</p>
                </section>

                <section className="my-account-projects">
                    <h3>Projects</h3>
                    <p>Total Projects: 5</p>
                    <p>Active Tasks: 7</p>
                </section>
            </aside>
        </div>
</div>    
);
};

    // render the inner component from MyAccount and close the MyAccount arrow function
    return <ProfilePicture />;
};

export default MyAccount;