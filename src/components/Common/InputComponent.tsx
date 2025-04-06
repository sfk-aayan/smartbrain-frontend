import React from "react";
import { InputProps } from "../../types/components";

const InputComponent: React.FC<InputProps> = ({
  id,
  type,
  label,
  name = "",
  className = "py-2 px-3 min-h-[48px] border rounded-lg mt-2 block w-full border-zinc-600 hover:border-zinc-200 hover:cursor-pointer bg-gradient-to-r from-zinc-800 to-zinc-900 text-white",
  placeholder = "",
  required = false,
  autoComplete = "off",
  onChange = () => {},
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-1 font-semibold text-white">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        onChange={onChange}
      />
    </div>
  );
};

export default InputComponent;
