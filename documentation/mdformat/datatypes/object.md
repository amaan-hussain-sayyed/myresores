# Object Data Type in JavaScript: A Complete Guide

## Introduction

In JavaScript, the `object` data type is a versatile and fundamental construct. It allows you to store and organize data using key-value pairs. This document provides a comprehensive guide to the `object` data type, offering examples and explanations in an easy-to-understand format.

## What is an Object?

An object in JavaScript is a complex data type that allows you to group related data and functions together. Objects consist of key-value pairs, where each key is a unique identifier (also known as a property), and each value can be any data type, including other objects. Objects are a crucial part of JavaScript, providing a powerful way to structure and organize data.

---

## Examples of Objects
 **Example 1: Basic Object**

```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false
};
let firstName:person.firstName
console.log(person);
console.log(firstName)
```
The output of person  will be: `{firstName: 'John', lastName: 'Doe', age: 30, isStudent: false}`
The output of firstName will be :`'John'`

- In this example, we have an object `person` with properties such as firstName, lastName, age, and isStudent. Each property has a corresponding value, and together they form a cohesive unit of information.
- you can use 
  - `person.age` to access the value of age property
  - `person['lastName']` to access the value of lastName property
  - `person.isStudent` to access the value of isStudent property.

 


**Example 2: Nested Objects**

```javascript
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
  owner: {
    firstName: "Alice",
    lastName: "Smith",
    age: 28
  }
};
console.log(car);
console.log(car.owner)
```
- The output of car will be `{make: 'Toyota', model: 'Camry', year: 2022, owner: {…}}`
  And the output of *car.owner* will be: `{firstName: 'Alice', lastName: 'Smith', age: 28}`

This example demonstrates nesting, where the `car` object contains another object `owner`. This is a powerful feature of objects in JavaScript, allowing you to represent complex relationships and structures.



**Example 3: Object with Methods**

```javascript
let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  }
};

let add = calculator.add(5,6)
let subtract = calculator.subtract(10,4)
console.log(`Addition result: ${add}`) 
console.log(`Subtraction result: ${subtract}`)

```
The output for this code would be:
Addition result: 11
Subtraction result: 6


Objects can also contain functions, known as methods. In this example, the `calculator` object has methods for addition and subtraction.

---

**In Simple Terms:**
- **Object:** Think of it like a container that holds related information and actions.
- **Example 1:** Information about a person, such as their name, age, and student status.
- **Example 2:** Information about a car, including its make, model, year, and owner.
- **Example 3:** A calculator that can perform addition and subtraction.

---


## Methods for Objects in JavaScript



#### Object.keys()

Returns an array of a given object's own enumerable property names.

**Example: Getting Object Keys**
```javascript
let car = { make: "Ford", model: "Mustang", year: 2023 };
let keys = Object.keys(car);
console.log(keys);
```
The output would be: `['make', 'model', 'year']`
This Return the All key of object

---

#### Object.values()

Returns an array of a given object's own enumerable property values.

**Example: Getting Object Values**
```javascript
let car = { make: "Ford", model: "Mustang", year: 2023 };
let values = Object.values(car);
console.log(values);
```

The output would be: `['Ford', 'Mustang', 2023]`
This return all value of object

---


#### Object.entries()
Returns an array of a given object's own enumerable string-keyed property [key/value] pairs.    
**Example: Getting Object Entries**
```javascript
let car = { make: "Ford", model: "Mustang", year: 2023 };
let entries = Object.entries(car);
console.log(entries);
```
The output will be : `[["make","Ford"], ["model","Mustang"], ["year",2023]]`
This returns all key and value pair of object into arry

---
### Object.assign()
The Object.assign() method is used to copy the values from one or more source objects to a target object. 
It returns the target object.
 Themethod does not alter any of the source objects, but it creates a new object that contains the properties of all the source objects. If multiple sources contain
 **Example: Merge two objects using Object.assign()**
```javascript
const obj1 = {name:"John"};
const obj2 = {age:30, city:"New York"};
let obje3 =Object.assign(obj1,bj2)
console.log(obje3);
```
The output will be: `{ name: 'John', age: 30, city: 'New York' }`
This merge two object into one

---
#### hasOwnProperty()
The hasOwnProperty() method determines whether a specified property exists in a given object. It returns true if the property exists on the object itself otherwise false.
 It does not check for inherited properties.

**Example: Checking if a property exists in an object**
```javascript
let person = { firstName: "Tom", lastName: "Hanks" };
if (person.hasOwnProperty("firstName")){
  console.log('Yes');
  } else {
    console.log('No');
    }
```
The output will be ;`Yes`
If you run this code it will print `'Yes'` because we are checking only the direct properties of the object.


---
  
#### Object destructuring
In JavaScript, you can use object destructuring assignment syntax to extract data from arrays or objects into distinct variables. This makes it easier to handle complex data
In JavaScript, you can use the following syntax to extract data from arrays and objects:

**Use Object Destructuring**
```javascript
// Declare an object with properties  
let person = { firstName: "John", lastName: "Doe", age: 45 };
// Use destructuring assignment to get specific properties in variables
let {firstName, lastName} = person; 
console.log(firstName)
console.log(lastName)


```
The output of firstName will be: `"John"` ,
The output of lastName will be: `"Doe"`
This way we can assign multiple variable at once by using this method

---


## Why Objects Matter?

- Objects provide a way to structure and organize data in a meaningful way.
- They allow you to represent real-world entities and their relationships.
- Objects can contain methods, enabling you to encapsulate functionality with related data.
- Understanding objects is fundamental for advanced JavaScript programming.

---

Objects in JavaScript are a powerful tool for organizing and representing data. Whether it's a simple collection of properties or a complex structure with nested objects and methods, understanding how to work with objects is essential for building robust and maintainable JavaScript applications.