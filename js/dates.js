//STEP 1
let month = new Date().getMonth();
let year = new Date().getFullYear();
daysInMonth = new Date(year, month, 0). getDate();
console.log(daysInMonth)

//STEP 2
// let today = new Date()
// let month = today.toLocaleString("en-US", { month: "long" })
// console.log(month);

//STEP 3
// let day = new Date().getDay()
// function weekWeekEndTest(day) {
    // if (day === 0 || day === 6) {
        // console.log('Weekend')
    // } else {
        // console.log('Weekday')
    // }
// };
// weekWeekEndTest(2)
// weekWeekEndTest(0)
// weekWeekEndTest(5)
// weekWeekEndTest(6)

//STEP 4
// let yesterday = new Date();
// yesterday.setDate(yesterday.getDate() - 1);
// console.log(yesterday.toLocaleDateString('default', {weekday: 'long'}))

//STEP 5
// let date = new Date()
// console.log(date.toLocaleDateString('default', {weekday: 'long'}).charAt(0))