import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
var Cal = function(divId) {
  // Сохраняем идентификатор div
  this.divId = divId;
  // Дни недели, начиная с понедельника
  this.DaysOfWeek = [
    'Пн',
    'Вт',
    'Ср',
    'Чтв',
    'Птн',
    'Суб',
    'Вск'
  ];

// Месяцы, начиная с января
this.Months =['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

// Устанавливаем текущий месяц, год ??
var d = new Date();
this.currMonth = d.getMonth();
this.currYear = d.FullYear();
this.currDay = d.getDate();
};

// Переход к следцющему месяцу 
Cal.prototype.nextMonth = function() {
  if (this.currMonth == 11) {
    this.currMonth = 0;
    this.currYear = this.currYear + 1;
  }
  else {
  this.currMonth = this.currMonth + 1;
}
this.showcurr();
};

// Переход к предыдущему месяцу
Cal.prototype.previousMonth = function() {
  if (this.currMonth == 0) {
    this.currMonth = 11;
    this.currYear = this.currYear - 1;
  }
  else {
    this.currMonth = this.currMonth - 1;
  }
  this.showcurr();
};

// Показать текущий месяц
Cal.prototype.showcurr = function() {
  this.showMonth(this.currYear, this.currMonth);
};

// Показать месяц (год, месяц) ?????????
Cal.prototype.showmonth = function(y, m) {
  var d = new Date()
  // Первый день недели в выбранном месяце
  , firstDayOfMonth = new Date(y, m, 7).getDay()
  // Последний день выбранного месяца
  , lastDayOfMonth = new Date(y, m+1, 0).getDate()
  // Последний день предыдущего месяца ?????????
  , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();
  
  var html = '<table>'; // вписали таблицу в переменную? JSX?
}

// Запись выбранного месяца и года
html += '<thead><tr>' // строка в заголовке таблицы, конкатенация??
html += '<td colspan="7">' + this.Months[m] + ' ' + y + '</td>';
html += '</tr></thead>';

// Загловок дней недели
html += '<tr class="days">';
for(var i=0; i < this.DaysOfWeek.length; i++) {
  html += '<td>' + this.DaysOfWeek[i] + '</td>';
};
html += '</tr>';

// Записываем дни 
var i=1;
do {
  var dow = new Date(y, m, i).getDay(); // ПЕРЕМЕННЫЕ?????

// Начачть новую строку в понедельник
if (dow == 1) {
  html += '<tr>';
}

// Если первый день недели не понедельник, показать последние дни предыдущего месяца
 else if (i == 1) { // WHILE пропустили?
  html += '<tr>';
  var k = lastDayOfMonth - firstDayOfMonth+1;
  for (var j=0; j < firstDayOfMonth; j++) {
    html += '<td class="not-current">' + k + '</td>'; // not-current????
    k++;
  } 
}

// Записываем текущий день в цикл
var chk = new Date();
var chkY = chk.getFullYear();
var chkM = chk.getMonth();
if (chkY == this.currYear && chkM == this.currMonth && i == this.currDay) {
  html += '<td class="today">' + i + '</td>';
} else {
  html += '<td class="normal">' + i + '</td>';
}; // normal?????

// Закрыть строку в воскресенье
if (dow == 0) {
  html += '</tr>';
}

// Если последний день месяца не воскресенье, показать первые дни следующего месяца
else if (i == lastDateOfMonth) { // i???????
  var k=1;
  for(dow; dow < 7; dow++) {
    html += '<td class="not-current">' + k + '</td>';
    k++;
  };
};
i++;
}

while(i <= lastDateOfMonth);

// Конец таблицы
html += '</table>';

// Записываем html в div
document.getElementById(this.divId).innerHTML = html;

// При загрузке окна
window.onload = function() {
  // Начать календарь
  var c = new Cal("divCal"); // присвоили id переменной??
  c.showcurr(); //показать текущее??????
};

// Привязывам кнопки "Следующий" и "Предыдущий"
getId('btnNext').onclick = function() {
  c.nextMonth();
};
getId('btnPrev').onclick = function() {
  c.previousMonth();
};

// Получить элемент по id
function getId(id) {
  return document.getElementById(id);
};












