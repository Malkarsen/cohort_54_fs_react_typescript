import "./styles.css";

function Lesson_06() {
  // 1 тип: string - строковый
  let userFullName: string = "John Johnson";
  // userFullName = 30; // будет ошибка!!!

  let hello = `Hello, ${userFullName}`; // Если мы явно не присваиваем тип данных для переменной при её создании,
  //  то тип назначается автоматически в зависимости от того, что за тип данных первым попал в переменную
  console.log(hello);
  //  hello = 30;  // будет ошибка!!!

  //----------------------------------------------------
  // 2 тип: number - числовой
  let number1: number = 100;
  console.log(number1);
  let number2: number = 39.5;
  console.log(number2);
  //   number1 = "200";  // будет ошибка!!!

  //----------------------------------------------------
  // 3 тип: boolean - буленовский
  let isAdmin: boolean = true;
  isAdmin = false;
  console.log(isAdmin);

  //----------------------------------------------------
  // 4 тип: массив
  const animals: string[] = ["Tiger", "Lion", "Dog"];
  animals.push("Cat");
  //   animals.push(100);  // будет ошибка!!!
  const numbers: number[] = [1, 2, 3, 4, 5, 6];
  console.log(numbers);

  //----------------------------------------------------
  // 5 тип: tupel
  const userArray: [
    string,
    string,
    string,
    number,
    string,
    string,
    string,
    number
  ] = ["name", "John", "age", 30, "name", "Pavel", "age", 40];
  console.log(userArray);

  //----------------------------------------------------
  // 6. functions
  // 6.1 ф-я, которая что-то выполняет, но ничего не возвращает
  const sayHi = (personName: string): void => {
    console.log(`Hello, ${personName}`);
  };
  sayHi("John");
  // 2 способ типизации
  //   const sayHi: (personName: string) => void = (personName) = {
  //     console.log(`Hello, ${personName}`);
  //   };

  // 6.2 функции, который что-то возвращают
  const add = (a: number, b: number): number => {
    return a + b;
  };
  add(3, 2);

  //----------------------------------------------------
  // 7. any - любой
  let anyVariable: any = "hello";
  anyVariable = 300;
  anyVariable = true;
  console.log(anyVariable);

  //----------------------------------------------------
  // 8. null и undefinded
  let userName: null | string;
  userName = "qwe";

  let userAge: undefined | number = undefined;
  userAge = 30;

  //----------------------------------------------------
  // 9. object
  interface Admin {
    isAdmin: boolean;
  }

  interface User extends Admin {
    firstName: string;
    lastName: string;
    age: number;
    job: string;
    isAdmin: boolean;
    pet?: string;
  }

  // Можно дописать свойство в интерфейсе
  interface User {
    isFamily: boolean;
  }

  const user1: User = {
    firstName: "John",
    lastName: "Johnson",
    age: 30,
    job: "QA",
    isAdmin: true,
    isFamily: true,
  };

  const user2: User = {
    firstName: "Brat",
    lastName: "Pitt",
    age: 30,
    job: "Frontend",
    isAdmin: true,
    isFamily: true,
  };
  console.log(user1);
  console.log(user2);

  //----------------------------------------------------
  // 10. type
  type GlobalAnimalProps = {
    isAnimal: boolean;
  };

  type Animal = {
    type: string;
    age: number;
    color: string;
    isWild: boolean;
    speed?: string;
  };

  const animal1: Animal | GlobalAnimalProps = {
    isAnimal: true,
    type: "Tiger",
    age: 12,
    color: "orange",
    isWild: true,
  };
  console.log(animal1);

  ////////
  type userDataFromServerType = User | null | undefined;
  let userDataFromServer: userDataFromServerType = null;
  userDataFromServer = undefined;
  console.log(userDataFromServer);

  return (
    <div className="lesson_06_page_wrapper">
      Lesson 06
      {userFullName}
    </div>
  );
}

export default Lesson_06;
