import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  error?: string;
  as?: "input" | "textarea";
  register?: any;
}

export const Input: React.FC<InputProps> = ({
  label,
  name,
  error,
  as = "input",
  register,
  ...rest
}) => {
  return (
    <div>
      <label htmlFor={name} className="block font-semibold mb-2 text-gray-700">
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          {...(register ? register(name) : {})}
          {...rest}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500${error ? " border-red-500" : ""}`}
        />
      ) : (
        <input
          id={name}
          {...(register ? register(name) : {})}
          {...rest}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500${error ? " border-red-500" : ""}`}
        />
      )}
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
