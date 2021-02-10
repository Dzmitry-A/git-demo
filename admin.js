/*  Создать объект в одном файле, использовать свойство
 объета в другом файле */

let admin = function(name) {
  if (name == 'Dzmitry') {
  return true; 
  } else { 
  return false
  }  
};
module.exports = admin;