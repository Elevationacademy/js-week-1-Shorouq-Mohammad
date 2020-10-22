const a = 3
let b = 2
let c = 0 || 12
console.log(c)
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2

console.log(a)//3
console.log(b)//15
console.log(c)//12
console.log(d)//160