class Student {
    constructor(university, course, fullName,marks) {
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.marks = marks;
    }

    getInfo() {
        return `Студент ${this.course}-го курсу ${this.university}, ${this.fullName} `;
    } 

    encluded = false;

    get getMarks() {
        if(this.encluded) {
            return null;
        }
        return this.marks
    }

    set pushMarks(mark) {
        return this.marks.push(mark);
    }

    getAverageMark() {
        let averageMark = this.marks.reduce((a, b) => {
            return a + b
        }, 0);
        return (averageMark / this.marks.length).toFixed(1);
    }

    get dismiss() {
        this.encluded = true;
        return `Студента, ${this.fullName} , виключено`
    }

    get recover() {
        this.encluded = false;
        return `Студента , ${this.fullName}, поновлено`
    }
}

let student = new Student(` Національний університет Львівська Політехніка`, "2 ", "Буклів Діана", [4, 5, 5, 4, 5]);

console.log(`Загальна інформація про студента: `, student.getInfo())
console.log(`Успішність студента :` , student.marks)
student.getMarks = 5
console.log(`Успішність студента після додавання оцінки:`, student.getMarks)
console.log(`Середній бал :`, student.getAverageMark())
console.log(student.dismiss)
console.log(`Спроба вивести успішність після виключення:`, student.getMarks)
console.log(student.recover)
console.log(`Спроба вивести успішність після поновлення:`, student.getMarks)

class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university,course, fullName, marks) 
        setInterval(() => {
            this.getScholarship()
        }, 30000 );
    }
    getScholarship() {
        console.log(this.getAverageMark());
        if (this.getAverageMark() >= 4) {
            console.log(`${this.fullName} отримує 1400 грн. стипендії`);
        } else {
            console.log(`На жаль стипендії не буде `);
        } 
        if (this.encluded) {
            console.log(`${this.fullName} виключено , тому  стипендії не буде`) ;
        }
    }
}

const budgetStudent = new BudgetStudent(`ЛНУ імені Івана Франка`, "3", "Буклів Діана", [3,4,5,3] );
budgetStudent.getScholarship