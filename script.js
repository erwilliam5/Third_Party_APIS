//query selectors 
let time9 = document.querySelector("#nine-am");

/*let time10 = document.querySelector("#time10");
let time11 = document.querySelector("#time11");
let time12 = document.querySelector("#time12");
let time1 = document.querySelector("#time1");
let time2 = document.querySelector("#time2");
let time3 = document.querySelector("#time3");
let time4 = document.querySelector("#time4");
let time5 = document.querySelector("#time4");*/

localStorage.getItem("day");

if (localStorage.getItem("day") === null){
   let timeBlocks = {
       '9am': "",
       '10am': "",
       '11am': "",
       '12pm': "",
       '1pm': "",
       '2pm': "",
       '3pm': "",
       '4pm': "",
       '5pm': "",
}
    localStorage.setItem("day", JSON.stringify(timeBlocks));
}

let timeBlocks = JSON.parse(localStorage.getItem("day"));
console.log(timeBlocks['9am']);
console.log(time9);
time9.value = timeBlocks['9am']