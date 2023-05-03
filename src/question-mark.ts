const age: number = 20;

// if (age >= 18) {
//     console.log('Yes');
// }
// else {
//     console.log('No');
// }

const isAdult = age >= 18 ? "Yes" : "NO";
// console.log(isAdult);

//Nullish Coalescing opetator

//Null and undefined

const isAuthenticatedUser = '';
const userName = isAuthenticatedUser ?? 'Guest';

const userName2 = isAuthenticatedUser ? isAuthenticatedUser : 'Guest';
console.log({ userName }, { userName2 });


type Manush = {
    name: string,
    age: number,
    address: {
        city: "No City",
        road: "NO Road",
        home?: ""
    };
}

const manush1:Manush = {
    name: 'Manush',
    age: 22,
    address: {
        city: "No City",
        road: "NO Road"
    },
}

const home = manush1?.address?.home ?? 'NO Home';
console.log(home)