import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile:'',
    role:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch('http://127.0.0.1:6000/ran', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <>
      <div className=" min-h-[70vh] flex items-center justify-center bg-[url('./assets/images/hero-bg.png')] bg-center bg-cover w-full">
        <div className=" mt-10 max-w-md w-full shadow-lg rounded-lg p-8 border-y-2 border-blue-800 bg-[url('./assets/images/hero-bg.png')]">
          <h2 className="text-xl font-extrabold mb-6 text-center">Create account</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label className="block font-semibold" htmlFor="username">Username</label>
              <input className="w-full px-3 py-2 border rounded-md" type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="block  font-semibold" htmlFor="email">Email</label>
              <input className="w-full px-3 py-2 border rounded-md" type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="block  font-semibold" htmlFor="password">Create Password</label>
              <input className="w-full px-3 py-2 border rounded-md" type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="block font-semibold" htmlFor="confirmPassword">Confirm Password</label>
              <input className="w-full px-3 py-2 border rounded-md" type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="block  font-semibold" htmlFor="mobile">Mobile No.</label>
              <input className="w-full px-3 py-2 border rounded-md" type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
            </div>
            <div className="mb-2">
              <label className="block  font-semibold" htmlFor="role">Role</label>
              <select className="w-full px-3 py-2 border rounded-md" id="role" name="role" value={formData.role} onChange={handleChange} required> 
                <option value="user">User</option>
                <option value="admin">Admin</option>
                <option value="doctor">Doctor</option>
              </select>           
            </div>
            <div className="flex justify-between items-center mb-4">
              <button className="text-blue-500 text-2xl font-extrabold hover:underline " type="submit">Sign Up</button>
            </div>
            <p className="text-center text-[12px] mt-8 ">Existing User??</p>
            <div className='items-center'>
            <Link to="/login">
                <button className="text-blue-500 text-xl font-extrabold hover:underline w-full" type="button">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
