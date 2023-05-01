// const names: string[] = ['abul', 'kabul', 'babul'];

const ages: number[] = [90, 80, 70];

ages[8] = 'poi';


const value = ages.map(age => age.toString())

const names = ['abdul', 'kabul', 'babul', true, 7878];  //union type

names[1] = 90;

const user: [number, string] = [101, 'Rahat'];

user[0] = true;


const boyfriends: [string, boolean] = ['Enum', true];

boyfriends[0] = 'ahad';