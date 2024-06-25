import { getUserDetails } from '@/api';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const useUser = () => {
	const { data, isLoading, isError, refetch } = useQuery(
		'user',
		async () => {
			try {
				const userDetails = await getUserDetails();
				console.log('useUser.js: ', userDetails);
				return userDetails;
			} catch (err) {
				if (!err.message.includes('not authenticated')) toast.error('Something went wrong...');
			}
		},
		{ refetchOnWindowFocus: false }
	);
	return { data, isLoading, isError, refetch };
};

export default useUser;
