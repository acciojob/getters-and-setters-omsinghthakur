//complete this code
class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class Student extends Person {
    public Student(String name, int age) {
        super(name, age);
    }

    public void study() {
        System.out.println(getName() + " is studying");
    }
}

class Teacher extends Person {
    public Teacher(String name, int age) {
        super(name, age);
    }

    public void teach() {
        System.out.println(getName() + " is teaching");
    }
	 }   
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
