//Objects concept 

let person={    // to cal the pobject in object we can create properties 
firstName:'Sai',
lastName:"Charan",
fullName: function()  //for concatenate two name in property use function 
{
console.log(this.firstName+this.lastName) 
}

}
console.log(person.fullName()) /// output :[Function: fullName]  for function use ()
console.log(person.lastName)
console.log(person.firstName)
person.firstName= 'Raj'  //change the first name 
console.log(person.firstName)
person.gender ='male'  //to add any value outside function      
console.log(person)
console.log('Company' in person)  // to find any property persent in the object 
    
// If want to print all the properties in the object by using for loop  and 'key' word 
 for(let  key in person)
    {
       console.log(person[key])  
    } 