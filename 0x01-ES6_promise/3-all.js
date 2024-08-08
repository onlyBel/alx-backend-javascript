import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
	const photo = uploadPhoto();
	const user = createUser();

	return Promise.all([photo, user])
		.then((value) => {
			console.log(
				`${value[0].body} ${value[1].firstName} ${value[1].lastName}`,
			);
		})
		
		.catch(() => console.log('Signup system offline'));
}
