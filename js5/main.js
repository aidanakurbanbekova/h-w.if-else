//  1.Напишите скрипт, который считает количество секунд в часе.
const secondsInAMinute = 60;
const minutesInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minutesInAnHour;
console.log(secondsInAnHour)


//  2.Создайте три переменные - час, минута, секунда.
//  С их помощью выведите текущее время в формате 'час:минута:секунда'.

const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
console.log(`${hour+ ':'}${minutes+ ':'}${seconds+ ':'}`);


//  3. В переменной day лежит какое-то число из интервала от 1 до 31.
//  Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = prompt("Введите число ")
if (day >= 1 && day <= 10){
    console.log("число находится в первой декаде");
}
else if (day >= 10 && day <= 20) {
    console.log("число находится в второй  декаде");
}
else if (day >= 20 && day <= 30) {
    console.log("число находится в третьей  декаде");
}




//  4. В переменной month лежит какое-то число из интервала от 1 до 12.
//  Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
let month = Number(prompt("Введите месяц"));
if (month === 12 || month ==1 || month == 2){
    console.log("зима");
}else if (month >=3 && month <= 5) {
    console.log("весна");
}else if (month >= 6 && month <= 8) {
    console.log("лето");
}else if (month >= 9 && month <= 11) {
    console.log("осень");
}