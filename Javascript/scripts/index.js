console.log()

/* 
    text and spcl characters --> String
    numbers --> number
    yes or no --> True or False --> boolean/ bool

    type()

    operations : 
        arth
            +, -, /, *, %, **
        assign
            =
        compa
            >, <, ==. !=. >=, <=, ===, !==
        logical
            && - 2 inputs - 1 output

            input1  input2  output
            true    true    true
            false   true    false
            true    false   false
            false   false   false
            
            , || - 2 inputs - 1 output

            input1  input2  output
            true    true    true
            false   true    true
            true    false   true
            false   false   false, 
            

            !

            input   output
            true    false
            false   true
        uniary
            increment ++
            decrement --
                pre
                    ++ varible/ -- variable
                post
                    variable ++/ variable --
        conditional
*/

/* 
    defining a variable : 
        var
        let
        const

        syntax :    
            kw variableName
    
        Rules to write a variable name : 
            1. we should not use keywords as variable names
            2. we should not use special characters in variable name except _ or $
            3. we should not start a variable name with number.

    case notation : 
        camel case
            camelCase
            userAge
        pascal case
            PascalCase
            UserAge
        snake case
            snake_case
            SNAKE_CASE
*/

// let value1 = 54
// let value2 = '54'

// value1 += value2
// value1 = value1 + value2

// console.log(value1)

// console.log(value1 == value2)
// console.log(value1 === value2)

// let username = "sample@gmail.com"
// let password = "123456"

// let db_username = "sample@gmail.com"
// let db_password = "123456"

// console.log(username == db_username && password == db_password || true)

// console.log(true && false || true && !false) //

// let a = 4

// console.log( ++ a + 5) //10 | 9
// console.log( a ++ + 6) //11 | 11 
// console.log(a) //6 | 11

// console.log(a) //5   | a = 5
// console.log(++ a) //6 | a = 6
// console.log(a ++) //6 | a = 7 
// console.log(a) //7



// let username = "sample@gmail.com"
// let password = "123456"

// let db_username = "sample@gmail.com"
// let db_password = "1234"

// // (condition)? true block : false block

// console.log((username == db_username && password == db_password)?  "valid user" : "invalid user")

/* 
    truthy : except default values any value is considered as true
    falsey : all the defaults are considered as false
        undefined
        0
        ""
        null
        0.0

    conditional statement 
        if
            syntax : 
                if(condition){

                }
        if else
        if else if
        switch

        syntax : 
            switch(input){
                case value1:
                    block of statements
                    break;
                case value2:
                    block of statements
                default:
                    block of default statements
            }
*/

// let day = 1

// switch(day){
//     case 1:
//         console.log("Monday")
//         break
//     case 2:
//         console.log("Tuesday")
//         break
//     case 3: 
//         console.log("Wednesday")
//     default: 
//         console.log("No case matched with the given value")
// }

/* 
    grade allocation system

    > 90 -- O grade
    between 70 and 90 -- A grade
    between 50 and 70 -- B grade
    between 30 and 50 -- C grade
    < 30 -- Fail
*/

// let marks = 90

// if(marks > 90){
//     console.log("O Grade")
// }else if(marks > 70){
//     console.log("A Grade")
// }else if(marks > 50){
//     console.log("B Grade")
// }else if(marks > 30){
//     console.log("C Grade")
// }else{
//     console.log("Fail")
// }

// let username = "sample@gmail.com"
// let password = "123456"

// let db_username = "sample@gmail.com"
// let db_password = "1234"

// if(username == db_username && password == db_password){
//     console.log("valid user")
// }
// else{
//     console.log("invalid user")
// }

// let a

// console.log(a)


// let isAdmin = "" //false
// let b = "admin options" //true


// if(isAdmin){
//     console.log("line")
//     console.log("line")
//     console.log("line")
//     console.log("line")
// }

// if(false){
//     console.log("line f")
//     console.log("line f")
//     console.log("line f")
//     console.log("line f")
//     console.log("line f")
// }

/* 
    iteration statements or loops : 

        starting : initialization 
        condition : to stop or to control the loop
        update : updating the value

        for  -- range
            syntax : 
                for(let var1 = init-value; condition; update){
                    //block of code
                }

            flow of loop : 
                1. init
                2. condition -- true - goto step3 or else exit the loop
                3. execution
                4. update
                5. go to step 2

        while -- unknown range

            syntax : 
                init

                while(condition){
                    //block of statements
                    update
                }
        do-while -- iterating statement atleast once

            syntax : 
                init

                do{
                    //block of statements
                    update
                }while(condition)
*/

// for(let number = 1; number <= 1000; number ++){
//     if(number % 2 == 0){
//         console.log(number,"Even number")
//     }else{
//         console.log(number,"odd Number")
//     }
// }


// let number = 1

// if(number % 2 == 0){
//     console.log(number,"Even number")
// }else{
//     console.log(number,"odd Number")
// }

/* 
    break
    continue
*/

// for(let i = 1; i <= 10; i ++){
//     if(i == 4 || i == 7){
//         break
//     }
//     console.log(i)
// }

/* 
    data belongs to a single category
    Array -- collection of data

    []
    can be stored inside a single variable
    index - 0 - n-1 (n = length)
*/

// let jobApplications = [1,2,3,4,5,6]
// // jobApplications = 2

// console.log(jobApplications)

// jobApplications[0] = 11

// console.log(jobApplications[0])


// let a = [1,2,3,4,5,6,77,87,98, "Hello", "Ant", "Bat"]

// a.push(91) //insert value at the end of an array
// a.pop() //delete value at the end of an array

// a.unshift(45) //insert value at the start of an array
// a.shift() //delete value at the start of an array

// splice(index, remove-count, data)
// a.splice(3,2, 65, 81)

// console.log(a)

// a.sort()

// console.log(a)

// a.reverse()

// // console.log(a)

// let number = 10

// if(number % 2 == 0){
//     console.log(number,"is even number")
// }else{
//     console.log(number, "is odd number")
// }

// function isEven(number){
//     if(number % 2 == 0){
//         console.log(number,"is even number")

//         return "Even"
//     }else{
//         console.log(number, "is odd number")
//     }
// }

// isEven(5)
// isEven(17)
// console.log(isEven(6))
// isEven(2)
// isEven(15)

// number = 14

// if(number % 2 == 0){
//     console.log(number,"is even number")
// }else{
//     console.log(number, "is odd number")
// }


/* 
    syntax : 
        function functionName(parameter(optional)){
            //block of code
        }
*/

// function sample(){
//     console.log("Sample function 1")
//     console.log("Sample function 2")
//     console.log("Sample function 3")
//     console.log("Sample function 4")
// }


// sample()

// sample()

// console.log("some other line here 1")
// console.log("some other line here 2")
// console.log("some other line here 3")

// sample()

// function test(){
//     console.log("test function")
// }

// test()

// console.log(test)



// const duplicateFunction = () => {
//     console.log("test function")
// }

// duplicateFunction()

// let a = [1,2,3,4,5]

// a[10] = 89

// let b = a.reduce((prev, current, index, array) => {
//     console.log(prev, current, index)
//     return prev + current
// })

// let b = []

// for(let i = 0; i < a.length; i ++){
//     b[i] = a[i]
// }

// b = a.map((value) => {
//     return value * value
// })

// let b = a.filter((value) => {
//     return value%2 == 0
// })

// console.log('a = ',a)
// console.log('b = ',b)

// a[3] = 44 

// console.log('a = ',a)
// console.log('b = ',b)

// for(let i = 0; i < a.length; i ++){
//     console.log(a[i])
// }

// a.forEach((value, index, array) => {
//     console.log(value, index, array)
// })

/* 
    foreach
        syntax : 
            foreach(callBack)

            function callBack(value, index, array){

            }
*/

// function test1(para){
//     console.log("test1 function")
//     para()
// }

// test1(() => {
//     console.log("para statement")
// })

// const para = document.getElementById('para')
// const para = document.querySelector('#para')
// const button = document.getElementById('click-me')

// button.addEventListener('click', buttonHandler)

// function buttonHandler(event){
//     console.log(event)
//     console.log("button clicked")
//     para.style.display = "none"
// }

// console.log(document.getElementsByTagName('p'))

// console.log(document.getElementsByTagName('p')[0].innerText)

// document.getElementsByTagName('p')[0].innerHTML = "<h1> this line added in js </h1>"

// let data  = "abc@gmail.com"

// const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// console.log(emailPattern.test(data))


const form = document.getElementById('form')

const usernameErrorElement = document.getElementById('username-error')

const passwordErrorElement = document.getElementById('password-error')

const rePasswordErrorElement = document.getElementById('repassword-error')

form.addEventListener('submit', (e) => {
    e.preventDefault() //stops the data submission and page reload
    console.log("form handled")
    console.log(e)

    usernameErrorElement.innerText = ""
    passwordErrorElement.innerText = ""
    rePasswordErrorElement.innerText = ""

    const usernameField = document.getElementById('email')
    const username = usernameField.value //provides the input field value

    const passwordField = document.getElementById('password')
    const password = passwordField.value 

    const rePasswordField = document.getElementById('repassword')
    const rePassword = rePasswordField.value

    const validationResult = validateFormData({username, password, rePassword})

    if(validationResult?.username || validationResult?.password || validationResult?.rePassword){
        console.log("errors are present")
        if(validationResult?.username){
            usernameErrorElement.innerText = validationResult.username
        }

        if(validationResult?.password){
            passwordErrorElement.innerText = validationResult.password
        }

        if(validationResult?.rePassword){
            rePasswordErrorElement.innerText = validationResult.rePassword
        }

    }else{
        console.log("errors are not present")
        usernameErrorElement.innerText = ""
        passwordErrorElement.innerText = ""
        rePasswordErrorElement.innerText = ""
    }
})

function validateFormData(data){
    const errors={}
    console.log(data)
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[a-zA-Z\d@$!%*?&]).{8,}$/

    if(data.password != data.rePassword){
        errors.rePassword = "Your passwords not matched with one another"
    }

    if(!EMAIL_REGEX.test(data.username)){
        errors.username = "Enter a valid email address"
    }

    if(!PASS_REGEX.test(data.password)){
        errors.password = "password must contain minimum of 8 characters, at least one uppercase letter, one lowercase letter, one digit, and one special character"
    }

    console.log(errors)

    return errors
}