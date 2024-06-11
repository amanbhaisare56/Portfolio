import React from "react";

const Education = () => {
  return (
    <div className="bg-[#534d4d00]">
      <div className="container mx-auto px-4 py-8 ">
        <h3 className="w-full mb-[0.5rem] text-xl sm:text-xl md:text-2xl xl:text-[3rem] font-semibold py-5 xl:py-10 text-white text-center ">
          Edu<span className="text-purple-500">cation</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* College Section */}
          <div className="education-section text-black sm:px-5">
            <div className="flex items-center mb-2 bg-white py-5 px-5 rounded-lg cursor-pointer hover:shadow-inner  hover:scale-105 shadow-lg">
              <div className="ml-4">
                <h4 className="text-lg font-semibold">IIIT RANCHI</h4>
                <p className="text-sm text-purple-600">CGPA : 7.79</p>
                <p className="text-sm text-gray-600">B.Tech</p>
                <p className="text-sm text-gray-600">
                  Computer Science and Engineering
                </p>
                <p className="text-sm text-gray-600">2020 - 2024</p>
              </div>
            </div>
            {/* Add more education items as needed */}
          </div>
          <div className="education-section text-black sm:px-5">
            <div className="flex items-center mb-2 bg-white py-5 px-5 rounded-lg cursor-pointer hover:shadow-inner  hover:scale-105 shadow-lg">
              <div className="ml-4">
                <h4 className="text-lg font-semibold">
                  Maa Nihal Public School
                </h4>
                <p className="text-sm text-purple-600">Percentage : 65%</p>
                <p className="text-sm text-gray-600">Intermediate</p>
                <p className="text-sm text-gray-600">Science stream(PCM)</p>
                <p className="text-sm text-gray-600">2018 - 2020</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
