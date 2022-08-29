// Part II:Javascript Response
// 1.for loop to log from 1-20
for(let i=1;i<=20;i++){
    console.log(i)
}
 //////////////////////////////////////////////////////////////////////////////////////////////
//Get Even:
for (let i=0;i<=200;i=i+2){
    console.log(i)
    }
     //////////////////////////////////////////////////////////////////////////////////////////////
//Fizz Buzz
for(let i=0;i<=100;i++)
{ 
    if((i%3==0) && (i%5==0))console.log("FIZZBUZZ")
    
    else if(i%5==0)console.log("BUZZ")
    
    else if(i%3==0)console.log("FIZZ")
   
    else console.log(i)
    }
     //////////////////////////////////////////////////////////////////////////////////////////////
    //Wild Wild Life:
    const wolfy=['Wolfy','wolf',16,'Yokon Territory']
    const sharky = ['Sharky','shark',20,'Left Coast']
    const plantee =['Plantee','plant',5000,'Mordor']
    const porgee =['Porgee','Porg',186,"Ahch-To"]
    const dart =["D'Art","Deogogram Dog",2,'Upside Down']
    //1.
    plantee[2]++
    //2.
    wolfy[3]='Gotham City'
    //3.
    dart[3]=[dart[3],'Hawkins']
    //4.
    wolfy[0]='Gameboy'
    console.log(plantee)
    console.log(wolfy)
    console.log(dart)
    console.log(wolfy)
 //////////////////////////////////////////////////////////////////////////////////////////////
//Yell at the Ninja Turtles:
//1.Creat array:
let ninjaTurtles = ['Donatello','Leonardo','Michaelangelo']
for (let i of ninjaTurtles){
    console.log(i.toUpperCase())
}
 //////////////////////////////////////////////////////////////////////////////////////////////
//Methods,Revisited:

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious']
//Consolelof index of Titanic:
console.log(favMovies.indexOf('Titanic'))
//1. sort method:Arrange array in alphabetical order
console.log(favMovies.sort())
//sort method permanently alters the original array

// // 2.Pop:remove last element
console.log(favMovies.pop())
//Gives last one element as output

// // 3.push:add new element at end of array

favMovies.push('Guardians of the Galaxy')
console.log(favMovies.length)

// //4.Reverse: 
console.log(favMovies.reverse())
//Just reverse the whole array


// //5.shift:remove first element of the array
console.log(favMovies.shift())


//6.unshift:Add new element at beginning
favMovies.unshift('Mary Poppins')

console.log(favMovies)

// //7.splice:add elements (where, how many to remove, element list)

// console.log(favMovies.indexOf('Django Unchained'))
console.log(favMovies.splice(favMovies.indexOf('Django Unchained'),1,"Avatar",))
console.log(favMovies.length)
//Splice permanently alters the array

 //8.Slice:half of array
// //Find Mid index of array:

console.log(favMovies)
let afterSlice=favMovies.slice(Math.floor((favMovies.length)/2))
//does not alters the original array permanently

//9.
console.log(afterSlice)

//10.Final result
console.log(favMovies)

//11.Find index of element actually not in array
console.log(afterSlice.indexOf('Fast and Furious'))

//12.const does not imply that the object properties should not be altered. It does imply that you should not try to change the reference. If you plan to reassign references to the object, then you use let 
 //////////////////////////////////////////////////////////////////////////////////////////////

//where is waldo
const whereIsWaldo =[['Timmy','Frank'],'Eggbert',['Lucinda','Jacc','Neff','Snoop'],['Petunia',['Baked Goods','Waldo']]]
 //Remove Eggbert
 whereIsWaldo.splice(1,1)
//   console.log(whereIsWaldo)

//Change Neff to No one
whereIsWaldo[1][2]='No One'
console.log(whereIsWaldo)
//Consolelog waldo
console.log(whereIsWaldo[2][1][1])
 //////////////////////////////////////////////////////////////////////////////////////////////

//Excited Kitten
// consolelog 20 times
for (let i=0;i<20;i++){
    console.log(`Love me,pet me!HSSSSSS!`)
}
//random message
let array=['..human...why you taking pictures of me?...','...the catnip made me do it...','...why does the red dot always get away...']
for (let i=0;i<20;i++){
    if(i%2===0)console.log(`${array[Math.floor(Math.random() * array.length)]}`)
        else console.log(`Love me,pet me!HSSSSSS!`)
}
 //////////////////////////////////////////////////////////////////////////////////////////////
//Find the median

const nums=[14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12]

const sorted = nums.sort((a, b) => a - b);

console.log(sorted)
let median
let middle=Math.floor(sorted.length/2)
for(let i=0;i<sorted.length;i++){
if(sorted.length%2===0){
   median=(sorted[middle]+sorted[middle+1])/2
}else{
    median =sorted[middle]
}}
console.log(median)
 //////////////////////////////////////////////////////////////////////////////////////////////

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right socks",
    "GA hoodie",
    "green pants",
    "yellow knit hats",
    "marshmallow peeps",
  ];
  const thomsCloset = [
    [
      "grey button-up",
      "dark gery button-up",
      "light blut button-up",
      "blue button-up",
    ],
    ["grey jeans", "jeans", "PJs"],
    ["wool mittens", "wool scarf", "raybans"],
  ];
  
  //1.Alien Attire:
  kristynsShoe = kristynsCloset[0];
  
  //Adding left shoe to thom's closet
  thomsCloset[2].push(kristynsShoe);
  console.log(thomsCloset);
  //////////////////////////////////////////////////////////////////////////////////////////////
  //Dress Us Up:
  
 
  for (let i = 0; i < 3; i++) {
    console.log(
      `Krystin is wearing a ${
        kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
      }, ${
        kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]
      } and ${kristynsCloset[Math.floor(Math.random() * kristynsCloset.length)]}`
    );
  }
    
    for(let i=0;i<thomsCloset.length;i++){
      let index1= Math.floor(Math.random() * thomsCloset.length);
    console.log(`Thom is wearing a ${thomsCloset[index1][Math.floor(Math.random() * thomsCloset[index1].length)]} , 
        ${thomsCloset[index1][Math.floor(Math.random() * thomsCloset[index1].length)]
      } and ${thomsCloset[index1][Math.floor(Math.random() * thomsCloset[index1].length)]}`
    );
  }
 // Dirty Laundary
  
  for (const cloth of kristynsCloset) {
    console.log(`WHIRR: Now washing ${cloth}`);
  }
 //Inventory:
  
  for (let i = 0; i < thomsCloset.length; i++) {
    for (let j = 0; j < thomsCloset[i].length; j++) {
      console.log(thomsCloset[i][j]);
    }
  }
  