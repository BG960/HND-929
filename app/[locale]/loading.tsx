import { Loader } from '@/source/shared/ui';

export default function Loading() {
	return (
		<div className='grid place-items-center w-screen h-screen'>
			<Loader />
		</div>
	);
}
