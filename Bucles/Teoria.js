for (let i = 0; i < 10; i = i + 1) {
    console.log(i + 1);
}

const results = [1, 3, 10, 3, 1]
console.log(results.length);

let sum = 0;
for (let i = 0; i < results.length; i = i + 1) {
    sum = sum + results [i];
}
const prom = sum / results.length 
console.log(prom);


let i = 0
while (i < 10) {
    console.log(i);
    i++;
}

const results1 =[1, 3, 5, 10];
results.map((val, index) => {
    console.log(val, index)
} )