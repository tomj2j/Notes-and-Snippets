//Synchonous JS
//- Javascript can run ONE statement at a time

// JS is a Single Threaded language
//-----------------
//Async JavaScript
// - Governs how we perform tasks which take some time to complete
//(e.g. Getting data from a database)

//Start something now and finsih it later
//-----------------
console.log(1);
console.log(2);

setTimeout(() => {
  console.log("callback function fired");
}, 2000);

console.log(3);
console.log(4);
