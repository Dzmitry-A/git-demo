/*  Создать объект в одном файле, использовать свойство
 объета в другом файле */

function admin (name) {
  if (name == 'Dzmitry') {
  return true; 
  } else { 
  return false
  }  
};
export {admin};