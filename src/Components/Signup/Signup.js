import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Signup.css'

const Signup = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const { createNewUser } = useContext(AuthContext)


    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm.value;

        // console.log(email, password, confirm_password);

        if (password.length < 6) {
            setError('Password must be 6 characters');
            return;
        }
        if (password !== confirm_password) {
            setError('Password does not matched!');
            return;
        }

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                setSuccess(true);
                navigate('/Login');
            })
            .catch(error=>{
                console.log(error);
                setError(error.message);
            })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>


                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />

            </form>

            <p>Already have an account? <Link to='/Login'> LOGIN</Link></p>

            {error && <p className='error-text'>{error}</p>}
            {success && <p className='success-text'>Account created Successfully!</p>}
        </div>
    );
};

export default Signup;