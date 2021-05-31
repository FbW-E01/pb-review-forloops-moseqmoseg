// // ///1

// // for (let i = 0; i <= 10; i++) {
// //     const element = i;
// //     console.log(element);

// // };

// // ///2

// // for (let i = 10; i <= 20; i++) {
// //     const element = i;
// //     console.log(element);

// // };

// // ///3
// // for (let i = -10; i <= 10; i++) {
// //     const element = i;
// //     console.log(element);

// // };

// ///4
// for (let i = 10; i >= -10; i--) {
//     const element = i;
//     console.log(element);

// };
// ///5
// const string = "this is the string that we will print"
// for (let i = 0; i < string.length; i++) {
//     const element = string.charAt(i);
//     console.log(element);

// };

// ///6
// const array = ["item1", "item2 ", "item3", "item4", "item5"]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     console.log(element);

// };
// ///7
// const arrayA = ["item1", "item2 ", "item3", "item4", "item5", "item6"]
// for (let i = 1; i < arrayA.length; i += 2) {
//     const element = arrayA[i];
//     console.log(element);

// };

// ///8
// for (let i = 2; i < arrayA.length; i += 3) {
//     const element = arrayA[i];
//     console.log(element);

// };

///9

const arrayB = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10"]

for (let i = 1; i < arrayB.length; i += 3) {
    const element = arrayB[i];
    console.log(element);

}

///10
const arrayC = [
    { counter: 5 },
    { counter: 0 },
    { counter: 7 },
    { counter: 0 },
    { counter: 79 },
    { counter: 1 },
    { counter: 0 },
];

for (let i = 0; i < arrayC.length; i++) {
    const object = arrayC[i];
    console.log(object.counter);

};

///11
const random = Math.floor(Math.random() * 101);

for (let i = 0; i <= 100; i++) {
    if (i === random) { break; }
    console.log(i);

}