import React from 'react';
import { HiOutlineUser } from 'react-icons/hi';
import { MdLockOutline } from 'react-icons/md';
import './Login.css'
const Login = () => {
    return (
        <div className='row p-0 m-0'>
            <div className='col'>
                <div className='d-flex justify-content-center align-items-center component px-5 '>
                    <div className='w-100 text-center margin'>
                        <h1>Welcome</h1>
                        <p>Enter Your Username and Password</p>
                        <div className="input-group mb-3 border rounded">
                            <span className="input-group-text bg-white border-0" id="inputGroup-sizing-default"><HiOutlineUser /></span>
                            <input type="text" className="form-control border-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Username' />
                        </div>
                        <div className="input-group mb-3 border rounded">
                            <span className="input-group-text bg-white border-0" id="inputGroup-sizing-default"> <MdLockOutline /></span>
                            <input type="password" className="form-control border-0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder='Password' />
                        </div>

                        <button className='w-100 primary-bg border-0 text-white rounded button'>Login</button>
                        <p>Forget Password?</p>

                    </div>
                </div>
            </div>
            <div className='primary-bg col component d-flex justify-content-center align-items-center'>
                <div>
                    <div className='white-box mx-auto'></div>
                    <div className='text-center text-white mt-5 mx-5'>
                        <h3>360° Solution for Asset Management</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus quasi aut illo facilis eius, enim repellat molestias iste error quae.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;