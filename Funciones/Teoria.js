function avg(avgArr) {
    if (avgArr.length <=0) {
        return "El array no puede estar vacio"
    }
    const arr = avgArr;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr [i];
    }
    return sum / arr.length;
}

const test1 = avg([0,10]);
console.log(test1);

const test2 = avg([]);
console.log(test2);

function test3() {
    return "Soy test 3";
};

const test = test3()
console.log(test);