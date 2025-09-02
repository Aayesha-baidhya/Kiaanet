// components/LoginForm.tsx
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { MdOutlineMail } from 'react-icons/md';
import { FaRegEyeSlash } from "react-icons/fa";

export default function LoginForm() {
  //React states for form
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent)=>{
    //To prevent page reloading
    e.preventDefault();
    console.log("Email:", email)
    console.log("Password:", password)
  };
  return (
    <div className="w-full md:w-3/4 lg:w-3/4 xl:w-1/2 min-h-screen bg-white flex flex-col justify-center items-center">
      
      <div className="w-[95%]"> {/* 💡 stretch nearly full width of right half */}

        {/* Logo */}
        <div className="mb-10 text-center">
          <Image src="/logo.svg" alt="Kiaanet Logo" className="mx-auto w-40" width={100} height={50}/>
          {/* // <h1 className="text-5xl font-bold text-black">SMS</h1>
          // <p className="text-sm text-black">STUDENT MANAGEMENT SYSTEM</p> */}
        </div>

        {/* Login Box */}
        <div className="w-full border border-gray-200 py-10 px-5 rounded-md hover:shadow-2xl transition-all duration-300">
          
          {/* Welcome Text - Left Aligned */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-left">Welcome</h2>
            <p className="text-gray-500 text-left">Please enter your details to sign in</p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border rounded bg-gray-100"
                placeholder="example@mail.com"
                // defaultValue="mallasresta@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
              <MdOutlineMail className="absolute right-3 top-10 text-black text-xl"  />
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded bg-gray-100"
                placeholder="••••••"
                // defaultValue="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
              />
                <FaRegEyeSlash className="absolute right-3 top-10 text-black text-xl"/>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-xs text-gray-400 text-center">
          &copy;copyright 2025 - SMS
        </p>
      </div>
    </div>
  );
}
