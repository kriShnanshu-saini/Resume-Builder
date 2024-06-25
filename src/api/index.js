import { auth, db } from '@/config/firebase.config';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

export const getUserDetails = () => {
	// returning promise as every api function in react-query returns a promise
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged(userCred => {
			if (userCred) {
				const userData = userCred.providerData[0];
				console.log('userdata: ', userData);
				console.log('userCred: ', userCred);
				const unsubscribe = onSnapshot(doc(db, 'users', userData?.uid), _doc => {
					if (_doc.exists()) {
						resolve(_doc.data());
					} else {
						setDoc(doc(db, 'users', userData?.uid), userData)
                        .then(() => resolve(userData));
					}
				});
				return unsubscribe;
			} else {
				reject(new Error('User is not authenticated'));
			}

			// unsubscribe from listener to prevent any memory leaks
			unsubscribe();
		});
	});
};
