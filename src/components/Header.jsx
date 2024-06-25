import { Logo } from '@/assets';
import useUser from '@/hooks/useUser';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PuffLoader } from 'react-spinners';

const Header = () => {
	const { data, isLoading, isError } = useUser();
	return (
		<header className='w-full flex items-center justify-between px-4 py-3 lg:px-8 border-b border-gray-300 bg-bgPrimary z-50 gap-12 sticky top-0 '>
			{/* logo */}
			<Link to='/'>
				<img
					src={Logo}
					alt='expressume'
					className='w-8 h-auto object-contain'
				/>
			</Link>
			{/* search */}
			<div className='w-full flex-1 border border-gray-300 px-4 py-1 rounded-md flex items-center justify-between bg-gray-200 '>
				<input
					type='text'
					name='search'
					id='search'
					placeholder='Search here...'
					className='flex-1 h-10 bg-transparent text-base font-semibold outline-none border-none '
				/>
			</div>
			{/* profile */}
			<AnimatePresence>
				{isLoading ? (
					<PuffLoader
						size={40}
						color={'#484fcd'}
					/>
				) : (
					<>
						{data ? (
							<motion.div>
								{data?.photoURLs ? (
									<div className='w-12 h-12 rounded-full relative flex items-center justify-center cursor-pointer'>
										<img
											src={data?.photoURL}
											referrerPolicy='no-referrer'
											className='w-full h-full object-cover rounded-full '
											alt=''
										/>
									</div>
								) : (
									<div className='w-12 h-12 rounded-full flex items-center justify-center bg-blue-200 cursor-pointer'>
                    <p className='uppercase text-2xl font-extrabold text-blue-700 '>{data?.email[0] }</p>
                  </div>
								)}
							</motion.div>
						) : (
							<Link to='/auth'>
								<motion.button>Login</motion.button>
							</Link>
						)}
					</>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
