class Student {
    constructor(lastName, firstName, yearBirth) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.yearBirth = yearBirth;
    this.grades = [];
    this.attendance = new Array(25).fill(null);
    }

    getAgeStudent() {
        let curentYers = new Date().getFullYear();
        return curentYers - this.yearBirth;
    }

    getAverageGrade() {
        if (this.grades.length === 0) {
            return 0;
        }

        let sum = this.grades.reduce((total, grade) => total + grade);
        return sum / this.grades.length;
    }

    present() {
        let index = this.attendance.findIndex((item) => item === null);
        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    absent() {
        let index = this.attendance.findIndex((item) => item === null);
        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    summary() {
        let averageGrade = this.getAverageGrade();
        let attendanceRatio = this.getAttendanceRatio();
    
        if (averageGrade > 90 && attendanceRatio > 0.9) {
            return "Молодець!";
        } else if (averageGrade > 90 || attendanceRatio > 0.9) {
            return "Добре, но ти можешь краще!!";
        } else {
            return "Редиска!";
        }
    }

    getAttendanceRatio() {
        let total = this.attendance.length;
        let presentCount = this.attendance.filter((item) => item === true).length;
        return presentCount / total;
    };
}

let student1 = new Student("Микола", "Авдеев", 1977);
student1.grades = [95, 90, 92, 88];
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 
student1.present(); 

let student2 = new Student("Олеся", "Задунайська", 2000);
student2.grades = [95, 90, 92, 88];
student2.present();
student2.absent();
student2.present();
student2.present();

let student3 = new Student("Петро", "Дунаїв", 1999);
student3.grades = [75, 50, 82];
student3.present();
student3.absent();

let students = [
    student1,
    student2,
    student3
];

let html = '';

students.forEach(function(student) {
    html += `
    <ul>
        <li>Ім'я студента: <b>${student.lastName}</b></li>
        <li>Призвище студента: <b>${student.firstName}</b></li>
        <li>Вік студента: <b>${student.getAgeStudent()}</b></li>
        <li>Середня оцінка: <b>${student.getAverageGrade()}</b></li>
        <li>Середнє відвідування: <b>${student.getAttendanceRatio()}</b></li>
        <li>Коментар до успішності студента: <b>${student.summary()}</b></li>
    </ul>
    `;
});

document.write(html);