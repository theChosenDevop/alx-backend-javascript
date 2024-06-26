interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: false;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

/*const teacher: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false
};*/

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0).toUpperCase();
  const lastInitials = lastName.charAt(0).toUpperCase();

  return `${firstLetter}. ${lastInitials}`;
};

interface StudentClass {
  workOnHomeWork(): string;
  displayName(): string;
}
class Student implements StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  workOnHomeWork(): string {
    return "Currently working";
  }
  displayName(): string {
    return this.firstName;
  }
}
