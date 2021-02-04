// Реализовать инкапсуляцию
function User (name) {
    this.name = name;
    let _age = 1;
    this.displayInfo = function(){
        console.log('Имя: ' + this.name + '; возраст: ' + _age);
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === 'number' && age >0 && age<110){
            _age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}
 
let tom = new User("Том");
console.log(tom.getAge()); 
tom.setAge(32);
console.log(tom.getAge()); 
tom.setAge("54"); 
tom.setAge(123); 
