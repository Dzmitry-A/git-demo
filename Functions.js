// 1. Функция сложения двух чисел

function sum ( x, y ) {
	return x + y;
}

let result = sum ( 10, 24 );
console.log (result);

function min ( a, b ) {
	if ( a < b ) {
		return a;
	} else if (a > b) {
		return b;
	} else return ' a = b ';
}
let pop = min ( 11, 11);
console.log (pop);



// 2. Функция опредления имени(если имя  ваше, то привет + имя)
	
function name ( nam ) {
	if ( nam == 'Дима' ) {
		console.log ('Привет ' + nam );
	} else {
		console.log ('Не известное имя');
	}
}
name ('Дима');

// 3. Функция вычесления типа аргумента и вывод в консоль

function type ( t ) {
	let t1 = typeof (t);
	console.log (t1);
}
type (undefined);

// 4. Функция выбора четных элементов массива(возвращает новый массив)

function even (arr) {
	let arr1 = arr.filter(i => i%2 === 0);
	console.log (arr1);
}

even ([1,3,2,5,6,8,10]);

// 5.1 
function reverseNumber ( rn ) {
	rn = String(rn);
	rn = rn.split ('');
	rn = rn.reverse();
	rn = rn.join('');
	rn = Number(rn)
return rn;
}
console.log(reverseNumber (12345));

// 5.2 
function checkPalindrome(str) {
let lowerStr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
let revStr = lowerStr.split('').reverse().join('');
if(lowerStr == revStr) {
console.log(str + ' - Палиндром')
} else {
console.log(str + ' - Не палиндром')
}
}
checkPalindrome('Eve');
checkPalindrome('mother');
checkPalindrome('cat');

// 5.3
function substr(str){
for ( i = 0 ; i < str.length ; i++ ){
for ( j = i + 1 ; j < (str.length + 1); j++)
{
let str1 = str.substring(i , j);
console.log(str1);
}
}
}
substr('dog');

// 5.4 
function sortAlphabet (str) {
return str.split('').sort().join('');
}
console.log(sortAlphabet('capital'));

// 5.5 
function upperCase(str)
{
  let arr = str.split(' ');
  let arr1 = [];
    
  for(let x = 0; x < arr.length; x++){
      arr1.push(arr[x].charAt(0).toUpperCase()+arr[x].slice(1));
  }
  return arr1.join(' ');
}
console.log(upperCase("the quick brown fox"));

// 5.6 
function findLongestWord(str)
{
  let array1 = str.split(' ');
  let result = array1[0];

  for(let x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(findLongestWord('Web Development Tutorial'));

// 5.7
function countingVowels(str)
{
	let result = 0;
	let array1 = str.split('');
	for (let i = 0; i < (array1.length + 1); i++)
	{
		if (array1[i] === 'а' || array1[i] === 'е' || array1[i] === 'и' || array1[i] === 'о' || array1[i] === 'у' 
		|| array1[i] === 'ы' || array1[i] === 'э' || array1[i] === 'ю' || array1[i] === 'я') 
	
	{
		result++;
	}
	}
	return result;
}
console.log(countingVowels('Какая то строка'));

// 5.8
function testPrime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(let x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(testPrime(11));

// 5.9 Аналогично с заданием 3

// 5.10 
function matrix(n) {
    for (let i=0; i < n; i++)
    {
        for (let j=0; j < n; j++)
        {
               if (i === j)
               {
                
                 console.log(' 1 ');
               }
                      
               else 
                {
                 console.log(' 0 ');}
        }
    console.log('----------');
    }
}
matrix(5);

// 5.11
function second(arr) 
{
	function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}
let newArr = arr.sort(compareNumeric);
let secLow = newArr[1];
let secLar = newArr[newArr.length - 2];
let newArr1 = [secLow, secLar];
return newArr1.join(',');
}
console.log(second([11,4,56,3,34,48,23]));

// 5.12
function isPerfect(number)
{
let temp = 0;
    for(let i=1;i<=number/2;i++)
    {
        if(number%i === 0)
        {
        temp += i;
        }
    }
   
    if(temp === number && temp !== 0)
    {
    console.log('Это идеальное число');
    } else {
    console.log('Это не идеальное число');
    }   
 } 
isPerfect(28); 

// 5.13
function factors(n)
{
 let arr = [];
 
 for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1)
  if (n % i === 0)
  {
   arr.push(i);
   if (n / i !== i)
    arr.push(n / i);
  }
 arr.sort(function(x, y)
   {
     return x - y;});  
     return arr;
    }
console.log(factors(15));   
console.log(factors(16));   
console.log(factors(17)); 

// 5.14
function amountTocoins(amount, coins) 
{
 if (amount === 0) 
  {
     return [];
   } 
 else
   {
     if (amount >= coins[0]) 
       {
        left = (amount - coins[0]);
        return [coins[0]].concat( amountTocoins(left, coins) );
        } 
      else
        {
         coins.shift();
         return amountTocoins(amount, coins);
        }
    }
} 
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

// 5.15
function pow ( k, n ) {
	let res = k;
	for ( let i = 1; i < n; i++) {
		res *= k;
	}
	return res;
}

console.log (pow (2, 4));
	
// 5.16
function uniqueChar(str)
{
 let uniql="";
 for (let x=0;x < str.length;x++)
 {

 if(uniql.indexOf(str.charAt(x))==-1)
  {
  uniql += str[x];  
  
   }
  }
  return uniql;  
}  
console.log(uniqueChar("thequickbrownfoxjumpsoverthelazydog"));

// 5.17
function charCounts(str1) {
let uchars = {};
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});
return uchars;
}
console.log(charCounts("The quick brown fox jumps over the lazy dog"));

// 5.18
function arrayBinarySearch(narray, delement) {
   let mposition = Math.floor(narray.length / 2);

   if (narray[mposition] === delement){
      return mposition;
   }
   else if (narray.length === 1) 
   {
      return null;
   }
   else if (narray[mposition] < delement) {
      let arr = narray.slice(mposition + 1);
      let res = arrayBinarySearch(arr, delement);
      if (res === null)
      {
         return null;
      }
      else {
         return mposition + 1 + res;
      }
   }
   else {
      let arr1 = narray.slice(0, mposition);
      return arrayBinarySearch(arr1, delement);
   }
}

 let myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
 console.log(arrayBinarySearch(myArray, 6));
 
 // 5.19
 function biggerElements(arr, nr){
let res = [];
for(let i = 0; i < arr.length; i++){
if(arr[i] >= nr){
res.push(arr[i]);
}
}
return res;
}
console.log(biggerElements([12,13,14,111,23,34,45],23));

// 5.20
function makeid(l)
{
let text = "";
let charList = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(let i=0; i < l; i++ )
{  
text += charList.charAt(Math.floor(Math.random() * charList.length));
}
return text;
}
console.log(makeid(8));

// 5.21
function subset(arra, arraSize)
{
let resultSet = [], 
result;
    
   
for(let x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1; 
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arraSize)
       {
          resultSet.push(result);
        }
    }

    return resultSet; 
}

console.log(subset([1, 2, 3], 2));

// 5.22
function charCount (str, letter) {
	let str1 = str.split('');
	let result = 0;
	for (let i = 0; i<= str1.length; i++) {
		if (letter === str1[i]) {
			result++;
		}
	}
	return result;
}
console.log (charCount ('мама мыла раму', 'а'));

// 5.23
function findFirstNotRepeatedChar(str) {
  let arra1 = str.split('');
  let result = '';
  let ctr = 0;
 
  for (let x = 0; x < arra1.length; x++) {
    ctr = 0;
 
    for (let y = 0; y < arra1.length; y++) 
    {
      if (arra1[x] === arra1[y]) {
        ctr+= 1;
      }
    }
 
    if (ctr < 2) {
      result = arra1[x];
      break;
    }
  }
  return result;
}
console.log(findFirstNotRepeatedChar('абракадабра'));

// 5.24
function bubleSort(arr) {
let tmp;
  
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  
return arr;
}

console.log(bubleSort([12, 2, 345, 4, 546, 455, 23, 234, 213]));

// 5.25
function LongestCountryName(countryName){
return countryName.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
'');
}
console.log(LongestCountryName(['Австралия', "Беларусь", "Российская Федерация"]));

// 5.26
function longestSub(str){
let newStr = '';
for (let i = 0; i < str.length; i++) {
if (newStr.indexOf(str[i]) === -1) {
newStr += str[i];
}
}
return newStr;
}
console.log(longestSub('google.com'));

// 5.27
function reverse(word) {
return word.split('').reverse().join('');
}

const longestPalindrome = (str) => {
let lP = '';
for (let i = 0; i < str.length; i++) {
for (let c = i + 1; c <= str.length; c++) {
const subStr = str.substring(i, c);
if ( subStr === reverse(subStr) 
&& (subStr.length > lP.length) ) {
lP = subStr;
}
}
}
return lP;
}

console.log(longestPalindrome("abracadabra"));

console.log(longestPalindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 

// 5.28
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);

// 5.29
function nameFunction() {
console.log( arguments.callee.name );
}

nameFunction();