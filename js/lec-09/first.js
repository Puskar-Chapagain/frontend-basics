// Dates in JS

const d = new Date()
console.log(d);

//  YYYY-MM-DD Timezone

console.log(d.toDateString());
console.log(d.toString());
console.log(d.toISOString());
// console.log(d.);

console.log(typeof d );  // object

// It is taking the time from our own system

// how many milliseconds have passed - from Jan 1st , 1970 12:00:00 AM 
// that is what it converts and stores
console.log(new Date(2000));

// index in these methods starts from 0 
console.log(d.getDate()); 
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getMilliseconds());
console.log(d.getMonth());
console.log(d.getTime());
console.log(d.getMinutes());

const now = Date.now()
console.log(now);

console.log(d.toDateString());

// when using string - 0 based indexing is not used
const newdate = new Date("2025-2-28")
console.log(newdate);

// when using numbers - use the 0 based indexing
const anotherDate = new Date(2022,2,28) 
console.log(anotherDate);

//  year / month / date / hour / minute / seconds / millisecond
//  if only one argument - milliseconds

const DATE = new Date()
DATE.setDate(4)
DATE.setFullYear(2024)
DATE.setHours(5)
DATE.setMinutes(52)

console.log(DATE);


// Formatting the date
console.log(d.toDateString())
// Tue Jul 15 2025


console.log(d.toISOString())
// 2025-07-15T13:11:40.113Z


console.log(d.toUTCString());
// Tue, 15 Jul 2025 13:11:40 GMT


console.log(d.toLocaleDateString());
// 7/15/2025


console.log(d.toLocaleString());
// 7/15/2025, 6:56:40 PM


console.log(d.toLocaleTimeString());
// 6:56:40 PM


const date1 = new Date()
const date2 = new Date('2025-1-2')
const date = date1 - date2
console.log(date1-date2); // gives answer in millisecond

// countdown timer for next olymic/world cup

// X days X hours X min X seconds - format

const days = Math.floor(date/(1000*60*60*24))
console.log(days);
const hour = Math.floor(date/(1000*60*60)%24)
console.log(hour);
const minutes = Math.floor(date/(1000*60)%60)
console.log(minutes);
console.log(`Olympic Countdown Days: ${days} days, ${hour} hour ${minutes} minutes`);