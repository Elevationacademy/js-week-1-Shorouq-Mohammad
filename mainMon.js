// loops exercise 1
let names= ["ahmad", "musa", "sam", "nour"]
let ages = [24, 27, 30, 2]
for (let i=0; i<names.length; i++){
    console.log(`${names[i]} is ${ages[i]} years old`);
}

// loops exercise 2
let numbers=[]
for (let i=0; i<10; i++){
    let n= Math.floor(Math.random() *10)
    numbers.push(n)
}
// console.log(numbers)

let sum =0
for(let num of numbers){
    sum += num
}
console.log(sum);

//loops exercise 3
const avg = sum/numbers.length
console.log(avg)

//loops exercise 4
let nums = []
for (let i=1; i<=100; i++){
    nums.push(i)
}
console.log(nums);

//loops exercise 5
// for (let i=0; i< nums.length; i+=2){
//     console.log(nums[i])
// }
// for (let i=0; i<nums.length; i++){
//     if(nums[i]%2){
//         console.log(nums[i])
//     }
// }

//loops exercise 6
let numbs = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]
for(let i in numbs ){
    if(numbs[i] == 709){
        console.log(i)
    }
}

//loops exercise 7
const name = ["Ashley", "Donovan", "Lucas"]
const age = [23, 47, 18]
const people = []
for(let i in name){
    people.push({name: name[i], age: age[i]})
}
console.log(people);

//loops exercise 8
for(let person of people){
    console.log(`${person.name} is ${person.age} years old`);
}

//loops exercise 9
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
for(let i in posts){
    if(posts[i].id == 2 ){
        posts.splice(i,1)
    }
}
console.log(posts);

//loops exercise 10
const postes = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]
  for (let post of postes){
      if(post.id ==2){
          for(let j in post.comments){
              if(post.comments[j].id == 3){
                  post.comments.splice(j,1)
              }
          }
      }
  }
  console.log(postes)

  //loops extension
  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  let strArr = Object.keys(dictionary)
  for (let key of strArr){
      console.log(`Words that begin with ${key}`);
      for(let word of dictionary[key]){
          console.log(word);
      }
      
  }

  
  