type GenericArray<T> = Array<T>





// const rollNumbers1: number[] = [23, 90, 78, 56];
// const rollNumbers2: string[] = ["34", "56", "89"];
const rollNumbers1: GenericArray<number> = [23, 90, 78, 56];
const rollNumbers2:GenericArray<string> = ["34", "56", "89"];
const rollNumbers3: GenericArray<boolean> = [true, false, true];

type NameRollType = {
    name: string,
    roll: number 
}

const userNameAndRoll: GenericArray<NameRollType> = [
    { name: "Anas", roll: 78 },
    { name: "Gundi", roll: 34 }
]



type GenericTuple<X, Y> = [X, Y];

const relation: GenericTuple<string, string> = ['Rahat', 'kate winslate'];


type relationWithSalaryType = { name: string, salary: number }

//using with interface
interface relationWithSalaryInterface {
    name: string,
    salary: number;
}

const relationWithSalery: GenericTuple<relationWithSalaryType, string> = [{
    name: "Aman",
    salary: 100000
}, 'Kate Winslate'];

const relationWithSalary2: GenericTuple<relationWithSalaryInterface, string> = [{
    name: 'Rahat',
    salary: 2000000
}, 'Kate Winslate'];

interface CrushInterface<T, U> {
    name: string,
    husband: T,
    wife?: U
}

const crush_1: CrushInterface<boolean, undefined> = { name: 'Kate Winslate', husband: true };

const crush_2: CrushInterface<string, string> = { name: 'Ariana Grande', husband: 'jim carry' };

interface husbandInterface {
    
    name: string,
    salary: number

};


const crush3: CrushInterface<husbandInterface, string> = {
    name: "Kate Winslate",
    husband: {
        name: "Jim Carry",
        salary: 0.01
    }
}


interface PersonInterface {
    
    name: string,
    age: number


}
const crush4: CrushInterface<PersonInterface, PersonInterface> = {
    
    name: "kate",
    husband: {
        name: 'jim carry',
        age: 30
    },
       

    wife: {
        name: "Winslate",
        age: 40
    }
}
