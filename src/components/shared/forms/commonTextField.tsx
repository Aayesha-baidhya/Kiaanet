import React from 'react'

const CommonTextField = ({label, placeholder, error, registration, ...props}:any) => {
  return (
    <div>
        <label>{label}</label>
        <input
                type="text"
                placeholder={placeholder}
                {...registration}
                className="w-full border rounded-lg p-3 outline-none text-sm focus:ring-1 focus:ring-blue-500"
              />
              {error && (<p className="text-red-500 text-xs">{error.message}</p>)}
    </div>
  )
}

export default CommonTextField