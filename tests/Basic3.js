var marks =[20,30,40,50,60,100]
subMarks= marks.slice(2,5)
console.log(subMarks)

console.log(marks[2]) // 40 to access the value present in array marks[index]
marks[4]= 18 //this will replace the marks for 4 index from 60 t0 18
console.log(marks)
console.log(marks.length) //this will give the length of the array 6 
marks.push(64) // push key word is used to add new element into the array 
console.log(marks)
marks.pop() // pop will delete the last element in the array 
marks.unshift(2) // this will add any element at beginning of the array 
console.log(marks)
console.log(marks.indexOf(100)) //this will print index value of the array 
console.log(marks.includes(180))// this will search marks are present in the array or not 

//Using for loop concept
//if want to sum the marks present in the array
var sum = 0  // declaring a variable sum 

for(let i=0; i<marks.length;i++)
    {
//console.log(marks[i])
sum = sum + marks[i]
    } 
   console.log(sum)
// reduce filter 

  let total = marks.reduce((sum,marks)=>sum+marks,0)
  console.log(total)

  // print only even numbers in the array and even number should print in the new array and multiply with 3 multiple with the array
  var scores =[10,11,12,13,14,15,16]
  var evenscores =[]
  
for(let i=0; i<scores.length;i++)
    {
if(scores[i]%2 ==0)
{
evenscores.push(scores[i])
}
    } 
    console.log(evenscores)
    // same even concept useing filter method 

    let newFilterEvenScores= scores.filter(scores=>scores%2==0)
    console.log(newFilterEvenScores)  //  output [ 10, 12, 14, 16 ] =>  3*[ 10, 12, 14, 16 ]

    // map concept 
    let mappArray = newFilterEvenScores.map(scores=>scores*3)
    console.log(mappArray)

    // sum up the new array 

    let totalValue= mappArray.reduce((sum,ch)=>sum+ch,0)
console.log(totalValue)

// Imstead of writting so many steps it can be return in one step 
  var scores1 =[10,11,12,13,14,15,16]
let totalValue1=scores1.filter(scores=>scores%2==0).map(scores=>scores*3).reduce((sum,ch)=>sum+ch,0)
console.log(totalValue1)

/* Sorting concepts has two types 
1. Sorting with string 
2. Sorting with number */

let fruits =["bananna","apple","mango","gavva"] // string should be in ""
console.log(fruits.sort()) // for sorting string always maitain captital or small letter 
console.log(fruits.reverse()) // this will do decending order 


var sorts = [11,20,30,003,40]
console.log(sorts.sort((a,b)=>a-b))
console.log(sorts.sort((a,b)=>b-a))