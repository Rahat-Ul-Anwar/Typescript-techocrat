
function add(a:number, b:number):number {
    const sum = a + b;
    return sum;
}

add(5, 7);


const addArrow = (num1: number, num2: number): number => num1 + num2;

// callback function

const arr = [8, 9, 10];

const newArray = arr.map((elem: number) => elem * elem);


const person: {
    name: string,
    balance: number,

    addBalance(money:number):void
} = {
    name: "Rahat",
    balance: 5,
    addBalance(money: number) {
        console.log( `My new balance is ${this.balance + money}`);;
    }
}