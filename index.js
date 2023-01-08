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




const tttimetable = {
  chet: [
    [
      {
        title: "Разговоры о важном",
        kab: "408",
        name: "Фейзуллаева Эльвира Мирьяновна",
        time: "8:15-9:00",
      },
      {
        title: "Информационные технологии",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "9:10-10:40",
      },
      {
        title: "Архитектура аппаратных средств",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "Физическая культура",
        kab: "спотрзал",
        name: "Чернова Людмила Львовна",
        time: "11:05-12:35",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "13:00-14:30",
      },
      {
        title: "Архитектура аппаратных средств",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "14:55-16:25",
      },
      {
        title: "ИностраПетрова Лера Юрьевнанный язык",
        kab: "307",
        name: "",
        time: "16:35-18:05",
      },
    ],
    [
      {
        title: "Информатика",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "11:05-12:35",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "13:00-14:30",
      },
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "14:55-16:25",
      },
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "16:35-18:05",
      },
    ],
    [
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "9:10-10:40",
      },
      {
        title: "Дискретная математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "История",
        kab: "403",
        name: "Алямкина Елена Семеновна",
        time: "9:10-10:40",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "11:05-12:35",
      },
      {
        title: "Дискретная Математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "13:00-14:30",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "14:55-16:25",
      },
    ],
  ],
  nechet: [
    [
      {
        title: "Разговоры о важном",
        kab: "408",
        name: "Фейзуллаева Эльвира Мирьяновна",
        time: "8:15-9:00",
      },
      {
        title: "Информационные технологии",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "9:10-10:40",
      },
      {
        title: "Архитектура аппаратных средств",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "Физическая культура",
        kab: "спотрзал",
        name: "Чернова Людмила Львовна",
        time: "11:05-12:35",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "13:00-14:30",
      },
      {
        title: "Архитектура аппаратных средств ",
        kab: "414",
        name: "Екатерина Александровна Щупкина",
        time: "14:55-16:25",
      },
      {
        title: "Иностранный язык",
        kab: "307",
        name: "Петрова Лера Юрьевна",
        time: "16:35:18:05",
      },
    ],
    [
      {
        title: "История",
        kab: "403",
        name: "Алямкина Елена Семеновна",
        time: "9:10-10:40",
      },
      {
        title: "Информатика",
        kab: "110",
        name: "Мызников Вячеслав Игоревич",
        time: "11:05-12:35",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "13:00-14:30",
      },
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "14:55-16:25",
      },
    ],
    [
      {
        title: "Высшая Математика",
        kab: "404",
        name: "Киселева Анастасия Владимировна",
        time: "9:10-10:40",
      },
      {
        title: "Дискретная математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "11:05-12:35",
      },
      {
        title: "Электротехника",
        kab: "412",
        name: "Скороход Светлана Александровна",
        time: "13:00-14:30",
      },
    ],
    [
      {
        title: "История",
        kab: "403",
        name: "Алямкина Елена Семеновна",
        time: "9:10-10:40",
      },
      {
        title: "Операционные системы и среды",
        kab: "312",
        name: "Шамсият Рабадановна Махжутдинова",
        time: "11:05-12:35",
      },
      {
        title: "Дискретная Математика",
        kab: "208",
        name: "Петрова Елена Александровна",
        time: "13:00-14:30",
      },
      {
        title: "Инженерная и компьютерная графика",
        kab: "314",
        name: "Аида Наилевна Зайнуллина",
        time: "14:55-16:25",
      },
    ],
  ],
};
const timetable_to_send = {chet:[[],[],[],[],[]],nechet:[[],[],[],[],[]]}

let iterator = (day)=>{
  let g = 0
  for(let i = 0; i<=day.length; i+=4){
    para = []
    for(g = g; g < i; g++){
      //console.log(day[g])
      para.push(day[g])
    }
    if (para.length != 0){
      obj = {
      title: para[0],
      kab: para[2],
      name: para[3],
      time: para[1],}
      console.log(obj)
    }
  

    console.log("******")
  }
}


// какиш
document.querySelector(".save-all").addEventListener("click", () => {
  let group_name = document.querySelector("#group-name").value;// название группы
  console.log(group_name)
  let mo =[]
  let tu = []
  let we =[]
  let th =[]
  let fr = []
  monday.querySelectorAll("input").forEach((e)=>{if(e.value !=""){mo.push(e.value)}})
  tuesday.querySelectorAll("input").forEach((e)=>{if(e.value !=""){tu.push(e.value)}})
  wednesday.querySelectorAll("input").forEach((e)=>{if(e.value !=""){we.push(e.value)}})
  thursday.querySelectorAll("input").forEach((e)=>{if(e.value !=""){th.push(e.value)}})
  friday.querySelectorAll("input").forEach((e)=>{if(e.value !=""){fr.push(e.value)}})
  console.log(iterator(mo))
  //let timetable = { "group": group_name }
});
