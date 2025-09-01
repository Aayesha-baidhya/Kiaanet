import Link from "next/link";
import React from "react";
import { CiSquarePlus } from "react-icons/ci";

const Page = () => {
  const listOfCourse = [
    { id: 1, name: "IOT", description: "This is IOT" },
    { id: 2, name: "Database", description: "This is Database" },
    {
      id: 3,
      name: "Computing",
      description: "This is fundamentals of computing",
    },
  ];

  return (
    <>
      <div className="flex items-center justify-between my-4">
        <div>
          <div>These are the available courses.</div>
          <h1 className="text-xl font-bold">List of Courses</h1>
        </div>

        <Link
          href="/dashboard/courses/add_courses"
          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm flex items-center gap-2 inline-flex"
        >
          <CiSquarePlus className="text-white text-lg" />
          Add Courses
        </Link>
      </div>

      {/* Courses list */}
      {listOfCourse.map((item) => (
        <div className="py-4" key={item.id}>
          <div>
            <Link href={`/dashboard/courses/${item.name}`}>{item.name}</Link>
          </div>
          <div>{item.description}</div>
        </div>
      ))}
    </>
  );
};

export default Page;
