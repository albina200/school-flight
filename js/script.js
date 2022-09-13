let hamburger = document.querySelector(".hamburger"); //Создааём переменую в которую попадает кнопка гамбургер
let navLinks = document.querySelector(".nav__links"); //Создаём переменную в которую попадает навлинкс
let navPhon = document.querySelector(".nav__phon");//Создаём переменную в которую попадает навпфон
let aboutUs = document.querySelector("#aboutUs") //Создаём переменную с id а значит пишем #
let missia = document.querySelector("#missia")
let forWhom = document.querySelector("#forWhom")
let registration = document.querySelector("#registration")
let navAAll = document.querySelectorAll("nav a");//Состовная переменная в которую попали все ссылки из нава
console.log (navAAll)
hamburger.onclick = function (){ //При нажатии на гамбургер запускается функция
    hamburger.classList.toggle("hamburger_active"); //Переключаем гамбургеру класс
    navLinks.classList.toggle("nav__links_active"); //Переключаем навлинксу класс
    navPhon.classList.toggle("nav__phon_active");
}

// navPhon.onclick = function (){ //При нажатии на телфон запускается функция 
//     navLinks.classList.remove("nav__links_active"); //Удаляем класс у навлинкс
//     hamburger.classList.remove("hamburger_active");
//     navPhon.classList.remove("nav__phon_active");
// }

// aboutUs.onclick = function (){
//     navLinks.classList.remove("nav__links_active");
//     hamburger.classList.remove("hamburger_active");
//     navPhon.classList.remove("nav__phon_active");
// }

// missia.onclick = function (){
//     navLinks.classList.remove("nav__links_active");
//     hamburger.classList.remove("hamburger_active");
//     navPhon.classList.remove("nav__phon_active");
// }

// forWhom.onclick = function (){
//     navLinks.classList.remove("nav__links_active");
//     hamburger.classList.remove("hamburger_active");
//     navPhon.classList.remove("nav__phon_active");
// }


// registration.onclick = function (){
//     navLinks.classList.remove("nav__links_active");
//     hamburger.classList.remove("hamburger_active");
//     navPhon.classList.remove("nav__phon_active");
// }

for(let i=0;i<6;i++){//цикл (переменная для цикла;сколько будет рабоать цикл;на сколько будет увеличивотся переменная за один цикл)
    navAAll[i].onclick = function (){
        navLinks.classList.remove("nav__links_active");
        hamburger.classList.remove("hamburger_active");
        navPhon.classList.remove("nav__phon_active");
    }
    console.log(i)
}