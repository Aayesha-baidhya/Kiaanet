import React from 'react';
//creating array of objects inside function
const Announcement = () => { 
  const announcements = [ 
    {
      title: "Summer Vacation Holiday Homework",
      description: "The school will remain closed from April 20th to June ...."
    },
    {
      title: "New Academic Session Admission Start(2024-25)",
      description: "An academic term is a portion of an academic year, the time ....",
    },
    {
      title: "Date sheet Final Exam Nursery to Sr.Kg",
      description: "Dear Parents, As the final examination for the session 2024-25 is ....",
    },
    {
      title: "Annual Day Function",
      description: "Annual functions provide a platform for students to showcase their...",
    },
    {
      title: "Summer Vacation Holiday Homework",
      description: "The school will remain closed from April 20th to June 15th for summer ...."
    }
  ];

  return (
    <div className="min-h-screen w-full h-full bg-[#7F95EB] text-white flex items-center justify-center p-4">
      
      {/*Announcement div*/}
      <div className="w-full space-y-4 bg-[#8CA0ED] mt-16 p-4 rounded-2xl max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-2">What's New on SMS!!!</h2>
    {/* Adding Loops*/}
        {announcements.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-4 rounded shadow hover:shadow-lg transition-all relative" 
          >
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
            <span className="absolute bottom-2 right-4 text-black text-lg">»</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
