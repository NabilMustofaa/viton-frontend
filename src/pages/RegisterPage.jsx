import React from "react";
import { register } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";


function RegisterPage() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigate = useNavigate();
  async function onRegister() {
    const { error, data } = await register({ name, email, password }).then(
      (res) => {
        console.log(res.error);
        if (res.error == false){
          navigate("/login");
        }
      }
    );



    if (!error) {
      console.log(data);
    }
  }

  return (
    <section className="flex flex-col h-screen items-center justify-center  ">
      <img src="images/logo.png" alt="logo" className="w-1/3 mb-12" />
      <div className="flex flex-col w-full px-12 justify-between items-center">
      <div className="flex flex-col w-full">
        <label className="mb-2 font-bold">Nama</label>
        <input
          type="text"
          className='mb-2 p-5 border border-gray-800 rounded-lg w-full' 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="flex flex-col w-full">
        <label className="mb-2 font-bold">Email</label>
        <input
          type="email"
          className='mb-2 p-5 border border-gray-800 rounded-lg w-full' 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div className="flex flex-col w-full">
        <label className="mb-2 font-bold">Password</label>
        <input
          type="password"
          className='mb-2 p-5 border border-gray-800 rounded-lg w-full' 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button 
        onClick={onRegister}  
        className="bg-teal-500 text-white font-bold py-5 px-4 rounded-lg mt-4 w-full">
          Daftar
        </button>
        <Link to="/login" className="text-gray-700 mt-4">
          Sudah punya akun? Masuk di sini.
        </Link>
      </div>
    </section>
  );
}

export default RegisterPage;

