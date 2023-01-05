//NOV 30 CLASS

// -Operators
//         - Plus          +
//         - Times         *
//         - Power         **
//         - Dot           .
//         - Assignment    =
//         - Comparison    ==     [EQUAL TO]
//         - COMPARISION   ===    [STRICT EQUAL TO]


// -Is Used to:
//         - Assign
//         - Compare
//         - Arithmetic
//         - Logical
//         - Conditional


// *******************************




// [OPERATORS ARE USED ALOT IN:

// -Expressions & Statements:

//             [STATEMENTS DENOTED IN PARENTHESES;
//             [HERE WE'LL SEE WHAT THE FRAME OF THE EXPRESSION & STATMNTS ACTUALLY LOOK LIKE;
//             [WE'LL SEE EXAMPLES, ESPCLY LATER IN CONDTNLS;

//             [HERE'S THE SYNTAX/FORMAT explainer:

//  keyword name (express) {

//             [THE NAME OF OUR STATEMENT WILL BE AN EXPRESSION INSIDE OF PARENTHESES 
//             [BREAK IT APART INSIDE OF A CURLY BRACKET;
//             [INSIDE OF THE CURLY BRACKETS IS WHERE WE HAVE OUR CODE BLOCK;

//  ... code block 
//  }

//             [WHICH WOULD BE RUNNING ANY KIND OF LOGIC OR STRUCTURE OR FUNCTION;
//             [i.e.(AND HERE'S THE SYNTAX/FORMAT ACTUAL):

//  keyword name (express) {
//     ...code block...
//  }




// ********************
//             [WE LEARN MORE ABOUT THIS WHEN WE START TALKING ABOUT FUNCTIONS; but generally:
//             [WE HAVE A keyword THAT'S ASSOCIATED....WE CAN name IT THE WAY WE NAME VARIABLES.... THEN WE HAVE A PARTICULAR THING WE CAN PASS THROUGH IT, AND THEN WE HAVE THE RESULTS...;
// ********************




// FIRST THE COMPARISION OPERATORS:  (   ==  and the  ===   )
//       *********




// THE DOUBLE EQUAL ==
// CALL IT : 

// ****** Equal To *******

"3" == 3;
console.log('3' == 3);  

// [run it and it RETURNS true, BECAUSE, 
// [THIS == IS EXAMPLE OF THE COERSION PROCESS THINGY THAT JS CAN DO [convert a value from one data type to another] WITH STRINGS AND NUMBERS [and whatnot [?]]. WHERE WE'RE CONVERTING THE DOUBLE EQUAL == IT KINDA MEANS 'equal enough'. so here even though one is a string, and the other is a number (and therefore not really equal), they're both 3, so the 'double equal' operation is supposed to give it a pass.  
// Good to use if the value being returned to us needs to be a little bit flexible. <<== *********************I don't know what this means. BUT I THINK IN CONDITIONALS: IF/ELSE's...

// ***********



// ON THE OTHER HAND, 
// THE TRIPLE EQUAL === MEANS:   exactly the same  /  strict equal to  
// I.E.  so here they're not equal. The reason is because one is a string, and the other is a number, even though they're both 3

// CALL IT : 
// ****** Strict Equal To *******


console.log("3" === 3);


// [run it and it RETURNS false, BECAUSE:
// [THIS PARTICULAR OPERATOR [ THE  === ], THIS COMPARISON OPERATOR WE'RE PASSING THROUGH,  IT'S EVALUATING BOTH THE data type AND THE value THAT'S ASSOCIATED TO IT; one's a string, and one's a number, so not strictly equal]

// ***********************



// [THE SINGLE EQUAL   =    IS DIFFERENT THAN THE  ==  OR THE  ===  . IT MEANS SOMETHING COMPLETELY DIFF IN JS.    IT'S THE ASSIGNMENT OPERATOR BECAUSE A SPECIFIC VALUE IS BEING ASSIGNED TO IT. IN THIS CASE, IT'S EQUAL TO WHATEVER THE VALUE is OF WHATEVER THE DATA TYPE BEING GIVEN IS;

// *********************




// Not Equal & Strict Not Equal 

// *** [like saying: is this NOT true? is this NOT false?.. flips it]   ****


console.log('2' != 2);
console.log('2' !== 2);


// ***************

// Greater than / Less than
let y = 3 > 2;
console.log('Greater Than: ', y);
2 < 3;

// ***************

// Greater than or Equal to
3 >= 2;

//    ************

// Less than or Equal to:
2 <= 2;

// [SO THESE  [2 <= 2]    ARE WHAT WE WOULD BE INJECTIMG INTO OUR EXPRESSIONS - ( into the express bit below), and would come back as the T/F value; 

    //   keyword name (express) {
    //     ...code block...
    //  }]

// ********

// ***  AND  ***
2 && 2;
2 < 10 && 2 > 1
console.log('And', 2 && 3);

// [TRUE STATEMENT ON BOTH SIDES TO COME BACK TRUE;

//       ***********

// ***  OR  ***
2 || 4;

// [TRUE STATEMENT ON [check LEFT first] then if false check right. One side or the other must come back true for the operation TO COME BACK TRUE;

// ********************

//* Logical Operators  [DO SOME MATHY STUFF FOR US IN A QUICK SYNTAX SORT OF WAY;]

// let a = 1;
// console.log(a); // 1
// a = a + 1;
// console.log(a); // 2
// a = a + 1;
// console.log(a); // 3

// addition
r += 1; // r = r + 1;

// subtraction
r -= 1; // r = r - 1;

// multiplication
r *= 2; // r = r * 2;

// division
r /= 2; // r = r / 2;

// Remainder (modulus) 
r %= 1;

console.log(3 % 2);
// Exponential
r **= 1;