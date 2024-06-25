import { AuthenticationPage, HomePage } from '@/pages';
import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route
						path='/*'
						element={<HomePage />}
					/>
					<Route
						path='/auth'
						element={<AuthenticationPage />}
					/>
				</Routes>
			</Suspense>
			<ToastContainer limit={3} newestOnTop={true} position='top-right' pauseOnHover={false} />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default App;
