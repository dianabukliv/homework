const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  //1

  function getSubjects(studentObj) {
      const subjects = Object.keys(studentObj.subjects).map((item) => 
      capFirstLetter(item).replace("_", " ")
      );
      return subjects;
  }
  console.log(`Список предметів : `, getSubjects(students[0]));

  function capFirstLetter(str) {
      return str[0].toUpperCase() + str.slice(1);
  }

//2

function getAverageMark(studentObj) {
    const marks = Object.values(studentObj.subjects).flat();

    const mean = (
        marks.reduce((sum, item) => sum + item, 0) / marks.length
    ).toFixed(2);

    return mean;
}
console.log(`Середня оцінка : `, getAverageMark(students[0]));

//3

function getStudentInfo(studentObj) {
    const info = {
        course: studentObj.course,
        name: studentObj.name,
        marks: getAverageMark(studentObj)
    }
    
    
    return info;
}
console.log('Інформація про студента: ', getStudentInfo(students[0]));

//4

function getStudentsNames(students) {
    const names = students.map((item) => item.name).sort();

    return names;
}
console.log("Імена в алфавітному порядку: " , getStudentsNames(students));

//5

function getBestStudent() {
    return [getStudentInfo(students[0]), getStudentInfo(students[1]), getStudentInfo(students[2])].sort((a, b) => a.marks - b.marks).pop().name

}

console.log(`Імя кращого студента по показнику середньої оцінки: `, getBestStudent());

//6

function calculateWordLetters(item) {
    let word = item.split('').reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] +=1;
        } else {
            acc[curr] = 1;
        
        } 
        return acc;
    } , {} );
    return word
}
console.log(`Кількість букі у слові:`, calculateWordLetters(`тест`))