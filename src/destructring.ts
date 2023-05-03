const myfriends = ['chandler', 'joey', 'ross'];
const myNewFriends = ['jhon', 'didar', 'pablo'];

const myBestFriends = {
    fullName: 'Abul Bashar', 
    age: 24
}
const [bestFriend, ...mediumFriend] = myfriends;
const { fullName } = myBestFriends;

console.log(bestFriend, mediumFriend);

console.log(fullName)