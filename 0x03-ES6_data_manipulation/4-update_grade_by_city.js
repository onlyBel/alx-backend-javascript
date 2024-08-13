export default function updateStudentGradeByCity(students, city, newGrades) {
	return students
		.filter((student) => student.location === city)
		.map((student) => {
			const matchingGrade = newGrades.find(
				(grade) => grade.studentId === student.id,
			);
			student.grade = matchingGrade ? matchingGrade.grade : 'N/A';
			return student;
		});
}
