const person = {
    name: "Guido",
    surname: "Rimati",
    age: 70
}

const mayoriaDeEdad = 18
const jubilados = 65
if (person.age >= mayoriaDeEdad && person.age < jubilados) {
    console.log('Soy mayor de edad');
}
else if (person.age >= jubilados) {
    console.log('Soy un jubilado');
}
else {
console.log('Soy menor de edad')
}
