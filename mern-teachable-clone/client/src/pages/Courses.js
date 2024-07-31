import React, { useState } from 'react';
import CourseListing from '../components/CourseListing';

const CourseFilter = () => {
  const [branchFilter, setBranchFilter] = useState('all');
  const [teacherFilter, setTeacherFilter] = useState('all');
  const [branchOpen, setBranchOpen] = useState(false);
  const [teacherOpen, setTeacherOpen] = useState(false);

  return (
    <>    <div className="bg-red-400 flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-[80px] items-center py-4 px-4 ">

      {/* Branch Filter */}
      <div className="relative w-full md:w-1/3">
        <label className="text-gray-700 font-medium mb-2 block">Option (Branch)</label>
        <button
          onClick={() => setBranchOpen(!branchOpen)}
          className="bg-gray-200 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full flex justify-between items-center"
        >
          {branchFilter}
          <span className="ml-2">&#9662;</span>
        </button>
        {branchOpen && (
          <ul
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-1 z-40"
            role="menu"
          >
            <li>
              <button
                onClick={() => {
                  setBranchFilter('all');
                  setBranchOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setBranchFilter('2nd year baccalaureate in mathematical sciences');
                  setBranchOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                2nd year baccalaureate in mathematical sciences (26)
              </button>
            </li>
            {/* Add other options similarly */}
          </ul>
        )}
      </div>

      {/* Teacher Filter */}
      <div className="relative w-full md:w-1/3">
        <label className="text-gray-700 font-medium mb-2 block">Teacher</label>
        <button
          onClick={() => setTeacherOpen(!teacherOpen)}
          className="bg-gray-200 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg w-full flex justify-between items-center"
        >
          {teacherFilter}
          <span className="ml-2">&#9662;</span>
        </button>
        {teacherOpen && (
          <ul
            className="absolute bg-white border border-gray-300 rounded-lg shadow-lg w-full mt-1 z-40"
            role="menu"
          >
            <li>
              <button
                onClick={() => {
                  setTeacherFilter('all');
                  setTeacherOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                All
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTeacherFilter('Alaeddine ABIDA');
                  setTeacherOpen(false);
                }}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Alaeddine ABIDA
              </button>
            </li>
            {/* Add other options similarly */}
          </ul>
        )}
      </div>

      {/* Search Form */}
      {/* <div className="w-full md:w-1/3 mt-[90px] flex flex-col justify-end">
      <h1></h1>
        <form role="search" method="get" action="/courses" className="w-full">
          <div className="relative">
            <input
              className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
              id="search-courses"
              name="query"
              placeholder="Search for a course"
              type="text"
            />
            <button
              aria-label="Search Courses"
              id="search-course-button"
              className="absolute right-0 top-0 mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
              type="submit"
            >
              <i className="fa fa-search"></i>
            </button>
          </div>
        </form>
      </div> */}
      <div className="w-full md:w-1/3 mt-[90px] flex flex-col justify-end">
      {/* Search Form */}
      <form role="search" method="get" action="/courses" className="w-full">
        <div className="relative flex items-center">
          <input
            className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
            id="search-courses"
            name="query"
            placeholder="Search for a course"
            type="text"
          />
          <button
            aria-label="Search Courses"
            id="search-course-button"
            className="absolute right-0 top-0 mt-2 mr-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
            type="submit"
          >
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
    </div>
<CourseListing />
    </>

  );
};

export default CourseFilter;
