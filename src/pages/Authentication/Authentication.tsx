import React, { lazy } from 'react';
const Login = lazy(() => import('../../components/common/Login/Login'));
const SignUp = lazy(() => import('../../components/common/SignUp/SignUp'));
import AuthenBg from '../../assets/images/bg-authen.jpg';
import { NavLink } from 'react-router-dom';

const Authentication = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="w-full flex  h-screen relative transition-all">
      <div
        className={`flex flex-col items-center justify-center gap-5 w-full bg-cover`}
        style={{
          backgroundImage: `url(${AuthenBg})`,
        }}
      >
        <div className="absolute md:top-5 md:left-5 top-3 left-3">
          <NavLink
            to="/"
            className={`btn ${
              value !== 0
                ? 'text-sky-400 shadow-sky-300'
                : 'text-green-500 shadow-green-500'
            }  text-lg font-bold px-5 hover:bg-sky-50 shadow-lg`}
          >
            Home
          </NavLink>
        </div>
        <div className=" w-full h-full md:w-[600px] md:h-[600px] px-5 lg:px-0 mx-auto lg:mx-0 transition-all">
          <div className="flex flex-col h-full items-center justify-center">
            <div className="tabs mx-8 shadow-lg bg-slate-200">
              <a
                className={`tab tab-lifted tab-lg text-green-500  text-lg ${
                  value === 0 ? 'text-2xl font-bold bg-white' : 'bg-slate-200'
                }`}
                onClick={() => handleChange(0)}
              >
                Login
              </a>
              <a
                className={`tab tab-lifted tab-lg text-sky-400 text-lg ${
                  value === 1 ? 'text-2xl font-bold bg-white' : 'bg-slate-200'
                }`}
                onClick={() => handleChange(1)}
              >
                Sign up
              </a>
            </div>
            {value === 0 && <Login />}
            {value === 1 && <SignUp handleChange={handleChange} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
