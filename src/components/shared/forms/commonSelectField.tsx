import React from "react";

const CommonSelectField = ({
  label,
  error,
  registration,
  options,
  ...props
}: any) => {
  return (
    <div>
      <label>{label}</label>
      <select
        {...registration}
        className="w-full border rounded-lg p-3 outline-none text-sm focus:ring-1 focus:ring-blue-500"
      >
        <option value="">{label}</option>
        {options.map((option: any) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-xs">{error.message}</p>}
    </div>
    
  );
};

export default CommonSelectField;
