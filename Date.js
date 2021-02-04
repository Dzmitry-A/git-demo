// 1. Получить текущую дату, вывести в консоль
let nowDate = new Date ();
console.log ( nowDate );

// 2.Получить день, месяц и год текущей даты и по отдельности вывести в консоль
console.log ( nowDate.getFullYear() );
console.log ( nowDate.getMonth() );
console.log ( nowDate.getDate() );

// 3. Решить задачи из ссылки на теорию
// 3.1. Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
let StDate = new Date( 2012, 1, 20, 3, 12);
console.log ( StDate );

// 3.2. Покажите день недели
function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2021, 1, 4); 
console.log ( getWeekDay(date) ); 

// 3.3. День недели в европейской нумерации
function getLocalDay(date) {

  let day = date.getDay();

  if (day == 0) { 
    day = 7;
  }

  return day;
}
console.log ( getLocalDay(date) ); 

// 3.4. Какой день месяца был много дней назад?
function getDateAgo(date, days) {
  let dateCopy = new Date(date);

  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate();
}

let date1 = new Date(2015, 0, 2);

console.log ( getDateAgo(date1, 1) ); 
console.log ( getDateAgo(date1, 2) ); 
console.log ( getDateAgo(date1, 365) );

// 3.5. Последнее число месяца?
function getLastDayOfMonth(year, month) {
  let date = new Date(year, month + 1, 0);
  return date.getDate();
}

console.log ( getLastDayOfMonth(2012, 0) ); 
console.log ( getLastDayOfMonth(2012, 1) ); 
console.log ( getLastDayOfMonth(2013, 1) ); 

// 3.6. Сколько сегодня прошло секунд?
function getSecondsToday() {
  let d = new Date();
  return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}
console.log ( getSecondsToday () );

// 3.7. Сколько секунд осталось до завтра?
function getSecondsTomorrow() {
  let now = new Date();

  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; 
  return Math.round(diff / 1000); 
}

console.log ( getSecondsTomorrow() );

// 3.8. Форматирование относительной даты
function formatDate(date) {
  let dayOfMonth = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let diffMs = new Date() - date;
  let diffSec = Math.round(diffMs / 1000);
  let diffMin = diffSec / 60;
  let diffHour = diffMin / 60;

  year = year.toString().slice(-2);
  month = month < 10 ? '0' + month : month;
  dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
  hour = hour < 10 ? '0' + hour : hour;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  if (diffSec < 1) {
    return 'прямо сейчас';
  } else if (diffMin < 1) {
    return `${diffSec} сек. назад`
  } else if (diffHour < 1) {
    return `${diffMin} мин. назад`
  } else {
    return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
  }
}

console.log ( formatDate(new Date(new Date - 1)) );
console.log ( formatDate(new Date(new Date - 30 * 1000)) ); 
console.log ( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 

