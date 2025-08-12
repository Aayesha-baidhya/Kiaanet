import { FaUserGraduate, FaChalkboardTeacher, FaUsers, FaBook } from "react-icons/fa";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Students */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col">
        <div className="flex items-center gap-2">
          <FaUserGraduate className="text-red-500 text-xl" />
          <span className="text-lg font-semibold">3,654</span>
          <span className="ml-auto text-xs text-white bg-red-500 px-2 py-0.5 rounded">
            1.2%
          </span>
        </div>
        <p className="text-sm text-gray-500">Total Students</p>
        <p className="text-xs text-gray-400 mt-1">
          Active: 3643  Inactive: 11
        </p>
      </div>

      {/* Teachers */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col">
        <div className="flex items-center gap-2">
          <FaChalkboardTeacher className="text-blue-500 text-xl" />
          <span className="text-lg font-semibold">284</span>
          <span className="ml-auto text-xs text-white bg-blue-500 px-2 py-0.5 rounded">
            1.2%
          </span>
        </div>
        <p className="text-sm text-gray-500">Total Teachers</p>
        <p className="text-xs text-gray-400 mt-1">
          Active: 254  Inactive: 30
        </p>
      </div>

      {/* Staff */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col">
        <div className="flex items-center gap-2">
          <FaUsers className="text-yellow-500 text-xl" />
          <span className="text-lg font-semibold">162</span>
          <span className="ml-auto text-xs text-white bg-yellow-500 px-2 py-0.5 rounded">
            1.2%
          </span>
        </div>
        <p className="text-sm text-gray-500">Total Staff</p>
        <p className="text-xs text-gray-400 mt-1">
          Active: 161  Inactive: 2
        </p>
      </div>

      {/* Subjects */}
      <div className="bg-white shadow rounded-lg p-4 flex flex-col">
        <div className="flex items-center gap-2">
          <FaBook className="text-green-500 text-xl" />
          <span className="text-lg font-semibold">82</span>
          <span className="ml-auto text-xs text-white bg-green-500 px-2 py-0.5 rounded">
            1.2%
          </span>
        </div>
        <p className="text-sm text-gray-500">Total Subjects</p>
        <p className="text-xs text-gray-400 mt-1">
          Active: 81  Inactive: 1
        </p>
      </div>
    </div>
  );
}
