const arrayOfNumbers = [1, 2, 3,8];

const newArray1 = arrayOfNumbers.map(number => number.toString());
console.log(newArray1);

type  Volume = {
    
    height: number;
    width: number;
    depth: number
}

type AreaString = {
    height: string;
    width: string;
}

type AreaReadOnly = {
   readonly height: number;
   readonly width: number;
}

const rectangularArea: AreaReadOnly = {
    height: 10,
    width: 12
}

// rectangularArea.width = 10;

type A = AreaNumber['height']; //look up types
type B = keyof AreaNumber;

// const obj = {
//     name: "persian"
// };

// obj["name"]

type Area<T>= {

    // [key in keyof Volume] : Volume[key]
    readonly [ key in keyof T]: T[key]
}

const area1: Area<{ height: number, width: string }> = { height: 10, width: '89' }

