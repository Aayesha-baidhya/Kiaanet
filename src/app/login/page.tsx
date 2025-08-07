import PrimaryBtn from '@/components/primaryBtn'
import Announcement from '@/components/announcement'
import LoginForm from '@/components/loginForm'
import React from 'react'

export default function page() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">

        <div className="w-full md:w-1/2 bg-[#8CA0ED] flex items-center">
            {/* <h2>About</h2> */}
            {/* <PrimaryBtn/> Calling the component */}
            <Announcement/>
            </div>
        <div className="w-full md:w-1/2 mt-5 flex items-center justify-center bg-white">
            <LoginForm/>
            </div>
    </div>
  );
}
