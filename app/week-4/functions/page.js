export default function FunctionsPage() {

function helloWorld(username){
//return"Hello World! Welcome Back " + username;   
return `Hello World! Welcome Back ${username}`;

}

const helloWorld2 = (username) => {
    return `Hello World! Welcome Back ${username}`;

}

const helloWorld3 = (username) => `Hello World! Welcome Back ${username}`;

const helloMath = (a, b) => a + b;

const louder = (str) => str.toUpperCase();

const multiplyBy = (num1) => {
    return (num2) => num1 * num2;
}

const multiplyByThree = multiplyBy(3);
const multiplyByFive = multiplyBy(5);
const multiplyByTen = multiplyBy(10);

  return (
    <main>
        <h1>Functions</h1>
        <p>{helloWorld("John")}</p>
        <p>{helloWorld2("Jane")}</p>
        <p>{helloWorld3("Jim")}</p>
        <p>{helloMath(5, 10)}</p>
        <p>{louder(helloWorld3("Lucas"))}</p>
        <p>{multiplyBy(5)(10)}</p>
        <p>{multiplyByThree(10)}</p>
      
    </main>
  );
}