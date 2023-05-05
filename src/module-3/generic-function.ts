

const createArray = <T>(param: T):T[] => {

 return [param]
}


const result = createArray<string>('Bangladesh');
const result2 = createArray<boolean>(true);


interface userNameInterface {
    name: string
}

const  result3 = createArray<userNameInterface>({name: 'Rahat'})
console.log(result);


//generics in function in tuple

const createTuple = <X, Y> (param1:X, param2:Y): [X, Y] => {

    return [param1, param2]
}

const output = createTuple<number, string>(1, "Rahat");
const hasHubby = createTuple<boolean, string>(true, 'kate');

const output3 = createTuple<boolean, [string, string]>(false, ['USA', 'Florida'])

console.log(output);
console.log(hasHubby);

//generic in spread operator





// const newInfo = { ...myInfo, crush };

const addMeToMyCrushMind = <T>(myInfo: T) => {
    const crush = 'kate Winslate';
    const newData = { ...myInfo, crush };
    return newData;

}
const myInfo = {
    name: "Rahat",
    age: 28,
    salary: 1000000
}
const result5 = addMeToMyCrushMind(myInfo);

console.log(result5);

