const person = {
    name: "Guido",
    surname: "Rimati",
    active: true
}

if (person.active) {
    console.log("La cuenta esta activa");
}
else {
    console.log("La cuenta no esta activa");
}

const student = {
    name: "Arturo",
    surname: "Perro",
    active: true,
    age: 27,
    height: 1.8
};

if (student.height > 1.7 || student.age < 25) {
    console.log("Puede entrar");
}
else {
    console.log("No puede entrar");
}