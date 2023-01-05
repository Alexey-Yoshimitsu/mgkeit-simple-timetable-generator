//<!--<section class="para-block">
//    <label for="name-para">Название</label><input type="text" id="name-para"/>
//    <label for="time-para">Время</label><input type="text" value="8:15-9:00"  id="time-para"/>
//    <label for="kab">Кабинет</label><input type="text" id="kab"/>
//    <label for="teacher">Преподователь</label><input type="text" id="teacher"/>
//</section>-->
// the structure of para-block
// we need to read value from "para-counter" input and generate by button click para-blocks
let times = [
  "8:15-9:00",
  "9:10-10:40",
  "11:05-12:35",
  "13:00-14:30",
  "14:55-16:25",
  "16:35-18:05",
];
let monday = document.querySelector(".monday");
let tuesday = document.querySelector(".tuesday");
let wednesday = document.querySelector(".wednesday");
let thursday = document.querySelector(".thursday");
let friday = document.querySelector(".friday");
let group_name = document.querySelector("#group-name");

document.querySelector(".save-all").addEventListener("click", () => {
  let timetable = JSON.parse({ "group": group_name });
  console.log(timetable)
});
