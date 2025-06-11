// let tea = ["black tea", "long tea", "harbal tea", "chai", "lemon tea" ];
// let newTea;
// for (let i = 0; i < tea.length; i++) {
//     if(newTea === "chai"){
//         break;
//     }
//     else{
//         newTea = tea[i];
//     }
//     console.log(newTea);
// }


/*
let tea = ["black tea", "long tea", "harbal tea", "chai", "lemon tea" ];
let newTea = [];
for (let i = 0; i < tea.length; i++) {
    if(tea[i]=="chai"){
        break;
    }    
    newTea.push(tea[i]);
}
console.log(newTea);

*/

/*

let cities = ["landon", "paris", "hongKong", "UK", "USA", "india"];
let visitedCities = [];
for (let i = 0; i < cities.length; i++) {
    if(cities[i] == "UK"){
        continue;
    }    
    visitedCities.push(cities[i]);
}

console.log(visitedCities);
*/

/*
let numbers = [1,2,3,4,5];
let newNums = [];
for (const num of numbers) {
    if (num === 4 ) {
        break;
    }
    newNums.push(num)
}

console.log(newNums);
*/


let numbers = [1,2,3,4,5];
let newNums = [];
for (const num of numbers) {
    if (num === 4 ) {
        continue;
    }
    newNums.push(num)
}

console.log(newNums);

