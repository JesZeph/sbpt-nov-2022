// Reverse Challange

/*
    - (Go look at MDN docs to remind you):
    - Create an array containing movies (4 qty)
    - Use .forEach() to list your movies
    - Add another movie at the end
        - Use .forEach() to list your movies
    - And replace one of your existing movies with another one.
        - Use .forEach() to list your movies
*/

'12 Monkeys' 
let movies = [
    'The Two Popes', 'The Fifth Element', 'The Sixth Sense','Seven Samurai', 
];
movies.forEach(item => console.log('ForEach: ', item));
movies.push('12 Monkeys');
movies.forEach((item, i) => console.log('ForEach Index: ', item, i));
//? .forEach()
/* 
    Runs 3 arguments:
        - The Value
        - The Index
        - The Array object itself
*/

let newFoodList = [
    'apple','pear','mushroom','cheese','peach'
];

// for(let i = 0; i < newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// }

newFoodList.forEach(item => console.log('ForEach: ', item));
newFoodList.forEach((item, i) => console.log('ForEach Index: ', item, i));


// newFoodList.forEach(item => console.log('ForEach: ', item));
// newFoodList.forEach((item, i) => { 
//     console.log('ForEach Index: ', item, i)
// }); RUNS THE SAME WAY AS THE PREVIOUS BLOCK




// newFoodList.forEach(item => console.log('ForEach: ', item));
// newFoodList.forEach((item, i) => { 
//     console.log('ForEach Index: ', item, i)
// });
// newFoodList.forEach(function(item) {
//     console.log('declaration sample', item);
// })  ALSO RUNS THE SAME WAY AS THE PREVIOUS 2 BLOCKS




// newFoodList.forEach(item => console.log('ForEach: ', item));
// newFoodList.forEach((item, i) => { 
//     console.log('ForEach Index: ', item, i)
// });
// newFoodList.forEach(function(item) {
//     console.log('declaration sample', item);
// });
// newFoodList.forEach(infoDisplay);

// function infoDisplay(item) {
//     console.log("outside of forEach: ", item);
// }    ALSO RUNS THE SAME WAY AS THE PREVIOUS 3 BLOCKS



