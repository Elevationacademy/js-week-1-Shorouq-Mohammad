//exercise 1
const calcAge = function (num1, num2) {
  return num1 - num2;
};
const age = calcAge(2017, 1989);
console.log(age);

//exercise 2
const youEither = function (num1, num2) {
  let diff = num1 - num2;
  console.log("You are either " + diff + " or " + (diff - 1));
};
youEither(2017, 1989);

//exercise 3
const isEven = function (num) {
  return !(num % 2);
};
console.log(isEven(10));

//exercise 4
const printOdds = function (numbers) {
  for (let num of numbers) {
    if (!isEven(num)) {
      console.log(num);
    }
  }
};
const nums = [1, 2, 3, 4, 5, 6, 7];
printOdds(nums);

//exercise 5
const checkExists = function (numbers, num) {
  for (let n of numbers) {
    if (num == n) {
      return true;
    }
  }
  return false;
};

console.log(checkExists(nums, 2));
console.log(checkExists(nums, 100));

//exercise 6
let calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};
const result1 = calculator.add(20, 1);
const result2 = calculator.subtract(30, 9);

console.log(calculator.add(result1, result2)); //should print 42

//exercise 7
const increaseByNameLength = function (money, name) {
  return name.length * money;
};
const makeRegal = function (name) {
  return `His Royal Highness, ${name}`;
};
const turnToKing = function (name, money) {
  name = name.toUpperCase();
  money = increaseByNameLength(money, name);
  name = makeRegal(name);

  console.log(name + " has " + money + " gold coins");
};

turnToKing("martin luther", 100); // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

//extension splice challenge
// const splice = function(arr ,index, number, ...values){

// }
Array.prototype.splice = function (index, numberRemoved, ...items) {
  let deletedArr = [];
  if (!numberRemoved && numberRemoved != 0) {
    for (let i = this.length - 1; i >= index; i--) {
      deletedArr.push(this.pop());
    }
  } else {
    let arrRemain = [];
    let start = index + numberRemoved;
    // const length = this.length
    // for (let i = index + numberRemoved; i < this.length; i++) {
    //   arrRemain.push(this[i]);
    // }
    for (let i = this.length - 1; i >= index; i--) {
      const del = this.pop();
      if (i >= start) {
        arrRemain.push(del);
      } else {
        deletedArr.push(del);
      }
    }
    arrRemain.reverse();
    if (items) {
      for (let item of items) {
        this.push(item);
      }
    }
    this.push(...arrRemain);
  }
  deletedArr.reverse();
  return deletedArr;
};

console.log(nums.splice(3, 2));
let arr = [1, 2, 3];
arr.splice(0, 1);
console.log(arr); //should be [2,3]

// add 1 element
arr = [1, 2, 3];
arr.splice(0, 0, 0);
console.log(arr); //should be [0,1,2,3]

// replace 1 element
arr = [1, 2, 3];
arr.splice(1, 1, 55);
console.log(arr); //should be [1,55,3]

// delete all elements from index to end
arr = [1, 2, 3, 4, 5];
arr.splice(1);
console.log(arr); //should be [1]

// returns array of deleted elements
arr = [1, 2, 3];
let deleted = arr.splice(1);
console.log(deleted); //should be [2,3]

// returns an array of the deleted element (1 element)
arr = [1, 2, 3];
deleted = arr.splice(1, 1);
console.log(deleted); //should be [2]

// returns an empty array when no elements are deleted
arr = [1, 2, 3];
deleted = arr.splice(1, 0, 5);
console.log(deleted); //should be []

//functions mini-lesson
people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); //add the first letter of the str, capitalized
  capitalizedStr += str.slice(1); //add the rest of str normally return capitalized Str
  return capitalizedStr;
};

const getAge = function (age) {
  if (age < 21) {
    return "an underage";
  } else if (age > 55) {
    return "a +55";
  } else {
    return `${age} years old`;
  }
};
const getLocation = function (city, country) {
  city = capitalize(city);
  country = capitalize(country);
  return `${city}, ${country}.`;
};

const catchphraseQuotes = function (catchphrase) {
  return `"${capitalize(catchphrase)}".`;
};
const getProfession = function (profession) {
  let str = "";
  const words = profession.split(" ");
  for (let word of words) {
    str = str +capitalize(word)+ " ";
  }
  return str;
};

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ${getAge(person.age)} `; //Yes - you can put a function call inside the tick quotes!
  summary += " " + getProfession(person.profession);
  summary += `from ${getLocation(person.city, person.country)}`; //call function for country + city
  summary += `${capitalize(person.name)} loves to say ${catchphraseQuotes(person.catchphrase)}`; //call function for catchphrase return summary
  return summary;
};
console.log(getSummary(people_info[1]));
for(let person of people_info){
    console.log(getSummary(person));
}


//last question functions mini-lesson
const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const check = function(word){
    if(wordCounts[word]){
        wordCounts[word] +=1
    }else{
        wordCounts[word] = 1
    }
}

const divide = function(story){
    for(let char of specialChars){
        // var regex = new RegExp(char, "g");
        // str= story.replaceAll(regex, "")
        story= story.split(char).join('')
    }
    let arr = story.split(" ")
    wordCounts[" "]= arr.length
    for(let word of arr){
        check(word.toLowerCase())
    }
}

const counting = function(story){
    divide(story)
    console.log(wordCounts)
}

counting(story)