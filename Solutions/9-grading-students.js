`use strick`;

// FITST VERSION========================================================
function gradingStudents(grades) {
  const result = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 === 0) {
      result.push(grades[i]);
    } else if (grades[i] < 38) {
      result.push(grades[i]);
    } else if (grades[i] % 5 >= 3) {
      for (let j = 0; j < 2; j++) {
        grades[i]++;
        if (grades[i] % 5 === 0) {
          result.push(grades[i]);
        }
      }
    } else {
      result.push(grades[i]);
    }
  }
  return result;
}

// SECOND VERSION=======================================================

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 === 0 || grades[i] < 38 || grades[i] % 5 < 3) {
    } else if (grades[i] % 5 >= 3) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  return grades;
}

// LAST VERSION==========================================================

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] % 5 >= 3 && grades[i] >= 38 && grades[i] % 5 !== 0) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    }
  }
  return grades;
}

// WITH .map()===========================================================

const gradingStudents = (grades) => grades.map((grade) => {
    if (grade % 5 >= 3 && grade >= 38 && grade % 5 !== 0) {
      return grade + (5 - (grade % 5));
    } else return grade;
  });


console.log(gradingStudents([73, 67, 38, 33]));
