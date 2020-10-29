//Scope exercise
//===================================================================================
//Section 1
//===================================================================================
// const run = true // run is global scope

// if (run) {
//     let distance = 8 //local to if blocks
//     for (var i = 0; i < distance; i++) {
//         console.log("running") //it will be console 8 times
//     }
//     console.log("Finished running " + distance + " miles") //consoled as finished running 8 miles
// }

// console.log("Damn, you see this gal? She ran " + distance + " miles")
// will throw an error distance is undefined
//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo" // local to if block without the else block
// }
// else {
//     console.log("Cow says " + cowSound) //error because cowSound is undefined
// }

//===================================================================================
//Section 3
//===================================================================================
// const serveOrders = function (orders) { //orders scope is the function

//     for (let order of orders) { //order scope is the for block
//         let specialOrder = "special " + order //special order scope is the for block
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"] // global scope
// serveOrders(allOrders)
// it is going to console the for loop of each one of the array as "served a special ${order}".
//then it will console "Finished serving all the orders: ["fish", "lettuce plate", "curious cheese"]"

//===================================================================================
//Section 4
//===================================================================================
// const pot = "red pot with earth in it" //global scope

// const getSeed = function () {
//     const seed = "brown seed" //local to getSeed function only
// }

// const plant = function () {
//     getSeed() wil return default undefined
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant() //error because seed is undefined in the plant function

//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true // found scope is the if block only
//         }
//     }
//     return found //found is not defined
// }

// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")
// }
// else {
//     console.log("No idea where this person is.")
// }

//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
// const isEnough = false //global scope

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true // it is a const, i can't change its value. so error wil appear
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")// if it wasn't for the makeEnough function, this will be console
// }

//=============================this exercises=============================
//this exercise 1
const person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      alert("Im no longer hungry!");
    }
  },
};

person.feed(); //should alert "I'm no longer hungry"

//this exercise 2
const pump = function (amount) {
  this.liters += amount;
  console.log("You put " + amount + " liters in " + this.name);
};

const garage = {
  car1: {
    name: "Audi",
    liters: 3,
    fillTank: pump,
  },
  car2: {
    name: "Mercedes",
    liters: 1,
    fillTank: pump,
  },
};

garage.car1.fillTank(2);
console.log("Audi should have 5 liters: ", garage.car1.liters);

garage.car2.fillTank(30);
console.log("Mercedes should have 31 liters: ", garage.car2.liters);

//this exercise 3
const pumpFuel = function (plane) {
  plane.fuel += 1;
};

const airplane = {
  fuel: 0,
  fly: function () {
    if (this.fuel < 2) {
      return "on the ground!";
    } else {
      return "flying!";
    }
  },
};

console.log("The plane should not be able to fly (yet): " + airplane.fly());

pumpFuel(airplane);
console.log("The plane should STILL not be able to fly: " + airplane.fly());

pumpFuel(airplane);
console.log("Take off! " + airplane.fly());

//this exercise 4
const tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (n) {
    this.coinCount -= n;
  },
};

tipJar.tip();
console.log("Tip jar should have 21 coins: " + tipJar.coinCount);

tipJar.stealCoins(3);
console.log("Tip jar should have 18 coins: " + tipJar.coinCount);

tipJar.stealCoins(10);
console.log("Tip jar should have 8 coins: " + tipJar.coinCount);

//this exercise 5
const revealSecret = function () {
  return this.secret;
};

const shoutIt = function (person, func) {
  person.revealItAll = func;
  const result = person.revealItAll();
  alert(person.name + " said: " + result);
};

const avi = {
  name: "Avi",
  secret: "Im scared of snakes!",
};

const narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that.",
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//this exercise 6, 6.1, extension 1
const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beanRequirement: 10, price: 5 },
    americano: { beanRequirement: 5, price: 3 },
    doubleShot: { beanRequirement: 15, price: 7 },
    frenchPress: { beanRequirement: 12, price: 6 },
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    if (this.drinkRequirements[drinkType]) {
        if(this.drinkRequirements[drinkType].beanRequirement <= this.beans){
            this.beans -= this.drinkRequirements[drinkType].beanRequirement;
            return true
        }else{
            alert("Sorry, we're all out of beans");
            return false
        } 
    }else {
      alert("Sorry, we don't make " + drinkType);
      return false
    }
  },
  money: 50,
  buyBeans: function (numBeans) {
    this.money -= numBeans / 10;
  },
  buyDrink: function (drinkType) {
    if (this.makeDrink(drinkType)) {
      this.money += this.drinkRequirements[drinkType].price;
    }
  }
};

coffeeShop.buyDrink("latte");
coffeeShop.buyDrink("americano");
coffeeShop.buyDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.buyDrink("doubleShot");
coffeeShop.buyDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"
console.log(coffeeShop.money);



