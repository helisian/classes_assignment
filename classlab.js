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


// QUESTION 4 a, b and c

let freezingPoint = {
    celsius : 0,
    farenheit : 32, 
    kelvin : 273
}
console.log(freezingPoint)

class Celsius {
    constructor (celsius){
        this.celsius = celsius
    }
    getFahrenheitTemp(){
    return 1.8 * this.celsius + 32
    }
    getKelvinTemp(){
    return this.celsius + 273
    }
    isBelowFreezing(){
    if (this.celsius < freezingPoint.celsius){
        return true
        } else{
            return false
        }   //git (**** Add to Less)
    }
}
let outside = new Celsius(-5)
console.log(outside.getFahrenheitTemp())
console.log(outside.getKelvinTemp())
console.log(outside.isBelowFreezing())

// QUESTION 5
class Movie {
    constructor(name, year, genre, cast, description){
    this.name = name
    this.year = year
    this.genre = genre
    this.cast = cast 
    this.description = description 
    }
    blurb(){
    return this.name + " came out in " + this.year + " It was a " + this.genre + " movie starring " + this.cast + " about a " + this.description
    }
}
let joker = new Movie("Joker", 2019, "horror", "joaquin pheonix", "killer clown")
console.log(joker.blurb())

//Question 6

class Vector {
    constructor (x, y) {
    this.x = x
    this.y = y
    }
    plus (vector){
    let vPlus = new Vector ((this.x + vector.x), (this.y + vector.y))
    return vPlus
    }
    minus (vector){
    let vMinus = new Vector (Math.abs((this.x - vector.x)), Math.abs((this.y - vector.y)))
    return vMinus
    
    }
    getLength() {      //|a| = √( x2 + y2 ) 
    return Math.round((Math.sqrt(Math.pow(this.x,2)+ Math.pow(this.y,2)))*100)/100
    }
}

var v1 = new Vector(1, 2)
var v2 = new Vector(2, 3)
console.log(v1.minus(v2))
console.log(v1.plus(v2))
console.log(v2.getLength())

//Question 7
// a. Write a class called `Cylinder` that has properties `radius` and `height`.  Create an instance of a Cylinder.
// b. Add an instance method `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)
// c. Add an instance method `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)

class Cylinder {
    constructor (radius, height){
        this.radius = radius
        this.height= height
    }
    getVolume (){  //volume	=	πr2h
        return Math.round((Math.PI * (this.radius * 2) * this.height)*100)/100
    }
    getSurfaceArea () {  //area	=	2πr2 +	2πrh
        return Math.round((2*Math.PI*2*this.radius)+ (2*Math.PI*this.radius*this.height))
    }
}

let Cylon = new Cylinder (10,25)
console.log(Cylon.getVolume())
console.log(Cylon.getSurfaceArea())

//Question 8
// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)
// a. Write a class called `Post` that has properties `datePosted`, `user`, and `text`.  Create an array of `Post` objects.
// b. Create an instance method that returns whether or not the post was made today.
// c. Filter your array of `Post` objects to only include posts made today.

let now = new Date()
//console.log(now) //Logs Current Date and Time
now //Logs Current Date and Time

class Post {
    constructor (datePosted, user, text){
        this.datePosted = new Date(datePosted)
        this.user = user
        this.text = text
    }
    todayPost() {
    let day = new Date().getDate()
    let month = new Date().getMonth() + 1
    let year = new Date().getFullYear()
    let currentDate = new Date(`${year}-${month}-${day}`)
    //console.log(currentDate)
    if (currentDate.getTime() === this.datePosted.getTime()) { //Checking for equality of identity not value.
    return true
    } else {
        return false
    }
    }
    todayDateFilter (arr) {
        todayDate = arr.filter(post, {
            console.log(arr)
            return post.todayPost() === true
            })
        return todayDate
    }
}

let A = new Post ("2019-10-06", "Rafid", "SuperCool")
let B = new Post ("2019-10-22", "Nilber", "SuperRad")
let C = new Post ("2019-10-21", "Celine", "SuperArray")
let multiPost = [A,B,C]

console.log(todayDateFilter(multiPost))

console.log(B.datePosted)
console.log(B.todayPost())


//Question 9

// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`
// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`
// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

class Car {
    constructor (make,model){
        this.make = make
        this.model = model
    }
    static numberOfWheels () {
        return 4 //Universal class property, property would not change for each instance
    }
}

let myMar = new Car ("dodge", "camaro")

class Bike {
    constructor (gears,hasBell) {
        this.gears = gears
        this.hasBell = hasBell
    }
    static numberOfWheels() {
        return 2
    }
}

let myBike = new Bike (10, "yes")

//Problem 10

// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console
// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.
// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"

class Vehicle {
    constructor (color, name) {
        this.color = color
        this.color = name
    }
    makeSound() {
        return "WHHOOSSSH"
    }
}

let rafidBike = new Vehicle ("green", "Bikey McBikeface")
let rafidCar = new Vehicle ("red", "Carry McCarface")