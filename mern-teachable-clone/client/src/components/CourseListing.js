import React from 'react';

const CourseListing = () => {
  // Sample course data
  const courses = [
    {
      id: 1,
      url: 'https://ajitfhamacademy.teachable.com/digital-products/517175',
      image: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/RA5M4ysbQueaHmhOMy4v',
      title: 'Course and exercise book 2 bac sm',
      fileCount: '1',
      description: 'This book contains all the courses and exercises for level 2 Bac Sm with the correction of the exercises.',
      authorImage: 'https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:30,height:30/https://www.filepicker.io/api/file/lrMGynjUSuyo0x8IHiQn',
      authorName: 'zakaria bouicha',
      price: 'FREE',
    },
    // Add more course objects here if needed
  ];

  return (
    <div className="flex flex-wrap -mx-4 mt-8 py-8 px-8">
      {courses.map((course) => (
        <div key={course.id} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-6">
          <a href={course.url} className="block bg-white shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <img
               className="w-full object-cover"
               style={{ height: 'auto', aspectRatio: '16/9' }}
               src={course.image}
               alt={course.title}
             
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2" title={course.title}>
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 mb-2">{course.fileCount} File</p>
              <p className="text-sm text-gray-600 mb-4">{course.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={course.authorImage}
                    alt={course.authorName}
                  />
                  <span className="ml-2">{course.authorName}</span>
                </div>
                <span className="text-green-600 font-bold">{course.price}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default CourseListing;
