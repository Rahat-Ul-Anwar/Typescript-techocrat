type CrushType = {
    name: string,
    age?: number,
    profession: string,
    address: string
};



const crush1: CrushType = {
    name: "Moyna Pakhi",
    age: 22,
    profession: "Web Developer",
    address: 'Uganda'
};

const crush2: CrushType = {
    name: "Tia Pakhi",
    profession: "next level web developer",
    address: "Mexico"
};

//boolean

type CrushMarriedType = boolean;

const isCrushMarried: CrushMarriedType = false;

//string

type CourseNameType = string;

const courseName: CourseNameType = "complete Web development course";

//type alias in function

type operationType =  (x: number, y: number) =>number

const calculate = (num1: number,
    num2: number,
    operation: operationType
   ) => {
    

    return operation(num1, num2);

}

calculate(10, 20,(x,y)=> x+y);
calculate(30, 20,(x,y)=> x-y);
calculate(30, 20,(x,y)=> x*y);