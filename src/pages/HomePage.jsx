import { Header } from '@/components';

const HomePage = () => {
	return (
		<div className='w-full flex items-center justify-center flex-col '>
			{/* header */}
			<Header />
			<main>{/* custom routes */}</main>
		</div>
	);
};

export default HomePage;
