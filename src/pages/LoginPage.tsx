import React from 'react';
import LoginForm from '../components/form/LoginForm';


const LoginPage = () => {
  return (
    <div className={'w-full h-full flex flex-row-reverse'}>
      <div className={'w-1/2 h-full p-10 flex items-center justify-center'}>
        <div className={'w-2/4'}>
          <h3 className={'text-3xl text-center text-white mb-10'}>IOT EMS Platform</h3>
          <LoginForm />
          <div>
            <span className={"text-sm text-[hsla(0,0%,100%,.6)]"}>Don't have an account yet?</span> <a className={"text-sm text-[#01aef8] underline"} href="">Register now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;