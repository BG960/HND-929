import React from 'react';
import { Link } from 'react-router-dom';

interface Episode {
  image: string;
  category: string;
  number: string;
  title: string;
  description: string;
}

interface INewsView {
  episodes: Episode[];
}
const newsItems = [
  {
    id: 1,
    date: '5 сентября, 2024',
    title: 'Совершенно новый SANTA FE',
    description: 'Подводим итоги 2023 года Hyundai',
    imageUrl: 'path/to/image1.jpg',
    link: '/news/1',
  },
  {
    id: 2,
    date: '5 сентября, 2024',
    title: 'Hyundai Premium Bishkek',
    description: 'Автомобильный сервис премиального',
    imageUrl: 'path/to/image2.jpg',
    link: '/news/2',
  },
  // Add more items as needed
];

export function NewsView({ episodes }: INewsView) {
  return (
    <section className="bg-white py-8 px-4">
      <h1 className="text-center text-3xl font-semibold mb-6">Новости</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {newsItems.map((item) => (
          <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
            <Link to={item.link}>
              <img src={item.imageUrl} alt={item.title} className="w-full h-40 object-cover" />
            </Link>
            <div className="p-4">
              <p className="text-sm text-gray-500">{item.date}</p>
              <Link to={item.link} className="text-lg font-semibold hover:text-blue-500">
                {item.title}
              </Link>
              <p className="text-gray-700 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8"></div>
    </section>
  );
}

