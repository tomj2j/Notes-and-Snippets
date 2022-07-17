> #F12 in CHrome to open the Dev-Tools, your new best friend!

> //Consolelog
> console.log(1);
> console.log("Hello World!");
> console.log(variable);

> //Variable

let name = "Thomas";
let year = 1983;
let array = [0,1,2,3,4];

> //const vs let
> Constants are not changeable, they are inmuteable

> //var
> older way to create variable
> var name = "Thomas";

> //Naming Conventions
> camelCase
> dont start with a number, no space, no reserved keyword(let, const etc..)
> Chose a meaningful name

> // Comments
> Single Line Comments start with //
> Multi Line Comment /\*
> \*/

> //DATATYPES

Number --- 1,2,3,1000, 3.14
String --- "Hello World!", "mail@mail.com"
Boolean --- True False
Null --- Explicitly set a variable with no value
Undefined --- For variables that have not yet been defined
Object --- Comples data structures - Arrays, Dates, Literals etc
Symbol --- Used with Objects

> //Concatenation

let name = "Brandon" + " " + "Smith";
Adding Strings together

> //getting characters
> console.log(name[0]);
> = B

> //string length
> console.log(name.length);
> = 12

> //string methods()
> console.log(name.toUpperCase());
> = BRANDON SMITH
> let result = name.toLowerCase();

> //common String Methods
> let mail = "thomas@mail.de"

let result = email.lastIndexOf("h");
= 1
let result = email.slice(0,5);
=thomas
let result = email.substring(1,5)
=homas@
let result = email.replace("h", "j");
=tjomas@mail.de

> // Console log the text content of the element with the class "message"
> console.log(document.querySelector('.message').textContent);

> // Manipulate text Content of elemts with following classes
> document.querySelector('.message').textContent = '🥳 Correct Number! 🎉';
> document.querySelector('.number').textContent = '23';
> document.querySelector('.score').textContent = '999';
> document.querySelector('.highscore').textContent = '1337';

> // Select the Value of an input field. Value will be a string!!
> document.querySelector('.guess').value = '00';
> \*/

> // Click function, select the input field with the class "guess" when the button with the class "check" is clicked.
> document.querySelector('.check').addEventListener('click', function () {
> console.log(document.querySelector('.guess').value);
