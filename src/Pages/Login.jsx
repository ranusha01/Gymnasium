import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import COVER_IMAGE from "/src/assets/StartNow.jpg";
import GOOGLE_ICON from "/src/assets/google.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Initialize the navigate function

  const postUserData = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const LoginData = async (event) => {
    event.preventDefault();
    const { email, password } = userData;

    if (email && password) {
      const res = await fetch(
        "https://gymnasium-aeb73-default-rtdb.asia-southeast1.firebasedatabase.app/userData.json"
      );
      const data = await res.json();

      const userExists = Object.values(data).find(
        (user) => user.email === email && user.password === password
      );

      if (userExists) {
        alert("Login successful!");
        navigate("/main"); // Redirect to the desired page, e.g., "/main"
      } else {
        alert("Invalid email or password");
      }
    } else {
      alert("Please fill in both email and password");
    }
  };

  return (
    <div className='w-full h-screen flex items-start'>
      <div className='relative w-1/2 h-full flex flex-col'>
        <div className='absolute top-[20%] left-[10%] flex flex-col 56'>
          <h1 className='text-4xl text-white font-bold my-4'>Join To Get In Shape</h1>
          <p className='text-xl text-white font-normal'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas,
            illum! Impedit, voluptate. Aut dolores illum consectetur autem
            voluptatum cum iusto enim, modi accusantium, quos nam deserunt id
            itaque, aperiam vitae.
          </p>
        </div>
        <img src={COVER_IMAGE} className='w-full h-full object-cover' />
      </div>

      <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between items-center'>
        <form method="POST">
          <h1 className='w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto'>
            Get Started
          </h1>

          <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-3xl text-green-950 font-semibold mb-2'>Login</h3>
              <p className='text-base mb-2'>
                Welcome Back! Please enter your details.
              </p>
            </div>

            <div className='w-full flex flex-col'>
              <input
                type="email"
                name="email"
                placeholder='Email'
                value={userData.email}
                onChange={postUserData}
                className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />

              <input
                type='password'
                name="password"
                placeholder='Password'
                value={userData.password}
                onChange={postUserData}
                className='w-full text-black py-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />
            </div>

            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex items-center'>
                <input type="checkbox" className='w-4 h-4 mr-2' />
                <p className='text-sm'>Remember me for 30 days</p>
              </div>
              <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>
                Forget Password?
              </p>
            </div>

            <div className='w-full flex flex-col my-4'>
              <button
                className='w-full text-white my-2 font-semibold bg-green-900 hover:bg-green-950 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'
                onClick={LoginData}
              >
                Login
              </button>
              <button className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>

            <div className='w-full flex items-center justify-center relative py-2'>
              <div className='w-full h-[1px] bg-black'></div>
              <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>or</p>
            </div>

            <div className='w-full text-[#060606] my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center cursor-pointer'>
              <img src={GOOGLE_ICON} className='h-6 mr-2' />
              Sign in with Google
            </div>

            <div className='w-full flex items center justify-center'>
              <p className='text-sm font-normal text-[#060606]'>
                Don't have an account?{' '}
                <span className='font-semibold underline underline-offset-2 cursor-pointer'>
                  <Link to="/signup">Sign up for free</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
