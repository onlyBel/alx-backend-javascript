export default function cleanSet(set, startString) {
	if (startString === undefined || startString.length === 0) {
		return '';
	}
	const array = Array.from(set);
	const values = array.filter((value) => value.startsWith(startString));
	const result = values.map((value) => value.substring(startString.length));
	return result.join('-');
}
