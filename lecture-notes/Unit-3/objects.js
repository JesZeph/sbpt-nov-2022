// Dec14

let marvelHero = {
    fullName: 'Miles Morales',
    codeName: "Spider-Man",
    age: 25,
    active: true
}

/* 
* Object Literal
    When our values are written within our keys. "Hard Coded"

*   Structure

        keyword objectName = {
            key: value,
        }

        ref: 
        let ourObj = {
            firstKey: 'string'
        }
    
    Are dictionaries
*/

let theSimpsons = {
    id: 1,
    est: 1989,
    genre: 'animated',
    seasons: {
        "season one": [
            {
                episode_title: 'Simpson Roasting on an Open Fire',
                aired: '1989-12-17',
            },
            {
                episode_title: 'Bart the Genius',
                aired: '1990-01-01',
            },
            [
                '1989-12-17', "1990-1-14"
            ]
        ],
        "season two": [/* .... */],
        "season three": [/* .... */]
    },
    currently_running: true,
}
// -------------------------
//! Destructuring

const { characters, seasons } = theSimpsons;
console.log('Destructuring Characters', characters);
console.log('Seasons', seasons);
characters.push('Meo'); // Typo
// console.log(characters);
characters[6] = 'Moe';
console.log(characters);

const { est: established, currently_running: on_air} = theSimpsons;
console.log(established);
console.log(on-air);

console.log("Doesn't Change Oroginal: ", Object.keys(theSimpsons));

// -------------------
//! Spread with Objects
const simpsonCharacters = {
    simpsonsHouse: ['Homer','Marge','Bart','Lisa','Maggie'],
    moesTavern: ['Moe','Barney']
};

const generalLocations = {
    park: 'statue',
    beach: 'dock',
    lake: '3-eyed fish'
}

const locations = {
    ...simpsonCharacters,
    dmv: ['Patty','Selma'],
    ...generalLocations
};

console.log(locations);

