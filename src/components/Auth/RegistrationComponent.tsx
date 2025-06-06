import React from "react";
import InputComponent from "../Common/InputComponent";
import ButtonComponent from "../Common/ButtonComponent";
import { Link } from 'react-router-dom';

const RegistrationComponent: React.FC = () => {
  return (
    <div className="w-[350px] max-w-[450px]">
      <h2 className="mb-6 text-center text-3xl font-extrabold text-white">
        Register to SmartBrain.
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

        <InputComponent
          id="password2"
          type="password"
          name="password2"
          label="Confirm Password"
          placeholder="Confirm Password"
        />

        <div className="mt-6">
          <ButtonComponent
            type="submit"
            className="w-full my-3 px-4 py-2 bg-white border border-transparent rounded-lg font-semibold hover:cursor-pointer text-black h-[50px] hover:bg-gray-100 active:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-300"
          >
            Sign Up
          </ButtonComponent>
        </div>
      </form>
      <p>
        <Link
          to="/login"
          className="font-medium text-white text-sm hover:cursor-pointer hover:underline"
        >
          Already have an account? Sign in.
        </Link>
      </p>
    </div>
  );
};

export default RegistrationComponent;
