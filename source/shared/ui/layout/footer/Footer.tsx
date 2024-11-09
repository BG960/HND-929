"use client"
import { SiteLogo } from '@/source/shared/ui/site-logo';
import { ReactNode } from 'react';
import Link from 'next/link';

export function Footer({ slot }: { slot?: ReactNode }) {
	return (
		<div className="bg-blue-900 text-white py-8">
		<div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
		  <div className="mb-6 md:mb-0">
			<img src="path_to_hyundai_logo.png" alt="Hyundai Logo" className="h-10" />
		  </div>
		  <div className="flex flex-wrap justify-between w-full md:w-auto">
			<div className="mb-6 md:mb-0 md:mr-8">
			  <h3 className="font-semibold mb-2">Сервис</h3>
			  <ul className="text-sm space-y-2">
				<li><Link href="/service-promotions" className="hover:underline">Сервисные акции</Link></li>
				<li><Link href="/warranty" className="hover:underline">Гарантия</Link></li>
				<li><Link href="/maintenance" className="hover:underline">Обслуживание</Link></li>
				<li><Link href="/service-appointment" className="hover:underline">Запись на сервис</Link></li>
			  </ul>
			</div>
	
			<div className="mb-6 md:mb-0 md:mr-8">
			  <h3 className="font-semibold mb-2">Покупателю</h3>
			  <ul className="text-sm space-y-2">
				<li><Link href="/test-drive" className="hover:underline">Тест-драйв</Link></li>
				<li><Link href="/credit-options" className="hover:underline">Авто в кредит</Link></li>
				<li><Link href="/corporate-customers" className="hover:underline">Корпоративным клиентам</Link></li>
			  </ul>
			</div>
	
			<div className="mb-6 md:mb-0 md:mr-8">
			  <h3 className="font-semibold mb-2">О Hyundai</h3>
			  <ul className="text-sm space-y-2">
				<li><Link href="/brand-history" className="hover:underline">История бренда</Link></li>
				<li><Link href="/vacancies" className="hover:underline">Вакансии</Link></li>
			  </ul>
			</div>
		
			<div>
			  <h3 className="font-semibold mb-2">Контакт центр</h3>
			  <ul className="text-sm space-y-2">
				<li>📞 +996(704)530003</li>
				<li>📞 +996(555)530003</li>
				<li>📞 +996(775)530003</li>
				<li>📞 +996(778)530003</li>
				<li>📞 +996(312)530003</li>
			  </ul>
			</div>
		  </div>
		</div>
	  </div>
	);
}