export default function getStudentsByLocation(arr, city) {
	return arr.filter((myArray) => myArray.location === city);
}
