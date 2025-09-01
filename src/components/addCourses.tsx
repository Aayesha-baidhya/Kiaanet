"use client";
import React from "react";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LuNotebookText } from "react-icons/lu";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { PiBookOpenText } from "react-icons/pi";
import { zodResolver } from "@hookform/resolvers/zod";
import CommonTextField from "./shared/forms/commonTextField";
import CommonSelectField from "./shared/forms/commonSelectField";
import CommonNumberField from "./shared/forms/commonNUmberField";

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
  internationalDuration: z
    .string()
    .min(1, "International duration is required"),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(Coursesschema),
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
              {/* <input
                type="text"
                placeholder="Official Course Name *"
                {...register("courseName")}
                className={inputClass}
              />
              {errors.courseName && (<p>{errors.courseName.message}</p>)} */}
              <CommonTextField
                label="Official Course Name"
                placeholder="Enter course name"
                registration={register("courseName")}
                error={errors.courseName}
              />
              {/* <select
                {...register("courseType", {
                  required: "Fill the data",
                })}
                className={inputClass}
              >
                <option value="">Course Type *</option>
                <option value="computing">Computing</option>
              </select> */}
              <CommonSelectField
                label="Course type"
                registration={register("courseType")}
                error={errors.courseType}
                options={[
                  { value: "computing", label: "Computing" },
                  { value: "iot", label: "IOT" },
                  { value: "se", label: "Software Engineering" },
                ]}
              />
              <CommonSelectField
                label="Course Delivery Mode"
                registration={register("deliveryMode")}
                error={errors.deliveryMode}
                options={[
                  { value: "online", label: "Online" },
                  { value: "offline", label: "Offline" },
                ]}
              />
              <CommonTextField
                label="Nominal Hours"
                placeholder="Enter the hour"
                registration={register("nominalHours")}
                error={errors.nominalHours}
              />
              <CommonSelectField
                label="Is Concessional"
                registration={register("isConcessional")}
                error={errors.isConcessional}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "yes", label: "No" },
                  { value: "maybe", label: "Maybe" },
                ]}
              />
              <CommonSelectField
                label="Is Priority1 Course"
                registration={register("isPriority")}
                error={errors.isPriority}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "yes", label: "No" },
                ]}
              />
              <CommonTextField
                label="Minimum Units for Vocational Placement"
                placeholder="Enter the appropriate data"
                registration={register("minUnits")}
                error={errors.minUnits}
              />
              <CommonSelectField
                label="Display in Portal"
                registration={register("displayInPortal")}
                error={errors.displayInPortal}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "yes", label: "No" },
                ]}
              />
              <CommonNumberField
                label="Upfront Amount *"
                registration={register("upfrontAmount")}
                error={errors.upfrontAmount}
              />
              <CommonTextField
                label="Study Period Value"
                placeholder="Enter the value"
                registration={register("studyPeriod")}
                error={errors.studyPeriod}
              />
              <select
                {...register("courseDurationType")}
                className={inputClass}
              >
                <option value="">Course Duration Type</option>
                <option value="4">4 year</option>
              </select>
              <CommonSelectField
                label="Display in Portal"
                registration={register("displayInPortal")}
                error={errors.displayInPortal}
                options={[
                  { value: "yes", label: "Yes" },
                  { value: "yes", label: "No" },
                ]}
              />
              <CommonTextField
                label="Domestic Duration Full Time *"
                placeholder="Enter the duration"
                registration={register("domesticDuration")}
                error={errors.domesticDuration}
              />
              <CommonTextField
                label="International Duration Full Time *"
                placeholder="Enter the duration"
                registration={register("internationalDuration")}
                error={errors.internationalDuration}
              />
              <CommonTextField
                label="Holidays"
                placeholder="Enter the holidays"
                registration={register("holidays")}
                error={errors.holidays}
              />
              <input
                type="text"
                placeholder="Duration Part Time"
                {...register("partTimeDuration")}
                className={inputClass}
              />
              <CommonTextField
                label="Holidays"
                placeholder="Enter the holidays"
                registration={register("holidays")}
                error={errors.holidays}
              />
              <input
                type="text"
                placeholder="Total No. of Core *"
                {...register("totalCore")}
                className={inputClass}
              />
              <CommonTextField
                label="Holidays"
                placeholder="Enter the holidays"
                registration={register("holidays")}
                error={errors.holidays}
              />
              <CommonTextField
                label="Total No. of Elective *"
                placeholder="Enter the correct number"
                registration={register("totalElective")}
                error={errors.totalElective}
              />
              <CommonTextField
                label="Total No. of Units *"
                placeholder="Enter the units"
                registration={register("totalUnits")}
                error={errors.totalUnits}
              />
              <CommonTextField
                label="No. of Terms"
                placeholder="Enter the number"
                registration={register("terms")}
                error={errors.terms}
              />
              <CommonTextField
                label="No. of Units Per Term"
                placeholder="Enter the units"
                registration={register("unitsPerTerm")}
                error={errors.unitsPerTerm}
              />
              <CommonTextField
                label="Coordinator"
                placeholder=""
                registration={register("coordinator")}
                error={errors.coordinator}
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
                <CommonSelectField
                  label="For AVETMISS"
                  registration={register("avetmiss")}
                  error={errors.avetmiss}
                  options={[{ value: "NAT00080", label: "NAT00080" }]}
                />
                <CommonTextField
                  label="ASCO Code"
                  placeholder="Enter the Code"
                  registration={register("ascoCode")}
                  error={errors.ascoCode}
                />
                <CommonTextField
                  label="ANZSCO Code"
                  placeholder="Enter the Code"
                  registration={register("anzscoCode")}
                  error={errors.anzscoCode}
                />
                <CommonTextField
                  label="CRICOS Code"
                  placeholder="Enter the Code"
                  registration={register("cricosCode")}
                  error={errors.cricosCode}
                />
                <CommonTextField
                  label="NTIS Course Code"
                  placeholder=""
                  registration={register("ntisCode")}
                  error={errors.ntisCode}
                />
                <CommonSelectField
                  label="Recognition Status *"
                  registration={register("recognitionStatus")}
                  error={errors.recognitionStatus}
                  options={[{ value: "global", label: "Global" }]}
                />
                <CommonTextField
                  label="Qualification Category"
                  placeholder=""
                  registration={register("qualificationCategory")}
                  error={errors.qualificationCategory}
                />
                <CommonTextField
                  label="Qualification Field of Education"
                  placeholder=""
                  registration={register("qualificationField")}
                  error={errors.qualificationField}
                />
                <CommonSelectField
                  label="Report to HEPCAT"
                  registration={register("hepcat")}
                  error={errors.hepcat}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "yes", label: "No" },
                  ]}
                />
                <CommonTextField
                  label="EFTSL"
                  placeholder=""
                  registration={register("eftsl")}
                  error={errors.eftsl}
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
                <CommonSelectField
                  label="Is Placement Required?"
                  registration={register("placementRequired")}
                  error={errors.placementRequired}
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "yes", label: "No" },
                  ]}
                />
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
