let boughtTesla = false
const yearOfTeslaPurchase = 2015
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen){
    let yearDiff = currentYear - yearOfTeslaPurchase
    if(yearDiff >= 4){
        console.log("would you like an upgrade")
    }else{
        console.log("are you satisfied with the car?")
    }
}else if(boughtTesla){
    console.log("would you like to move to the US")
}else{
    console.log("are you interested in buying a car")
}