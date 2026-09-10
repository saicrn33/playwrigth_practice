// String concepts


let day= 'Monday '
console.log(day.length) // length keyword is use to find the length of the string
 
let subDay=day.slice(0,3)
console.log(subDay)
// split the string into two mon day 
let splitDay=day.split("n")
console.log(splitDay[1])

let date = '23'
let nextDate= '27'
let diff =parseInt(nextDate)-parseInt(date) // convert string to integer 
console.log(diff)
diff.toString  // convert integer to string 

// concatenate two strings

let  newDay = day+"Working day day "

console.log(newDay)

//Monday Working day write a program to search of a day in the string

let count = 0 
let value= newDay.indexOf("day")
while(value==-1)
{
count++
value= newDay.indexOf("day",value+1)
}

console.log(value)
