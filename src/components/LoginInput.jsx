import React from 'react';
import PropTypes from 'prop-types';
 
class LoginInput extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      email: '',
      password: '',
    };
 
    this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    this.onPasswordChangeHandler = this.onPasswordChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }
 
  onEmailChangeHandler(event) {
    this.setState(() => {
      return {
        email: event.target.value
      }
    })
  }
 
  onPasswordChangeHandler(event) {
    this.setState(() => {
      return {
        password: event.target.value
      };
    });
  }
 
  onSubmitHandler(event) {
    event.preventDefault();
 
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }
 
  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className='flex flex-col w-full px-12 justify-between'>
        <div className="flex flex-col">
        <label htmlFor="email" className='mb-2 font-bold'>Email</label>
        <input type="email" placeholder='Email' value={this.state.email} onChange={this.onEmailChangeHandler} className='mb-2 p-5 border border-gray-800 rounded-lg w-full' />
        </div>
        <div className="flex flex-col mt-4">
        <label htmlFor="password" className='mb-2 font-bold'>Password</label>
        <input type="password" placeholder='Password' value={this.state.password} onChange={this.onPasswordChangeHandler} className='mb-2 p-5 border border-gray-800 rounded-lg w-full' />
        </div>
       
        <button type='submit' className=' bg-teal-500 text-white font-bold py-5 px-4 rounded-lg mt-4'>
          Masuk</button>
      </form>
    );
  }
}
 
LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
}
 
export default LoginInput;