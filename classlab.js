// Question 1a

// class Person{
//     constructor(firstName, lastName, middleName){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.middleName = middleName
//     }
//     intro(){
//     return "My name is " + this.firstName
//     }
// }
// let nilber = new Person("Nilber", "Remon", "Pursuit")
// console.log(nilber.intro())

// Question 1b

// class Person{
//     constructor(firstName, lastName, middleName){
//         this.firstName = firstName
//         this.lastName = lastName
//         this.middleName = middleName
//     }
//     intro(){
//     return "My name is " + this.firstName
//     }
//     fullName(){
//     return "My name is " + this.firstName + " " + this.lastName
//     }
// }
// let nilber = new Person("Nilber", "Remon", "Pursuit")
// console.log(nilber.fullName())

// QUESTION 2a

// class Book {
//     constructor(title, author, rating){
//     this.title = title
//     this.author = author
//     this.rating = rating
//     }
    
// }
// let harrypotter = new Book("Harry Potter 6", "JK Rowling", 10)
// console.log(harrypotter)

// let disposes = new Book ("The disposessed", "Ursula", 10)
// console.log(disposes)

// QUESTION 2b
// class Book {
//     constructor(title, author, rating){
//     this.title = title
//     this.author = author
//     this.rating = rating
//     }
//     isGood(){
//     if(this.rating >= 7){
//         return "true"
//          }else {
//              return "false"
//          }
//     }  
// } 
// let harrypotter = new Book("Harry Potter 6", "JK Rowling", 5)
//  console.log(harrypotter.isGood())

// QUESTION 3a & b

// class Dog{
//     constructor(name, breed, mood, hungry){
//     this.name= name
//     this.breed= breed
//     this.mood = mood
//     this.hungry = hungry
//     }
//     playFetch(){
//         this.hungry = true
//         this.mood = "playful"
//         return "ruff"
//     }
// }
// let brady = new Dog ("brady", "german shepherd", "happy", true)
// console.log(brady.playFetch())


// QUESTION 3C
// class Dog{
//     constructor(name, breed, mood, hungry){
//     this.name= name
//     this.breed= breed
//     this.mood = mood
//     this.hungry = hungry
//     }
//     playFetch(){
//         this.hungry = true
//         this.mood = "playful"
//         return "ruff"
//     }
//     feed(){
//         if (this.hungry === false){
//             return "woof"
//         }else{
//             return "The dog doesn't look hungry"
//         }

//     }
// }
// let brady = new Dog ("brady", "german shepherd", "happy", true)
// console.log(brady.feed())

// QUESTION 3D

// class Dog{
//     constructor(name, breed, mood, hungry){
//     this.name= name
//     this.breed= breed
//     this.mood = mood
//     this.hungry = hungry
//     }
//     playFetch(){
//         this.hungry = true
//         this.mood = "playful"
//         return "ruff"
//     }
//     feed(){
//         if (this.hungry === false){
//             return "woof"
//         }else{
//             return "The dog doesn't look hungry"
//         }


//     }
//     toString(){
//     return this.name + " is a " + this.breed + " who loves to run outside."
//     }
// }
// let brady = new Dog ("brady", "german shepherd", "happy", true)
// console.log(brady.toString())