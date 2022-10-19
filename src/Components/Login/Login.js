import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import './Login.css'

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const { logIn } = useContext(AuthContext);

    const navigate = useNavigate();

    const location = useLocation(); 
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setSuccess(true);
                form.reset();
                navigate(from, {replace: true})
            })


            .catch(error => {
                console.log(error);
                form.reset();
                setSuccess(false);
                setError(error.message.slice(22, -2));
            })


        // logOut()
        //     .then(() => {
        //         console.log('log out successfully!');
        //     })
    }



    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>


                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>

                <input className='btn-submit' type="submit" value="Login" />

            </form>

            <p>New to ema john <Link to='/Signup'> Create New Account</Link></p>


            {error && <p className='error-text'>{error}</p>}
            {success && <p className='success-text'>Login Successfully!</p>}
        </div>
    );
};

export default Login;