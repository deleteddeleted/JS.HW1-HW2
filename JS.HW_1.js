/1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
let age_1 = 10 
let age_2 = 18 
let age_3 = 60
const checkAge = function(age) {
    
    if (age < age_2){
        console.log("You don't have access cause your age is " + age + " It's less then")   
    } 
    else if (age >= age_2, age < age_3){
        console.log("Welcome !")
    } 
    else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } 
    else {
        console.log("Technical work")
    } 

}
checkAge(17)
checkAge(18)
checkAge(61)

//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
let age_1 = 10 
let age_2 = 18 
let age_3 = 60
const checkAge = function(age) {
    if(typeof age === 'number') {
    if (age < age_2){
        console.log("You don't have access cause your age is " + age + " It's less then")   
    } 
    else if (age >= age_2 && age < age_3){
        console.log("Welcome !")
    } 
    else if (age > age_3){
        console.log("Keep calm and look Culture channel")
    } 
    else {
        console.log("Technical work")
    } 

} else { console.log('Not integer value')}
}
checkAge(17)
checkAge('aaaaaa')


//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
let age_1 = 10 
let age_2 = 18 
let age_3 = 60
const checkAge = function(age){
    if (age && !isNaN(age)) {
        if (age < age_2){
            console.log("You don't have access cause your age is " + age + " It's less then")   
        } 
        else if (age >= age_2, age < age_3){
            console.log("Welcome !")
        } 
        else if (age > age_3){
            console.log("Keep calm and look Culture channel")
        } 
        else {
            console.log("Technical work")
        } 
    } else console.log("Not an integer value")
}
checkAge(17)
checkAge(18)
checkAge(61)
checkAge("aaaaa")

4. const check_age = function(age) {
   
   if (+age) {
      
         if (age < age_2) {
            console.log("You don’t have access cause your age is ", + age + " It’s less then ")
         } else if (age >= age_2 && age < age_3) {
            console.log("Welcome  !")
         } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
         } else {
            console.log("Technical work")
         }
   } else {console.log("it's not a number")}
}
check_age(17)

/*const check_age = function(age) {
   
   if (+age) {
      
         if (age < age_2) {
            console.log("You don’t have access cause your age is ", + age + " It’s less then ")
         } else if (age >= age_2 && age < age_3) {
            console.log("Welcome  !")
         } else if (age > age_3) {
            console.log("Keep calm and look Culture channel")
         } else {
            console.log("Technical work")
         }
   } else {console.log("it's not a number")}
}
let agePrompt = prompt("Enter age")
check_age(agePrompt)*/