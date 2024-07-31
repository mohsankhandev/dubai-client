import React from 'react';

const Feacturec = () => {
  const boxes = [
    {
      id: 1,
      title: 'Mathematics 2Bac Sm',
      coursesCount: 6,
      price: '98 د.م.',
      imageUrl: 'https://cdn.filestackcontent.com/elFL8LNT4SYTTmsLbgMM',
      link: '/p/2bac-sm-annee-maths',
    },
    {
      id: 2,
      title: 'Physics chemistry 2Bac Sm',
      coursesCount: 8,
      price: '98 د.م.',
      imageUrl: 'https://cdn.filestackcontent.com/6bSGZbicTqnYpgZiLqau',
      link: '/p/2bac-sm-annee-physique-chimie',
    },
  ];

  return (
    <section className="py-10 px-5 bg-red-600">
      <div className="max-w-7xl mx-auto px-5 py-5 bg-yellow-300">
        <h2 className="text-3xl font-bold text-center mb-5">2 Bac sm packs</h2>
        <div className="flex flex-wrap justify-center gap-5">
          {boxes.map((box) => (
            <div
              key={box.id}
              className="bg-gray-100 rounded-lg transition-shadow duration-200 ease-in-out hover:shadow-lg w-full sm:w-[290px] flex flex-col"
            >
              <a href={box.link} className="block">
                <div className="relative h-0 pb-[56.25%] overflow-hidden rounded-t-lg">
                  <img
                    src={box.imageUrl}
                    alt={box.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col justify-between items-center h-[225px]">
                  <h3 className="text-xl font-semibold mb-2 text-center">{box.title}</h3>
                  <div className="flex justify-between w-full">
                    <span className="text-left">{box.coursesCount && `Courses: ${box.coursesCount}`}</span>
                    <span className="text-right text-red-500">{box.price}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feacturec;
