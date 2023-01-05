

const log = console.log;
const testEndpoint = 'https://jsonplaceholder.typicode.com/posts/1';
fetch(testEndpoint)

        .then(response => response.json()) 
        .then(data => log(data));
        
let myText = '{ "name": "Gollum", "lost_ring": true }';
log(myText);
let test = JSON.parse(myText);
test.name = 'Bilbo';
log(test);

function getCatFact() {
    fetch(url)
        .then(r => r.json())
        .then(d => log(d.data[0]));
}


const getCatFact2 = async () => {
    let res = await fetch(url);
    let result = await res.json();
    let data = result.data[0];

    log('In Async/Await: ', data);
};
fetch('./local.json')
    .then(r => r.json())
    .then(d => {
        let members = d.fellowship;

        for(m of members) {
            if(m.name === 'Gimli') {
                m.name = 'Hannah'
                log(m.name);
            } else {
                log(m.name);
            }
        }

    });


async function getCatFact3() {

    try {
        
        let response = await fetch(url)
    
        let results = await response.json();
        let data = results.data[0];
        log('Try/Catch: ', data);

    } catch (err) {
        console.error(err);
    }
}

getCatFact3();

//* using resolvers
fetch(url)
    .then(r => r.json())
    .then(d => log('Resolver: ', d.data[0]))
    .catch(err => console.error(err));
