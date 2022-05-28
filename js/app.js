//ARRAYS
//const array = ['javascript','python','c']
//last mein add krna hai
// array.push('ruby')
//shuru mein add krna hai
//array.unshift('java')
//last mein delete krna hai
//array.pop()
//shuru mein delete krna hai
//array.shift()
//console.log(array[1]);


//LOOPS

// console.log('*');
// console.log('*');
// console.log('*');
// console.log('*');

//for loop

// for (let i = 0; i < 4; i++) {
//     console.log('*');
    
// }



//Object

// const laptop = {
//     name:'Praveen',
//     age:21
// }
// console.log(laptop);

//Variables

//1. let->
// 2. var-> var has become old , so we dont use it now
//3. const-we cant chane the value once dcelare in const

// let language
// language='javasript'
// language='kd'
// console.log(language);

// const language='fg'
// console.log(language);

// var language
// language=113
// language='ff'
// console.log(language);

//SCOPE

//Function  Scope

// var language='js'
// console.log(language);

//Block Scope

// if (true) {
//     var language=15
    
// }
// console.log(language);

//Hoisting
// console.log(language);
// var language='hindi'

//Loops
 const actors = [
     {
         name:'Actor1',
         price:100
     },
     {
        name:'Actor2',
        price:200
    },
    {
        name:'Actor3',
        price:300
    },
 ]

// console.log(actors[1].price); 

// for (let i=0; i<actors.length;i++){
//     actors[i].price= actors[i].price-10
    
// }


// console.log(actors);

// actors.forEach((actor)=>{
//     actor.price -=10
// })
// console.log(actors);

// for (var actor of actors) {
//     actor.price -= 10
//     //console.log(actor);
// }
// console.log(actors);

const students = [
    {
        name:'Praveen',
        marks:95
    },
    {
        name:'Aniket',
        marks:45
    },
    {
        name:'Sachin',
        marks:25
    },
    {
        name:'Surya',
        marks:35
    },
    {
        name:'Mayank',
        marks:15
    }
]
const failed = students.filter((student) =>  {
    if (student.marks < 50) {
        return true;
    }
    else {
        return false;
    }
});
console.log(failed);