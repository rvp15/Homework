//Section 1:
//A. Q+A

//1. using assignment operator a=10;
//2. using assignment operator a=20; now value of a is changed to 20
//3. Just assign a existing variable with a new variable. Example:let a=10, assign b=a now value of b=10
//4. declare:specify the variable name and its data type, assign : assign a value to the declared variable using "=",define: process of declearing and assigning a variable
//5. Pseudocoding: It is an informal language(text-based language) that helps programmer to develope an algorithms.It helps in easy understanding and implementing the program logic step by step.
//6. take 50% of time to think, find logic to solve the problem and remaining 50% use for coding by implementing the logic.

//B.Strings:
let firstVariable= "Hello World"
 firstVariable=22
  
let secondVariable=firstVariable
 secondVariable="Hi World!"

 console.log(firstVariable)
//6 : value of firstVariable is a number
//7.
let yourName ='vedha'
console.log(`Hello, my name is ${yourName}`)

//C.Booleans:
const a=4
const b=53
const c=57
const d=16
const e='Kevin'
console.log(a<b)
console.log(c>d)
console.log(e === e)
console.log(true || false)
console.log(false || false  || false || false  || false || true)
console.log(false === false)
console.log(e ==='Kevin')
console.log(a+b===c)
console.log(a*a===d)
console.log(48=='48')

//D.The farm:

let animal ='c'

if(animal==='cow'){
    console.log('MoooOOOOooo')
}else {
    console.log('Hey! Youre not a cow')
}
//E.Driver's Ed

 let personAge=12

 if(personAge>16){
    console.log('Here are the keys')
 }else{
    console.log('Sorry,you are too young')
 }

 //Section 2:Loops

 //A. The basics:
 //1.
for (let i=0;i<=10;i++){
    console.log(i)
 }
 //2.
//  for (let i=10;i<=400;i++){
//     console.log(i)
//  }
//3.
// for (let i=12;i<=4000;i=i+3){
//     console.log(i)
//  }

//B.Get even
//1.print even number between 1-100
for(let i=2;i<=100;i++){
    if(i%2===0){
        console.log(`${i} <-- is an even number`)
    }else{
        console.log(i)
    }
}

//C.Give me Five:

for(let i=5;i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log(`I found a ${i}.High five! and Three is a crowd!`)
    }else if(i%5===0){
        console.log(`I found a ${i}.High five!`)
    }else if(i%3===0){
        console.log(`I found a ${i}.Three is a crowd!`)
    }
}

//D.Savings account:
//1.
let bank_account=0
for(let i=0;i<=10;i++){
     bank_account += i
}console.log(bank_account)

//2.

let bank_account1=0
for(let i=0;i<=100;i++){
     bank_account1 =bank_account1+(i*2)
}console.log(bank_account1)

//Section III: Arrays and cotrol flow:
//A.
//1.Each thing in an arry is called element
//2.no
//3.single array example:list of students name ,dimensional array: Egg box

//B.Easy Does it:
//1.creat an array with quotes
let quotes= ['The way to get start is to quite talking and start doing','Dont be afraid to start all over again.You may like your new story better','You are never too old to set another goal']

// C.Accessing Elements:
const randomThings= [1,10,"Hello", true]
 randomThings[2]="World"
 console.log(randomThings)

 //D.Change values:
  const ourClass = ['Salty','Zoom','Sardine','Slack','Github']

  let thirdElement=ourClass[2]
  ourClass[4]='Octocat'
  ourClass.push('Cloudy City')
  console.log(ourClass)

//E.Mix It Up
const myArray=[5,10,500,20]
myArray.push('Aegon','newword')
myArray.shift()
myArray.unshift('Bob Merley')
myArray.pop()
console.log(myArray)
myArray.reverse()
//5. reverse()mutate the array by reversing the array element and returns the reversed array
console.log(myArray)

//F.Biggies Smalls:
let x=100
if(x<100) console.log('little number')
else console.log('bigger number')

//G.Monkey in the Middle
let y=6
if(y<5) console.log('little number')
else if(y>10) console.log('Bigger number')
else console.log('Monkey')

//H.What is in your closet:

const kristynsCloset =['lefy shoe','cowboy boots','right socks','GA hoodie','green pants','yellow knit hats','marshmallow peeps'];
const thomsCloset=[['grey button-up','dark gery button-up','ligh blut button-up','blue button-up'],['grey jeans','jeans','PJs'],['wool mittens','wool scarf','raybans']];
//1.
console.log(`Kristyns is rocking that ${kristynsCloset[2]} today!`)
//2.
//array.splice(start, deleteCount, 'insert element');
kristynsCloset.splice(6,0,'raybans')
//3.
kristynsCloset[5]='stained knit hat'
//4.
let thomFirstArray = thomsCloset [0]
//5.
let thomPantEle = thomsCloset[1][0]
//6.
let thomAccessoryEle = thomsCloset[2][0]
//7.
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]},${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)
//8. 
thomsCloset[1][2]='Footie Pajamas'
console.log(thomsCloset)

// IV. Functions
//A. PrintGreeting
 const printGreeting=(name)=>(`Hello there, ${name}!`)
 console.log(printGreeting('vedha'))

 //B.printCool
const printCool=(name1)=>(`${name1} is cool`)
console.log(printCool('vedha'))

//C.calculateCube:
  const calculateCube = (a) => (a*a*a)
  console.log(calculateCube(5))

  //D.isVowel:

  function isVowel(string){
    if(string.toLowerCase()===('a'||'e'||'i'||'o'||'u')){
        console.log(`${string} is a vowel`)
    }else {
        console.log(`${string} is a not vowel`)
    }
  }
  isVowel('k')
 //another way
function isVowel1(check){
    const arr1 =['a','e','i','o','u']
    if (arr1.includes(check.toLowerCase())){
      return true 
    }else return false
    }
    console.log(isVowel1('f'))
    
//E.getTwoLengths
getTwoLengths=(a,b)=>d=[a.length,b.length]
console.log(getTwoLengths('Hank','hippopalous'))

//F.getMultipleLengths
function getMultipleLength(strings){
    return newArr=strings.map(element=>element.length)}

console.log(getMultipleLength(['hello','what','is','up','dude']))

//G.maxOfThree
//method 1:
const maxOfThree=(x,y,z)=>(Math.max(x,y,z))
console.log(maxOfThree(49,4,4))
//method 2:
function maxOfThree(x,y,z){
    let max=0
    if(x>y) max=x 
    else max=y
    if(z>max) max=z
    return max
}
console.log(maxOfThree(2,6,16))

//H.printLongestWord

function printLongestWord(wordArray){
    let longestWord=''
   for(let i=0;i<wordArray.length;i++){
    if(wordArray[i].length>longestWord.length){
        longestWord=wordArray[i]
    }
   }return longestWord
}
console.log(printLongestWord(['BoJack','Princess','Diane','a','Max','Peanutbutter','big']))

//Objects:
const user={
    name:'Jack',email:'jacksparrow@gmail.com',age:44,purchased:[]
}
//B.Update user
user.email='jacksparrow78@gmail.com'
user.age++
//C.Adding keys and vale:
user.location='Califorina'
//D.Shopaholic
user.purchased.push('carbohydrates','peace of mind','Merino jodhpurs')
console.log(user)
console.log(user.purchased[2])
//E.Object within object:

//1.
user.friend={
    name:'Grace Hopper',age:77,location:'SFO',purchased:[]
}
//2.
console.log(user.friend.name)
//3.
console.log(user.friend.location)
//4.
user.friend.age=55
//5,6:
user.friend.purchased.push('The One Ring','A latte')
//7:
console.log(user.friend.purchased[1])

//F.Loops
//1.
for(let elements in user.purchased){
    console.log(user.purchased[elements])
}
//2.
for (let element in user.friend.purchased){
    console.log(user.friend.purchased[element])
}


//G.Function can operate on object:

//1.
//Objects:
const user={
    name:'Jack',email:'jacksparrow@gmail.com',age:44,purchased:[],
updateUser()
{
 user.age++
 user.name.toUpperCase()
 },
oldAndLoud(person){
    console.log(person.age++)
   console.log( person.name.toUpperCase())
}
}
user.oldAndLoud(user)
console.log((user))

//Cat Combinator:
//1.Mama cat
const cat1={
    name:'BumbleBee',breed:'Calico',age:2
}
console.log(cat1.age)
console.log(cat1.breed)
//2.Papa cat:
const cat2={
    name:'Lucifer',breed:'Persian',age:3
}
//3.Combine cats:
 function combineCats(mama,papa){
    let combCat={
        name:mama.name + papa.name,
        age:1,
        breed:mama.breed +'-'+papa.breed
    }
    return combCat
 }
console.log(combineCats(cat1,cat2))

//4.Cat brain bender:
console.log(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)))