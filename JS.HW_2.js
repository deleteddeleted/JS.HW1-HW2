//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1
for (let i = 1; i < 11; i++) { 
    console.log(2**i);
  }

//1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
const pow = function (counter) {
    for (let i = 1; i<=counter;i++) {
console.log(2**i) 
    }
}
pow(10)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
let result = ''
let smile =';)'
for (let i = 1;i < 10;i++){
    console.log(result += smile)
}

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
//e.g. function getWordStructure(word)
//В консоли: 
//Слово (word) состоит из  (число) гласных и (число) согласных букв
function getWorldStructure(word){
    const vowels = 'aeiouy'.split('')
    const consonants = 'bcdfhjklmnpqrstvwxz'.split('')
    console.log(vowels)
    let vowelsCount = 0;
    let consonantsCount = 0;
    for (const char of word.toLowerCase()){
        if (vowels.includes(char))vowelsCount++
        else if (consonants.includes(char))consonantsCount++
    }
    console.log(`в слове ${word} :${vowelsCount} гласных и ${consonantsCount} согласных букв`)
}
getWorldStructure("Check-list")
getWorldStructure("case")
getWorldStructure("Case")

//4**. Написать функцию, которая проверяет, является ли слово палиндромом
//e.g. function isPalindrom(word)
function isPalindrom(word){
    word = word.toLowerCase()
        for (let i = 0, j=word.length-1; i < word.length,j >= 0; i++, j-- ) {
           if (word [i] !== word [j]) {
            return false
           }
           return true
        }   
}
console.log(isPalindrom("Abba"))