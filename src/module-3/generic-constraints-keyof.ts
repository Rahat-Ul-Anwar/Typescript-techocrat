type PersonType = {
    name: string;
    age: number;
    address: string
}

type newType = 'name' | 'age' | ' address'; //manually

type newTypeOfKeyOf = keyof PersonType;

const a: newType = ' address';
const b: newTypeOfKeyOf = 'name';

function getProperty<X, Y extends keyof X>(obj:X, key:Y) {
obj[key];

};

const property = getProperty({name: 'Mr Rahat', age:100}, 'age')