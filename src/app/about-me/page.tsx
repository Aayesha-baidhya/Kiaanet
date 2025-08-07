import PrimaryBtn from '@/components/primaryBtn'
import Announcement from '@/components/announcement'
import LoginForm from '@/components/loginForm'
import React from 'react'

export default function about() {
  return (
    <div className="min-h-screen flex items-stretch">

        <div className="w-full md:w-1/2 bg-[#8CA0ED] flex items-center">
            {/* <h2>About</h2> */}
            {/* <PrimaryBtn/> Calling the component */}
            <Announcement/>
            </div>
        <div className="w-full md:w-1/2 flex items-center justify-center bg-white">
            <LoginForm/>
            </div>
    </div>
  );
}
