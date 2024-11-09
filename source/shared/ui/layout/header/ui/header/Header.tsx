"use client";
import { LocaleSwitcher } from '@/source/shared/ui';
import { HeaderLinks } from '@/source/shared/ui/layout/header/ui';
import { SiteLogo } from '@/source/shared/ui/site-logo';
import { ReactNode } from 'react';
import Link from 'next/link';

export function Header({ slot }: { slot?: ReactNode }) {
	return (
<div className="flex justify-between items-center h-24 bg-white max-w mx-auto px-4 w-full">
      <div className="flex items-center space-x-2">
	  <div className='max-w-[272px] w-full'>
						<SiteLogo />
					</div>
      </div>
      <ul className="flex space-x-6 text-gray-700 text-sm list-none">
      <li className="p-4">
        <Link href="/" className="hover:text-blue-600">Модельный ряд</Link>
      </li>
      <li className="p-4">
        <Link href="/special-offers" className="hover:text-blue-600">Специальные предложения</Link>
      </li>
      <li className="p-4">
        <Link href="/online-services" className="hover:text-blue-600">Онлайн-сервисы</Link>
      </li>
      <li className="p-4">
        <Link href="/service" className="hover:text-blue-600">Сервисное обслуживание</Link>
      </li>
      <li className="p-4">
        <Link href="/brand" className="hover:text-blue-600">Бренд</Link>
      </li>
    </ul>
    </div>
	);
}
