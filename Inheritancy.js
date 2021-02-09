// Есть объект a с набором свойств, объект b должен унаследовать свойства a  
let user = {
  name: 'Dzmitry',
  surname: 'Abramuk',

  set fullName(value) {
    [this.name, this.surname] = value.split(' ');
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); 


admin.fullName = 'Ivan Ivanov'; 
console.log(admin.name); 
console.log(admin.surname); 
