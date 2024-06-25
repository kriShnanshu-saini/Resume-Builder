/* eslint-disable react/prop-types */
import { FaChevronRight } from 'react-icons/fa6';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/config/firebase.config';

const Button = ({ Icon, label, provider, ...rest }) => {
	const handleClick = async () => {
		const googleAuthProvider = new GoogleAuthProvider();
		const githubAuthProvider = new GithubAuthProvider();
		switch (provider) {
			case 'GoogleAuthProvider':
				await signInWithPopup(auth, googleAuthProvider)
					.then(result => console.log('result: ', result))
					.catch(err => console.error(`GoogleAuthError/Error: ${err.message}`));
				break;
			case 'GithubAuthProvider':
				await signInWithPopup(auth, githubAuthProvider)
					.then(result => console.log('result: ', result))
					.catch(err => console.error(`GitHubAuthError/Error: ${err.message}`));
				break;
			default:
				await signInWithPopup(auth, googleAuthProvider)
					.then(result => console.log('result: ', result))
					.catch(err => console.error(`GoogleAuthError/Error: ${err.message}`));
				break;
		}
	};

	return (
		<button
			onClick={handleClick}
			className='flex items-center justify-between gap-x-4 border border-blue-700 px-3 py-2 rounded-md hover:bg-blue-600 group cursor-pointer active:scale-95 duration-150 hover:shadow-md'
			{...rest}>
			{Icon && <div className='text-primary text-md group-hover:text-white '>{Icon}</div>}
			<p className='text-primary group-hover:text-white '>{label}</p>
			<FaChevronRight className='text-primary text-base group-hover:text-white ' />
		</button>
	);
};

export default Button;
