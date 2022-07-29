function practice_5(students, student_objects) {
  const result = student_objects.reduce((ans, current) => {
    const index = ans.findIndex((object) => {
      return object.student_id === current.student_id;
    });
    if (!ans[index].hasOwnProperty("object")) {
      ans[index].object = [current.object];
    } else {
      ans[index].object.push(current.object);
    }
    return ans;
  }, students);

  return result;
}

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
  { student_id: 1, object: "pen" },
  { student_id: 2, object: "pen" },
  { student_id: 3, object: "book" },
  { student_id: 1, object: "book" },
  { student_id: 3, object: "phone" },
];

console.log(practice_5(students, student_objects));
