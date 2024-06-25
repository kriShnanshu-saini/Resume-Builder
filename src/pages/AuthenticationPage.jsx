/* eslint-disable no-unused-vars */
import { Logo } from '@/assets';
import { Button, Footer, Loader } from '@/components';
import useUser from '@/hooks/useUser';
import { useEffect } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

const AuthenticationPage = () => {
	const { data, isError, isLoading } = useUser();

	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoading && data) {
      navigate('/', { replace: true });
    }
	}, [isLoading, data]);

  if(isLoading) return <Loader/>
	return (
		<div className='auth-section '>
			{/* top section */}
			<img
				src={Logo}
				alt='logo'
				className='w-12 h-auto object-contain '
			/>

			{/* main section */}
			<div className='w-full flex flex-1 flex-col items-center justify-center gap-6 '>
				<h1 className='text-2xl lg:text-4xl font-semibold text-blue-700 '>Welcome to Expressume</h1>
				<p className='text-xl text-gray-600 '>express way to create resume</p>
				<h2 className='text-2xl text-gray-600 '>Authenticate</h2>

				<div className=' w-full lg:w-96 rounded-md p-2 flex flex-col items-center justify-start gap-6 '>
					<Button
						Icon={<FaGoogle />}
						label='Sign in with Google'
						provider='GoogleAuthProvider'
					/>
					<Button
						Icon={<FaGithub />}
						label='Sign in with GitHub'
						provider='GithubAuthProvider'
					/>
				</div>
			</div>

			{/* footer */}
			<Footer />
		</div>
	);
};

export default AuthenticationPage;
