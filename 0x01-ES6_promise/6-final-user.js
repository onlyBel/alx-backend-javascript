import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const photo = uploadPhoto(fileName);
	const user = signUpUser(firstName, lastName);

	return Promise.allSettled([photo, user]).then((values) => {
		const profileResults = [];
		values.forEach((element) => {
			if (element.status === 'fulfilled') {
				profileResults.push({ status: element.status, value: element.value });
			} else {
				profileResults.push({
					status: element.status,
					value: `${element.reason}`,
				});
			}
		});
		
		return profileResults;
	});
}
