import React from "react";

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
  },
};

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const student = students[id];

  if (!student) {
    return <div className="p-6">Student not found.</div>;
  }

  return (
    <div className="">
      {/* ===== Page Header ===== */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 border-b bg-white">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Students List</h1>
          <div className="text-sm text-gray-500">
            Dashboard / Students /{" "}
            <span className="text-gray-900 font-medium">
              {" "}
              View Student Details
            </span>
          </div>
        </div>
      </div>

      {/* ===== Student Card ===== */}
      <div className="bg-white shadow rounded-xl p-6 flex items-center gap-6">
        <div className="w-full bg-gray-200 rounded-md flex items-center justify-center text-sm" />
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">{student.name}</h2>
            <span
              className={`px-2 py-1 rounded text-xs font-medium ${
                student.status === "Active"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {student.status}
            </span>
          </div>
          <p className="text-blue-600 text-sm font-medium">
            {student.admissionNo}
          </p>
        </div>
      </div>

      {/* ===== Info Sections ===== */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold mb-3">Basic Information</h3>
          <p>Roll No: {student.rollNo}</p>
          <p>Gender: {student.gender}</p>
          <p>Date of Birth: {student.dob}</p>
          <p>Category: {student.category}</p>
          <p>Mother Tongue: {student.motherTongue}</p>
        </div>

        {/* Contact Info */}
        <div className="bg-white shadow rounded-xl p-4">
          <h3 className="font-semibold mb-3">Primary Contact Info</h3>
          <p>Phone: {student.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
