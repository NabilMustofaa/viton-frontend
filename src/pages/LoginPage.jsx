import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
 
function LoginPage({ onLoginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      onLoginSuccess(data);
    }
  }
 
  return (
    <section className='flex flex-col h-screen items-center justify-center  '>
      <img src='images/logo.png' alt='logo' className='w-1/3 mb-12' />
      <LoginInput login={onLogin} />
      <p className='text-gray-700'>Belum punya akun? <Link to="/register" className=' underline '>Daftar di sini.</Link></p>
    </section>
  );
}
 
LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;