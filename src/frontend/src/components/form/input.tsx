import React, { ChangeEventHandler, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  label: string;
  disabled?: boolean;
  name?: string;
  required?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

function Input({
  label,
  disabled = false,
  type = 'text',
  name,
  id,
  required = true,
  placeholder,
  value = '',
  onChange,
}: InputProps) {
  return (
    <div className="w-full">
      <h3 className={`block text-sm font-medium ${disabled ? 'text-gray-500' : 'text-gray-700'}`}>
        {label}
      </h3>
      <div className="relative mt-2">
        <input
          type={type}
          name={name}
          id={id}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          required={required}
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded-2xl text-sm border border-gray-300 outline-none focus:outline-none focus:border-primary w-full hover:border-gray-400 transition duration-200"
          // @ts-ignore
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default Input;
