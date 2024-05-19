import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; 
function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add logic for handling form submission here
  };

  return (
    <>
      <div className="min-h-[90vh] flex items-center justify-center bg-[url('./assets/images/hero-bg.png')] bg-center bg-cover w-full">
        <div className="max-w-md w-full shadow-lg rounded-lg p-8 border-y-2 border-blue-800 bg-[url('./assets/images/hero-bg.png')]">
          <h2 className="text-2xl font-semibold mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="username">Username</label>
              <input className="w-full px-3 py-2 border rounded-md" type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-semibold" htmlFor="password">Password</label>
              <input className="w-full px-3 py-2 border rounded-md" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="flex justify-between items-center mb-4">
              <button className="text-blue-500 hover:underline" type="button">Forgot password?</button>
              <button className="text-blue-500 text-xl font-extrabold hover:underline " type="submit">Login</button>
            </div>
            <p className="text-center text-[12px] mt-8 ">New User??</p>
            <div className="mb-4">
              
              <Link to="/signup">
                <button className="text-blue-500 text-xl font-extrabold hover:underline w-full" type="submit">Create Account</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
