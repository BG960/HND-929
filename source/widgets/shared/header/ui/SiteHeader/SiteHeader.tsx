import { FC } from 'react';

import { Link } from 'react-router-dom';

export interface SiteHeaderProps {}

export const SiteHeader: FC<SiteHeaderProps> = () => {
  return (
    <div className=" flex justify-between bg-[#f1f0f0] items-center h-24 max-w mx-auto px-4 text-black">
      <h1 className="w-full text-3xl font-bold text-[#00d]">Hyndai</h1>
      <ul className="flex p-4  list-none">
        <li className="p-4 ">
          <Link to="/" className="text-black">
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link to="/about" className="text-black">
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="/episodes" className="text-black">
            Episodes
          </Link>
        </li>
        <li className="p-4">
          <Link to="/contact" className="text-black">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
