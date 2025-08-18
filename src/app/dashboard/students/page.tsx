"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FiPhone, FiRefreshCw, FiSearch } from "react-icons/fi";
import { LuPrinter } from "react-icons/lu";
import { CiFilter, CiLock, CiSquarePlus } from "react-icons/ci";
import { TbFileArrowRight } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdDelete, MdOutlineEmail } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";
import {
  FaArrowUp,
  FaBan,
  FaEye,
  FaRegCalendarAlt,
  FaSort,
  FaUserEdit,
} from "react-icons/fa";
import { FcGenericSortingDesc } from "react-icons/fc";
import { RxDragHandleDots1 } from "react-icons/rx";

const Student = () => {
  const [menuPosition, setMenuPosition] = useState<{
    index: number;
    openUp: boolean;
  } | null>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuPosition &&
        buttonRefs.current[menuPosition.index] &&
        !buttonRefs.current[menuPosition.index]?.contains(e.target as Node)
      ) {
        setMenuPosition(null);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [menuPosition]);
  const listOfStds = [
    {
      admissionNO: "AD9892434",
      rollNo: 35013,
      name: "Aviana Shrestha",
      class: "III",
      section: "A",
      gender: "Female",
      status: "Active",
      joinDate: "25 Mar 2024",
      dob: "10 Jan 2015",
    },
    {
      admissionNO: "AD9892433",
      rollNo: 35014,
      name: "Joaann",
      class: "IV",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "18 Mar 2024",
      dob: "19 Aug 2014",
    },
    {
      admissionNO: "AD9892432",
      rollNo: 35011,
      name: "Kathleen",
      class: "II",
      section: "A",
      gender: "Female",
      status: "Active",
      joinDate: "15 Mar 2024",
      dob: "05 Dec 2015",
    },
    {
      admissionNO: "AD9892431",
      rollNo: 35010,
      name: "Gifford",
      class: "I",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "27 Feb 2024",
      dob: "22 Mar 2018",
    },
    {
      admissionNO: "AD9892430",
      rollNo: 35009,
      name: "Lisa",
      class: "II",
      section: "B",
      gender: "Female",
      status: "Inactive",
      joinDate: "13 Feb 2024",
      dob: "13 May 2017",
    },
    {
      admissionNO: "AD9892429",
      rollNo: 35008,
      name: "Ralph",
      class: "III",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "11 Feb 2024",
      dob: "20 Jun 2015",
    },
    {
      admissionNO: "AD9892429",
      rollNo: 35008,
      name: "Ralph",
      class: "III",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "11 Feb 2024",
      dob: "20 Jun 2015",
    },
    {
      admissionNO: "AD9892429",
      rollNo: 35008,
      name: "Ralph",
      class: "III",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "11 Feb 2024",
      dob: "20 Jun 2015",
    },
    {
      admissionNO: "AD9892429",
      rollNo: 35008,
      name: "Ralph",
      class: "III",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "11 Feb 2024",
      dob: "20 Jun 2015",
    },
    {
      admissionNO: "AD9892429",
      rollNo: 35008,
      name: "Ralph",
      class: "III",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "11 Feb 2024",
      dob: "20 Jun 2015",
    },
    {
      admissionNO: "AD9892429",
      rollNo: 35008,
      name: "Ralph",
      class: "III",
      section: "B",
      gender: "Male",
      status: "Active",
      joinDate: "11 Feb 2024",
      dob: "20 Jun 2015",
    },
  ];

  return (
    <div className="">
      {/* ===== Page Header ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 border-b bg-white">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Students List</h1>
          <div className="text-sm text-gray-500">
            Dashboard / Students /{" "}
            <span className="text-gray-900 font-medium"> All Students</span>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center space-x-2 mt-3">
          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <FiRefreshCw className="text-black" />
          </button>

          <button className="p-2 border rounded-lg hover:bg-gray-100">
            <LuPrinter className="text-black" />
          </button>

          <button className="flex items-center space-x-1 border-gray-500 rounded-md px-3 py-2 hover:bg-gray-300 text-sm">
            <TbFileArrowRight className="text-black" />
            <span>Export</span>
            <RiArrowDropDownLine className="text-black" />
          </button>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2">
            <CiSquarePlus className="text-white text-lg" />
            Add Student
          </button>
        </div>
      </div>

      {/* ===== Students List Card ===== */}
      <div className="bg-white rounded-lg shadow m-6">
        {/* Card Header */}
        <div className="p-4 border-b flex items-center justify-between gap-2">
          <h1 className="text-md font-bold text-gray-900">Students List</h1>
          <div className="flex items-center gap-3 ml-6 flex-wrap">
            <button className=" border rounded-lg hover:bg-gray-100 px-3 py-2 gap-4 flex items-center">
              <FaRegCalendarAlt />
              15 July, 2025 - 13 August, 2025
            </button>
            <button className=" border rounded-lg hover:bg-gray-100 px-3 py-2 gap-0.5 flex items-center">
              <CiFilter />
              Filter
              <RiArrowDropDownLine className="text-black" />
            </button>

            <button className=" border rounded-lg bg-blue-600 text-white px-2 py-2 gap-2 flex items-center">
              <FcGenericSortingDesc />
            </button>
            <button className=" border rounded-lg hover:bg-gray-100 px-2 py-2 gap-2 flex items-center">
              <RxDragHandleDots1 />
            </button>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="text-sm text-left text-gray-600 px-4">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center">
                    Admission No
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>

                <th className="px-4 py-3 whitespace-nowrap">
                  <div className="flex items-center justify-between">
                    Roll No
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    Name
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-2 py-3">
                  <div className="flex items-center justify-between">
                    Class
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-2 py-3">
                  <div className="flex items-center">
                    Section
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    Gender
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    Status
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="whitespace-nowrap">Date of Join</div>
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-4 py-3">
                  <div className="flex items-center whitespace-nowrap">
                    DOB
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
                <th className="px-4 py-3">
                  <div className="flex items-center justify-between">
                    Action
                    <button className="text-gray-500 ml-2">
                      <FaSort />
                    </button>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {listOfStds.map((student, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3 text-blue-600 font-medium">
                    <Link href={`/students/${student.admissionNO}`}>
                      {student.admissionNO}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{student.rollNo}</td>
                  <td className="px-4 py-3 flex items-center space-x-2">
                    <span>{student.name}</span>
                  </td>
                  <td className="px-4 py-3">{student.class}</td>
                  <td className="px-4 py-3">{student.section}</td>
                  <td className="px-4 py-3">{student.gender}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        student.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{student.joinDate}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{student.dob}</td>
                  <td className="px-4 py-3 flex space-x-2">
                    <button className="p-2 rounded hover:bg-gray-100">
                      <FiSearch />
                    </button>
                    <button className="p-2 rounded hover:bg-gray-100">
                      <FiPhone />
                    </button>
                    <button className="p-2 rounded hover:bg-gray-100">
                      <MdOutlineEmail />
                    </button>
                    <button className="bg-gray-500 text-white rounded-lg text-sm flex items-center whitespace-nowrap px-3">
                      Collect Fees
                    </button>
                    {/* Trigger Button */}
                    <div>
                      <div className="relative">
                        <button
                          ref={(el) => {
                            buttonRefs.current[idx] = el;
                          }}
                          className="p-2 rounded hover:bg-gray-100"
                          onClick={(e) => {
                            e.stopPropagation();
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const shouldOpenUp =
                              window.innerHeight - rect.bottom < 200; // if less than 200px space below
                            setMenuPosition({
                              index: idx,
                              openUp: shouldOpenUp,
                            });
                          }}
                        >
                          <SlOptionsVertical />
                        </button>
                        {menuPosition?.index === idx && (
                          <div
                            className={`absolute right-5 z-50 w-48 bg-white border rounded shadow-lg  ${
                              menuPosition.openUp ? "bottom-full" : "top-full"
                            }`}
                          >
                            <ul className="flex flex-col">
                            <Link href={`/students/${student.admissionNO}`}>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <FaEye /> View Student
                              </li>
                              </Link>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <FaUserEdit /> Edit
                              </li>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <CiLock />
                                Login Details
                              </li>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <FaBan /> Disable
                              </li>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <FaArrowUp /> Promote Student
                              </li>
                              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <MdDelete /> Delete
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Student;
