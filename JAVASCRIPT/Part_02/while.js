let countDown = [];
let i = 5;
while (i >= 1) {
    countDown.push(i);
    i--;
}
// console.log(countDown);

let teaCollection = [];
let tea;
do {
    tea = prompt(`Enter your fav. tea(Type "stop" to exit.)`);
    if (tea !== "stop") {
        teaCollection.push(tea);
    }
} while (tea !== "stop");
