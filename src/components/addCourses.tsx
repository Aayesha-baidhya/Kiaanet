"use client";
import React from "react";
import { z } from "zod";
import {  SubmitHandler, useForm } from "react-hook-form";
import { LuNotebookText } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";

const Coursesschema = z.object({
  courseName: z.string().min(1, "Course name is required"),
  courseType: z.string().min(1, "Course type is required"),
  deliveryMode: z.string().optional(),
  nominalHours: z.string().optional(),
  isConcessional: z.string().optional(),
  isPriority: z.string().optional(),
  minUnits: z.string().optional(),
  displayInPortal: z.string().optional(),
  upfrontAmount: z.string().min(1, "Upfront amount is required"),
  studyPeriod: z.string().optional(),
  courseDurationType: z.string().optional(),
  domesticDuration: z.string().min(1, "Domestic duration is required"),
  internationalDuration: z.string().min(1, "International duration is required"),
  holidays: z.string().optional(),
  partTimeDuration: z.string().optional(),
  totalCore: z.string().min(1, "Total core units required"),
  totalElective: z.string().min(1, "Total elective units required"),
  totalUnits: z.string().min(1, "Total units required"),
  terms: z.string().optional(),
  unitsPerTerm: z.string().optional(),
  coordinator: z.string().optional(),
  avetmiss: z.string().optional(),
  ascoCode: z.string().optional(),
  anzscoCode: z.string().optional(),
  cricosCode: z.string().optional(),
  ntisCode: z.string().optional(),
  recognitionStatus: z.string().min(1, "Recognition status is required"),
  qualificationCategory: z.string().optional(),
  qualificationField: z.string().optional(),
  hepcat: z.string().optional(),
  eftsl: z.string().optional(),
  placementRequired: z.string().optional(),
});

type Courses = z.infer<typeof Coursesschema>;

const AddCourses = () => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(Coursesschema)
  });

  const onSubmit: SubmitHandler<Courses> = (data: Courses) => {
    console.log(data);
  };

  const inputClass =
    "w-full border rounded-lg p-3 outline-none text-sm focus:ring-1 focus:ring-blue-500";

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between px-6 py-4 bg-white rounded-xl shadow">
        <div>
          <h1 className="text-lg font-semibold text-gray-900">Add Course</h1>
          <div className="text-sm text-gray-500">
            Dashboard / Courses /{" "}
            <span className="text-gray-900 font-medium">Add Course</span>
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Left Column */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-md font-semibold mb-4 flex items-center gap-2">
              <MdOutlineLibraryBooks className="text-lg" />
              Course Details
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Official Course Name *"
                {...register("courseName")}
                className={inputClass}
              />
              <select
                {...register("courseType", {
                  required: "Fill the data",
                })}
                className={inputClass}
              >
                <option value="">Course Type *</option>
              </select>
              <select {...register("deliveryMode")} className={inputClass}>
                <option value="">Course Delivery Mode</option>
              </select>
              <input
                type="text"
                placeholder="Nominal Hours"
                {...register("nominalHours")}
                className={inputClass}
              />
              <select {...register("isConcessional")} className={inputClass}>
                <option value="">Is Concessional</option>
              </select>
              <select {...register("isPriority")} className={inputClass}>
                <option value="">Is Priority1 Course</option>
              </select>
              <input
                type="text"
                placeholder="Minimum Units for Vocational Placement"
                {...register("minUnits")}
                className={inputClass}
              />
              <select {...register("displayInPortal")} className={inputClass}>
                <option value="">Display in Portal</option>
              </select>
              <input
                type="text"
                placeholder="Upfront Amount *"
                {...register("upfrontAmount")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Study Period Value"
                {...register("studyPeriod")}
                className={inputClass}
              />
              <select
                {...register("courseDurationType")}
                className={inputClass}
              >
                <option value="">Course Duration Type</option>
              </select>
              <input
                type="text"
                placeholder="Domestic Duration Full Time *"
                {...register("domesticDuration")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="International Duration Full Time *"
                {...register("internationalDuration")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Holidays"
                {...register("holidays")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Duration Part Time"
                {...register("partTimeDuration")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Total No. of Core *"
                {...register("totalCore")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Total No. of Elective *"
                {...register("totalElective")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Total No. of Units *"
                {...register("totalUnits")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="No. of Terms"
                {...register("terms")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="No. of Units Per Term"
                {...register("unitsPerTerm")}
                className={inputClass}
              />
              <input
                type="text"
                placeholder="Coordinator"
                {...register("coordinator")}
                className={inputClass}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            {/* Course Classification */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-md font-semibold mb-4 flex items-center gap-2">
                <LuNotebookText className="text-lg" />
                Course Classification and Reporting
              </h2>
              <div className="space-y-4">
                <select {...register("avetmiss")} className={inputClass}>
                  <option value="">For AVETMISS</option>
                </select>
                <input
                  type="text"
                  placeholder="ASCO Code"
                  {...register("ascoCode")}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="ANZSCO Code"
                  {...register("anzscoCode")}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="CRICOS Code"
                  {...register("cricosCode")}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="NTIS Course Code"
                  {...register("ntisCode")}
                  className={inputClass}
                />
                <select
                  {...register("recognitionStatus")}
                  className={inputClass}
                >
                  <option value="">Recognition Status *</option>
                </select>
                <input
                  type="text"
                  placeholder="Qualification Category"
                  {...register("qualificationCategory")}
                  className={inputClass}
                />
                <input
                  type="text"
                  placeholder="Qualification Field of Education"
                  {...register("qualificationField")}
                  className={inputClass}
                />
                <select {...register("hepcat")} className={inputClass}>
                  <option value="">Report to HEPCAT</option>
                </select>
                <input
                  type="text"
                  placeholder="EFTSL"
                  {...register("eftsl")}
                  className={inputClass}
                />
              </div>
            </div>

            {/* Placement Information */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-md font-semibold mb-4 flex items-center gap-2">
                <PiBookOpenText className="text-lg" />
                Placement Information
              </h2>
              <div className="space-y-4">
                <select
                  {...register("placementRequired")}
                  className={inputClass}
                >
                  <option value="">Is Placement Required?</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button type="button" className="px-4 py-2 border rounded-lg">
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Add New Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCourses;
