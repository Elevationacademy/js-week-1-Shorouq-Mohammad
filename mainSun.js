// array exercise
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"];
let newGenes = [];
newGenes.push(...genes);
const temp = newGenes[2];
newGenes[2] = newGenes[newGenes.length - 1];
newGenes[newGenes.length - 1] = temp;
let azin = newGenes.splice(3, 1);
azin = azin[0];
newGenes.push(azin, azin);
newGenes.unshift("FXT");
console.log(newGenes);

//objects exercise1
let p1 = {
  name: "ahmad",
  age: 30,
  city: "haifa",
};
let p2 = {
  name: "sam",
  age: 30,
  city: "jerusalem",
};

if (p1.age == p2.age) {
  if (p1.city == p2.city) {
    console.log(p1.name + " wanted to date " + p2.name);
  } else {
    console.log(p1.name + " wanted to date " + p2.name + ", but couldn't");
  }
}

//objects exercise 2
let myList = [
  { name: "m&ms", price: 5, isTasty: true },
  { name: "twix", price: 4, isTasty: false },
];
myList[0].name = "kinderbueno";
myList.pop();
console.log(myList);

//objects exercise 3
let myList2 = [
  { name: "snickers", price: 3, isTasty: false },
  { name: "galaxy dark", price: 5, isTasty: true },
];
myList.push(...myList2);
console.log(myList);

//objects exercise 4
let library = {
  books: [
    { title: "Les Misérables", author: "Victor Hugo" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky" },
  ],
};
myList.push(library);
console.log(myList);

// objects exercise 5
const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true },
}

const name = prompt("Please enter the name for your reservation")
let check = Object.keys(reservations).find( k => k.toLowerCase() === name.toLowerCase())
if(reservations[check]){
    if(reservations[check].claimed){
        alert("Hmm, someone already claimed this reservation")
        // console.log("it is already claimed")
    }else{
        alert("welcome, "+name)
        // console.log("welcome "+name)
    }
}else{
    //alert("You have no reservation")
    // console.log("there is nothing under your name")
    alert("It so happens that our restaurant has a bunch of open tables. welcome")
    reservations[name] = {claimed: true}
    console.log(reservations)
}

// objects extensions
const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, // choose one
    fridge: {
        price: 500,
        works: false, // choose one
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
const nam = kitchen.owner
const rad = kitchen.fridge.items[1].name
const dat = date - kitchen.fridge.items[1].expiryDate
const fixPrice = kitchen.fridge.price / 2
const hasOven = kitchen.hasOven
const works = kitchen.fridge.works
const priceString = " And she'll have to pay "+fixPrice+ " to fix the fridge."

if(hasOven){
    const OvenString = "Luckily, she has an oven to cook the "+rad+" in."
    if(works){
        const worksString = " Weird, considering her fridge works."
        console.log(nam+"'s " + rad +" expired "+ dat+" day ago."+worksString+" "+OvenString)
    }else{
        
        const worksString = " Probably because her fridge doesn't work."
        console.log(nam+"'s "+rad+ " expired "+dat+ " day ago."+worksString+" "+OvenString+ priceString);
    }
}else{
    const OvenString = "Too bad she doesn't have an oven to cook the "+rad+ " in."
    if(works){
        const worksString = " Weird, considering her fridge works."
        console.log(nam+"'s " + rad +" expired "+ dat+" day ago."+worksString+" "+OvenString)
    }else{
        const worksString = " Probably because her fridge doesn't work."
        console.log(nam+"'s "+rad+ " expired "+dat+ " day ago."+worksString+" "+OvenString+ priceString);
    }
}

