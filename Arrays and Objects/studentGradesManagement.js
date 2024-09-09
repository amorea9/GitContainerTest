//defining the student object and functions
const student = {
  studentId: "",
  studentName: "",
  studentGrades: [],
};

const addGrade = (object, grade) => {
  return object.studentGrades.push(grade);
};

const updateStudentName = (object, name) => {
  return (object.studentName = name);
};

console.log(student);

//new student object
const newStudent = {
  studentId: 2,
  studentName: "Alessia",
  studentGrades: [2, 8, 10],
};

//adding grades
addGrade(newStudent, 12);
addGrade(newStudent, 7);

//updating name
updateStudentName(newStudent, "Giorgia");
console.log(newStudent);
