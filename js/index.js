'use strict'

const cancelMessage = 'Отменено пользователем!';
const wrongLoginMessage = 'Доступ запрещен, неверный логин!';
const wrongPasswordMessage = 'Доступ запрещен, неверный пароль!';
const welcomeMessage = 'Добро пожаловать!'

const adminLogin = prompt('Введите логин: ', '');
if (adminLogin === null) {
  alert(cancelMessage);
} else if (adminLogin === 'admin') {
  const adminPassword = prompt('Введите пароль: ');
  if (adminPassword === null) {
    alert(cancelMessage);
  } else if (adminPassword === 'm4ngo1zh4ackz0r') {
    alert(welcomeMessage);
  } else {
    alert(wrongPasswordMessage);
  }
} else {
  alert(wrongLoginMessage);
}
