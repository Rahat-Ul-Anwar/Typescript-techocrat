type User = {
    name: string;
    age: number;
}

type extendedUser = User & {
    role: string
}

interface IUser {
    name: string;
    age: number;
}

interface IExtendedUser extends IUser {
  role: string

}


// const user3: IExtendedUser = {
//     name: "Omanush",
//     age: 23,
//     role: "unknown"
    
// }
const user3:extendedUser = {
    name: "Omanush",
    age: 23,
    role: "unknown"
    
}
// const userWithTypeAlias: User = {
//     name: 'Type Alias',
//     age:100

// }


// const userWithTypeInterface: IUser = {
//     name: "Type Interface",
//     age: 50
// }

//type alias in function
type addNumbersType = (num1: number, num2: number) => number
type rollNumberType = number[];


//type interface in function
interface IAddNumbers{
    (num1:number, num2:number) :number
}


interface IRollNumber {
    [index: number]: number;  //index signature
}
const addNumbers: IAddNumbers = (num1, num2) => num1 + num2;



// const rollNumbers: rollNumberType = [1, 4, 5, 8];
const rollNumbers: IRollNumber = [1, 4, 5, 8];