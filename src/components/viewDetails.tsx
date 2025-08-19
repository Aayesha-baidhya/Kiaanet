"use client";
import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { LuGraduationCap } from "react-icons/lu";
import { TiEdit } from "react-icons/ti";

type Student = {
  name: string;
  admissionNo: string;
  status: string;
  rollNo: string;
  gender: string;
  dob: string;
  category: string;
  motherTongue: string;
  language: string[];
  phone: string;
  email: string;
};

const students: Record<string, Student> = {
  AD9892434: {
    name: "Janet Thompson",
    admissionNo: "AD9892434",
    status: "Active",
    rollNo: "35013",
    gender: "Female",
    dob: "25 Jan 2008",
    category: "OBC",
    motherTongue: "Nepali",
    language: ["English", "Nepali"],
    phone: "+1 46548 84498",
    email: "mallasresta@gmail.com",
  },
};
const ViewDetails=({id}:any)=>{
  const [toggle, setToggle] = useState(1);
  function updateToggle(id: number) {
    setToggle(id);
  }
    const student = students[id];
    console.log("student" , id)


  if (!student) {
    return <div className="p-6">Student not found.</div>;
  }

  return (
    <div className="">
      {/* ===== Page Header ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-white">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Students List</h1>
          <div className="text-sm text-gray-500">
            Dashboard / Students /{" "}
            <span className="text-gray-900 font-medium">
              View Student Details
            </span>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center space-x-2 mt-3 md:mt-0">
          <button className="bg-gray-300 text-black px-3 py-2 rounded-lg text-sm flex items-center gap-2">
            <CiLock className="text-black text-lg" />
            Login Details
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2">
            <TiEdit className="text-white text-lg" />
            Edit Student
          </button>
        </div>
      </div>

      {/* Std Info */}
      <div className="px-6 py-6 flex w-full gap-6">
        {/* Left Div */}
        <div className="space-y-6 w-3/5 flex-1">
          <div className="bg-white shadow rounded-xl p-6 w-full">
            <div className="flex items-center gap-6 pb-4 border-b border-gray-200">
              <div className="w-20 h-20 bg-gray-200 rounded-md flex items-center justify-center text-sm">
                300x300{/* Avatar placeholder */}
              </div>
              <div>
                <div className="flex flex-col">
                  <span
                    className={`px-1 py-1 rounded text-xs font-small w-max ${
                      student.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {student.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold whitespace-nowrap">
                      {student.name}
                    </h2>
                  </div>
                  <p className="text-blue-600 text-sm font-medium">
                    {student.admissionNo}
                  </p>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="pt-4">
              <h3 className="font-semibold mb-3">Basic Information</h3>
              <p>
                <span className="font-semibold">Roll No</span>{" "}
                <span className="text-gray-500 ml-20">{student.rollNo}</span>
              </p>
              <p>
                <span className="font-semibold">Gender</span>{" "}
                <span className="text-gray-500 ml-20">{student.gender}</span>
              </p>
              <p>
                <span className="font-semibold">Date of Birth</span>{" "}
                <span className="text-gray-500 ml-10">{student.dob}</span>
              </p>
              <p>
                <span className="font-semibold">Category</span>{" "}
                <span className="text-gray-500 ml-16">{student.category}</span>
              </p>
              <p>
                <span className="font-semibold">Mother Tongue</span>{" "}
                <span className="text-gray-500 ml-5">
                  {" "}
                  {student.motherTongue}
                </span>
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-white shadow p-6">
            <h3 className="font-semibold mb-3">Primary Contact Info</h3>
            <p>
              <span className="font-semibold">Phone Number</span>{" "}
              <span className="text-gray-500 block"> {student.phone}</span>
            </p>
            <p>
              <span className="font-semibold">Email Address</span>{" "}
              <span className="text-gray-500 block"> {student.email}</span>
            </p>
          </div>
        </div>

        {/* Right Div */}
        <div className="space-y-6 flex-3">
          <div className="flex border-b border-gray-200 mb-4">
            <div className={toggle === 1 ? "show-content" : "content"}>
              <button
                onClick={() => updateToggle(1)}
                className={`px-3 py-2 text-sm flex items-center gap-2 ${
                  toggle === 1
                    ? "text-blue-700 border-b-2 border-blue-700 font-semibold"
                    : "text-gray-500 hover:text-blue-700"
                }`}
              >
                <LuGraduationCap className="text-lg" />
                Summary
              </button>
            </div>
            <div className={toggle === 1 ? "show-content" : "content"}>
              <button
                onClick={() => updateToggle(2)}
                className={`px-3 py-2 text-sm flex items-center gap-2 ${
                  toggle === 2
                    ? "text-blue-700 border-b-2 border-blue-700 font-semibold"
                    : "text-gray-500 hover:text-blue-700"
                }`}
              >
                <LuGraduationCap className="text-lg" />
                Compliances
              </button>
            </div>
            <div className={toggle === 1 ? "show-content" : "content"}>
              <button
                onClick={() => updateToggle(3)}
                className={`px-3 py-2 text-sm flex items-center gap-2 ${
                  toggle === 3
                    ? "text-blue-700 border-b-2 border-blue-700 font-semibold"
                    : "text-gray-500 hover:text-blue-700"
                }`}
              >
                <LuGraduationCap className="text-lg" />
                Addresses
              </button>
            </div>
          </div>
          <div className="bg-white shadow rounded-md p-4">
            <h3 className="font-semibold text-gray-800 mb-3">
              Personal Information
            </h3>
            <div className="-mx-4 border-b border-gray-300 mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
