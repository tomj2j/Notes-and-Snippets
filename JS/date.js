// <<DATE & TIMES>>
const now = new Date();
console.log(now);
console.log(typeof now);

// year, months, day, times

console.log("getFullYear:", now.getFullYear());
console.log("getMonth:", now.getMonth());
console.log("getDate:", now.getDate());
console.log("getDay:", now.getDay());
console.log("getHours:", now.getHours());
console.log("getMinutes:", now.getMinutes());
console.log("getSeconds:", now.getSeconds());

//Output
getFullYear: 2022;
getMonth: 6;
getDate: 7;
getDay: 4;
getHours: 17;
getMinutes: 42;
getSeconds: 9;

// date string
console.log(now.toDateString()); // Thu Jul 07 2022
console.log(now.toTimeString()); // 17:46:42 GMT+0200 (Mitteleuropäische Sommerzeit)
console.log(now.toLocaleString()); // 7.7.2022, 17:47:30

// timestamps
console.log("timestamp:", now.getTime()); // timestamp: 1657208704121

const before = new Date("February 1 2019 7:30:59");

console.log(now.getTime(), before.getTime()); // 1657209039393 1549002659000

const diff = now.getTime() - before.getTime();
console.log(diff); // 108206445758

// How to calcucalte the difference in days etc.

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins); // 1803442  mins
console.log(hours); // 30057 hours
console.log(days); // 1252 days mins

console.log(`the blog was written ${days} days ago`);
// the blog was written 1252 days ago

const timestamp = 1675938474990;
console.log(new Date(timestamp));
// Thu Feb 09 2023 11:27:54 GMT+0100 (Mitteleuropäische Normalzeit)

// DIGITAL CLOCK FOR HTML
// thiss will update the div with the class clock
// const clock = document.querySelector(".clock");

// this is the tick funktion, which will generate the time every time it gets called.
// padStart() adds the missing 0 to the mins and seconds, if they are just one digit values
// const tick = () => {
//   const now = new Date();
//   const h = now.getHours();
//   const m = String(now.getMinutes()).padStart(2, "0");
//   const s = String(now.getSeconds()).padStart(2, "0");
//   //console.log(`it is : ${h}:${m}:${s}`);
//   // this const holds the html which will be passed to the querySelector
//   const html = `
//     <span>${h}</span> :
//     <span>${m}</span> :
//     <span>${s}</span>
//     `;

//   // this will send the html to the innerHTML of the class clock
//   clock.innerHTML = html;
// };

// // setInterval will call the function "tick" every Second (1000 milliseconds)
// setInterval(tick, 1000);

///////DATE FNS //////
///NEEDS Installation of date-fns or add CDN
//<script src="https://cdnjs.cloudflare.com/ajax/libs/date-fns/1.30.1/date_fns.min.js" integrity="sha512-F+u8eWHrfY8Xw9BLzZ8rG/0wIvs0y+JyRJrXjp3VjtFPylAEEGwKbua5Ip/oiVhaTDaDs4eU2Xtsxjs/9ag2bQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

console.log(dateFns.isToday(now)); //true
//DateFormattin option with date-fns
console.log(dateFns.format(now, "YYYY")); //2022
console.log(dateFns.format(now, "MMMM")); //July
console.log(dateFns.format(now, "dddd, Do MMMM YYYY")); //Thursday, 7th July 2022

//comparing dates
const before2 = new Date("February 1 2022 12: 00: 00");
console.log(dateFns.distanceInWords(now, before2)); // 5 months
console.log(dateFns.distanceInWords(now, before2, { addSuffix: true })); // 5 months // addSuffix = 5 months ago
