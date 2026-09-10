// loops concept 

const flag=true  // const is used to fix the value by usig const key value cant be changed 
if (!flag) // to over come this value it can be altered at loop  condtions (eg : if(!flag))
{
console.log("Satisfied")
}
else
{
console.log("not satisfied")
}
let i = 0 
while(i>10)  // If while condition is false only it will excute or if it is true program will excute n number of times 
{
    i++
console.log(i)
}

do
{
i++
}
while(i>10); // when we write do while loop make sure whiile loop has semi column 
    console.log(i)
console.log("**************")
    // 2 and 5
    //  from 1 to 10 give me common multiple values of 2 and 5 

    for(let k=1;k<=10;k++)
    {
        //if (k%2==0 && k%5==0)
            // if we want to print 2 or 5  change condition to ||
                if (k%2==0 || k%5==0)

        console.log(k)

    }