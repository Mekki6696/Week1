// arrow function =>
// can use let or const

let coffeIsGrinding = false

let pressGrindBeans = () =>{
    if (coffeIsGrinding){
        console.log("stopping the grind")
        coffeIsGrinding = false
    } else{
        console.log("Grinding is about to begin")
        coffeIsGrinding=true
    }
}
// when you run the code twice you will see both values of the
// if stament becaue each time it is ran then the value changes
// pressGrindBeans()
// pressGrindBeans()


// () these are for parameters and allow for data to be inputed 
let cashWithdrawal = (amount, accnum)=>{
    console.log(`withdrawring ${amount} from account number ${accnum}`)
}

// when calling the function with the data use the () to give the data you want inputting into the arguments 
// cashWithdrawal(250, 507761)
// cashWithdrawal(10, 5564231)

// can use variables in functions 
let accnumber=2357769
let cashWithdrawals = (amount, accnum)=>{
    console.log(`withdrawring ${amount} from account number ${accnum}`)
}
                    // arguments
// cashWithdrawals(500, accnumber)


const addUp = (num1,num2) =>{
    return num1 + num2
}
// addUp(10,27)
// console.log(addUp(10,47))

// functions can be used to call other functions 
const multiplyByNineFifths = (celsius) =>{
    return celsius * (9/5)
}
const getFahranenhite=(celsius)=>{
    return multiplyByNineFifths (celsius)+32
}
// console.log(`the temperature is ${getFahranenhite(15)}°C`)


const takeAway = (fahranenheit) =>{
    return fahranenheit -32
}
const getCelsius = (degree) =>{
    return takeAway (degree)* 5/9
}
// console.log(`the temperature is ${getCelsius(59)}°F`)


// activ 1 
let factorual = (n) => {
    if ((n === 0) || (n === 1)){
        return 1
    }else{
        return(n*factorual(n-1))
    }
}
// console.log(factorual(33))


// activ 2
let orderCount=0
const takeOrder = (toppings, extraCheese)=>{
    if (extraCheese === true) {
        console.log(`pizza with ${toppings} and extra cheese`)
        orderCount++
    }
    else{
        console.log(`pizza with ${toppings}`)
        orderCount++
    }
  
}
// takeOrder("ham", false)


// activ 3 
let pin = 4456
let bal = 5000
let pinCount = 3

cardInsert = (pinnum, cash)=>{
    if ( pin != pinnum, pinCount--) {
        console.log(`pin incorrect please try again ${pinCount} tries left`)
        pinCount=pinCount--
    }
   else if (pin === pinnum) {
    console.log(`how much would you like to withdraw ?`)
   }   
    else if (cash === bal||cash <= bal){
        console.log(`Please wait counting cash`)          
           } else {
            console.log("insufficent funds") 
           
        }
    }
// cardInsert(4456, 30)


let numGen = Math.ceil(Math.random()*10)

ranNum = ()=>{
        return numGen
}

checker = () =>{
    if (numGen === 5){
        console.log("lucky number")
    }
    else if (numGen % 2 ===  0) {
        console.log(`even`, numGen)
    } else {
        console.log (`odd`, numGen)
    }    
}
checker()