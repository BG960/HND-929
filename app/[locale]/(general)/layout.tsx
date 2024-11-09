import { Header } from '@/source/shared/ui/layout';
import { Footer } from '@/source/shared/ui/layout/footer/Footer';
import type { PropsWithChildren } from 'react';

export default function GeneralLayout({
	children,
}: PropsWithChildren<unknown>) {
	return (
		<>
			<Header />
			<main className='animate-fade animate-once '>{children}</main>
			<Footer />
		</>
	);
}
