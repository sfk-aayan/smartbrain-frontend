import React from "react";
import InputComponent from "../Common/InputComponent";
import ButtonComponent from "../Common/ButtonComponent";
import { LoginProp } from '../../types/components';

const LoginComponent: React.FC<LoginProp> = ({ toggle }) => {
  return (
    <div className="w-[350px] max-w-[450px]">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-white">
        Login to SmartBrain.
      </h2>
      <div className="grow border-t border-zinc-600 mb-6"></div>
      <form>
        <InputComponent
          id="email"
          type="text"
          name="email"
          label="Email-Address"
          placeholder="Email"
        />
        <InputComponent
          id="password"
          type="password"
          name="password"
          label="Password"
          placeholder="Password"
        />

        <div className="mt-6">
          <ButtonComponent
            type="submit"
            className="w-full my-3 px-4 py-2 bg-white border border-transparent rounded-lg font-semibold hover:cursor-pointer text-black h-[50px] hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
          >
            Sign In
          </ButtonComponent>
        </div>
      </form>
      <p>
        <a
          href="/"
          className="font-medium text-white text-sm hover:cursor-pointer hover:underline"
          onClick={(e) => {
            e.preventDefault();
            toggle(true);
          }}
        >
          Don't have an account? Sign up.
        </a>
      </p>
    </div>
  );
};

export default LoginComponent;

