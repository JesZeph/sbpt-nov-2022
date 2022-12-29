// Global Variables
const form = document.querySelector('form');
const table = document.querySelector('tbody');

//TODO Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(form[0].value);
    // console.log(form.sex.value);

    let species = form[0].value;
    let name = form[1].value;
    let sex = form.sex.value;

    console.log('species: ', species);
    console.log('name: ', name);
    console.log('sex: ', sex);

    let animal = {
        species: species,
        name: name,
        sex: sex,
    };
});


//TODO Display to Table (function)