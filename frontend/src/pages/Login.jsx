import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState(null);
  const [errorField, setErrorField] = useState(null); // Track which field has error
  const [fadeError, setFadeError] = useState(false); // For fade out animation

  const navigate = useNavigate();

  // Clear error when user types in the field with error
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errorField === 'email') {
      setFadeError(true);
      setTimeout(() => {
        setError(null);
        setErrorField(null);
        setFadeError(false);
      }, 500); // Clear error after fade animation
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errorField === 'password') {
      setFadeError(true);
      setTimeout(() => {
        setError(null);
        setErrorField(null);
        setFadeError(false);
      }, 500); // Clear error after fade animation
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Clear previous error messages
    setError(null);
    setErrorField(null);
    
    const formData = {
      email, 
      password
    };

    try {
      const res = await axios.post('http://localhost:5000/api/v1/users/login', formData,
       {withCredentials: true});
      // setSuccess(res.data.msg || 'Login successfull')
      console.log(res);
      
      navigate('/');
    } catch (error) {
      if(axios.isAxiosError(error)) {
        setError(error.response?.data?.message || 'Login failed');
        // Determine which field has the error (simplistic approach based on error message)
        const errorMsg = error.response?.data?.message?.toLowerCase() || '';
        if (errorMsg.includes('email') || errorMsg.includes('user')) {
          setErrorField('email');
        } else if (errorMsg.includes('password')) {
          setErrorField('password');
        } else {
          setErrorField('form'); // Generic form error
        }
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to='/signup' className="font-medium text-green-600 hover:text-green-500">create a new account</Link>
          </p>
        </div>
        
        {/* Form-level error message */}
        {error && errorField === 'form' && (
          <div className={`rounded-md bg-red-50 p-4 mt-4 ${fadeError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <div className="text-sm text-red-700">
                  <p>{error}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              {/* Email error message */}
              {error && errorField === 'email' && (
                <span className={`text-sm text-red-600 mb-1 block ${fadeError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                  {error}
                </span>
              )}
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ${errorField === 'email' ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-green-600'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`}
                placeholder="Email address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              {/* Password error message */}
              {error && errorField === 'password' && (
                <span className={`text-sm text-red-600 mb-1 block ${fadeError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                  {error}
                </span>
              )}
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className={`relative block w-full rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ${errorField === 'password' ? 'ring-red-300 focus:ring-red-500' : 'ring-gray-300 focus:ring-green-600'} placeholder:text-gray-400 focus:ring-2 focus:ring-inset`}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-green-600 hover:text-green-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-green-600 py-2 px-3 text-sm font-semibold text-white hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;