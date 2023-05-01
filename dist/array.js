"use strict";
const names = ['abul', 'kabul', 'babul'];
const ages = [90, 80, 70];
ages[8] = 'poi';
const value = ages.map(age => age.toString());
console.log(value);
