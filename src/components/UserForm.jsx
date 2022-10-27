import React, { useState } from 'react';


const UserForm = props => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");

    const createUser = (e) => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setconfirmPassword("");
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
    };

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value) } value={firstName} />
            </div>
            <div>
                <label>Last name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div>
                <label> Confirm Password: </label>
                <input type="password" onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} />
            </div>
            <input type="submit" value="Create User" />


            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{password}</p>
            <p>{confirmPassword}</p>
        </form>
    );
};

export default UserForm;