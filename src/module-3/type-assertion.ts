let emni: any;
emni = "Programming Hero Bangladesh";

(emni as string).length

function kgToGram(param: number | string): number | string |undefined {
    if (typeof param == 'number') {
        const value = param * 1000;
        return value;
    }
    if (typeof param == 'string') {
        
        const value = parseFloat(param) * 1000;
        return `The converted value is ${value}`;
    }
    

}

const resultTOBe = kgToGram(10) as number;
const resultToBeString = kgToGram('20') as string;
console.log(resultTOBe);

console.log(resultToBeString);


type CustomErrorType = {
    message : string;
}


try {
    
}
catch (error) {
    console.log((error as CustomErrorType).message)
}