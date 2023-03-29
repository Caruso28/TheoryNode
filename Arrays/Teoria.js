const student1 = {
    name: "Guido",
    surname: "Rimati"
};
const student2 = {
    name: "Arturo",
    surname: "Perruno"
};
const arr = [student1, student2]
console.log(arr);

const results = []
results.push(7);
results.push(4);
results.push(10);

console.log(results);

const estaEl7 = results.includes(7);
console.log(7, estaEl7);

const estaEl2 = results.includes(2);
console.log(2, estaEl2);

const presents = [1, 2, 3];
presents.pop()
console.log(presents);

const a = ["Guido", "Arturo", "Mila", "Tony"];
a.indexOf("Guido");
a.indexOf("Arturo");
console.log(a);

const arra = [1, 2, 3, 4, 5];
const reverseNum = arra.reverse();
console.log(reverseNum);

const numeritos = [1, 2, 3, 4]
const joinArr = numeritos.join();
console.log(joinArr);

const numerillos = [1, 2, 3, 4, 5]
const finalArr = numerillos.splice(0,2);
console.log(finalArr);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const union = arr1.concat(arr2);
console.log(union);

const ejemplo = ["Asado", "Vacio"];
console.log(ejemplo [0]);


