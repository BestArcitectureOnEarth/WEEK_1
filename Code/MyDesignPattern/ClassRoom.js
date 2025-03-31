// Observer

class Professor {
  constructor(name) {
    this.name = name;
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  removeStudent(student) {
    this.students = this.students.filter((std) => std !== student);
  }

  notify(message) {
    const sender = this.name;
    this.students.forEach((student) => student.update(sender, message));
  }
}

class Student {
  constructor(name) {
    this.name = name;
  }

  update(sender, message) {
    console.log(`${sender} 교수 to ${this.name} 학생 : ${message}`);
  }
}

const prof = new Professor("Mac");
const student1 = new Student("Alice");
const student2 = new Student("Jane");

prof.addStudent(student1);
prof.addStudent(student2);
prof.notify("오늘은 휴강입니다.");

prof.removeStudent(student2);
prof.notify("내일은 실습입니다.");
