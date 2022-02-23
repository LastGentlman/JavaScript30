const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('#brk');
p.addEventListener('click', makeGreen);

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Regular: ');
  console.log('Hello world!');
console.log('')

// Interpolated
console.log('Interpolated: ');
  console.log('I %s U', '❤️'); // console.log(`I %{Variable} U`)
console.log('');

// Styled
console.log('Styled: ');
  console.log('%c Styled Text', 'font-size: 22px; background: wheat; color: green; font-weight: bold; font-family: italic; border: 1px solid red; padding-right: 7px; margin-left: 30%');
console.log('');

// warning!
console.log('Warning!: ');
  console.warn('~ A Simulated Warning ~');
console.log('');


// Error :|
console.log('Error: ');
  console.error('~ A Simulated Error ~');
console.log('');

// Info
console.log('Info: ');
  console.info(`Where was the first Starbucks store?

    It was true when the first Starbucks opened in 1971, and it's just as true today. Back then, the company was a single store in Seattle's historic Pike Place Market. From just a narrow storefront, Starbucks offered some of the world's finest fresh-roasted whole bean coffees.`);
console.log('');

// Testing
console.log('Testing: ');
  console.assert(p.classList.contains('test'), 'Wrong Class!');
console.log('');

// clearing
console.log(`Clearing: 
    console.clear();`);
// console.clear();
console.log('');

// Viewing DOM Elements
console.log('Viewing DOM Elements: ');
  console.log(p);
  console.dir(p);
console.log('');

// Grouping together
console.log('Grouping together: ')
dogs.forEach((dog) => {
  console.group(`${dog.name}`); //.groupCollapsed can also be used
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});
console.log('');

// counting
console.log('Counting: ')
 console.count('a');
 console.count('b');
 console.count('a');
 console.count('b');
 console.count('a');
 console.count('b');
console.log('');

// timing
console.log('Timing: ');
  console.time('Fetching data');
  fetch('https://api.github.com/users/LastGentlman')
        .then(data => data.json())
        .then((data) => {
          console.timeEnd('Fetching data');
          console.log(data);
        });
console.log('');

//table
console.log('Table: ');
  console.table(dogs);
console.log('');