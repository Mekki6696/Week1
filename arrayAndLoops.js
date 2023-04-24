// let music =[
//     "These Days - Rudimental",
//     "Say Somthing - Karen",
//     "Take Me To Church - Hozier"
// ]
// console.log(music)

//.push adds an item in your code at the end
// music.push("Who you are - Jessie J")
// console.log(music)

//.lenth gives you the number of items in your array 
// console.log(music.length)

//the [2].lenth gives you how many charcters in the given item 
// console.log(music[2].length)

//.push adds a item to your array at the end 
//  music.push("Slow Dance - John Mayer")
// console.log(music)

//.pop highlights the first 2 item in your array 
// music.pop()
// console.log(music)


// music.map(index)
// console.log(music)

//.shift highlights the last 2 items in your array 
// music.shift()
// console.log(music)

// .unshift adds to the begning of the array 
// music.unshift("Slow Dance - John Mayer")
// console.log(music)

// .splice removes and adds from the array at the given point ( position in array , how many to remove, replace with)the replace with is not always needed and can be
// left blank if you just want to remove items.
// music.splice(0,1, " Eminem - lose your self")
// console.log(music)


// .slice showws the given items between the numbers in the brackets as a new array 
// console.log(music.slice(1,3))








// let favSongs =[
//     "These Days - Rudimental",
//     "Say Somthing - Karen",
//     "Take Me To Church - Hozier"
// ]
// favSongs.push("Slow Dance - John Mayer", "Left hand free - Alt J")
// console.log(favSongs)
// console.log(favSongs.splice(1,1))










//loops
// const favDrinks = [
//     "coke",
//     "coffee",
//     "tea"
// ]
// for (let i = 0; i < favDrinks.length; i++){
//     console.log(favDrinks[i], i)
// }





// let multiplesOfTwo = [];
// for (let i = 0; i <20; i++){
//     if (i % 2 ==0){
//         multiplesOfTwo.push(i)
//     }
// }
// console.log('numbers divisible by 2 are', {multiplesOfTwo})






// let age = 15 
// while( age<18){
//     console.log(`your a child! ${age}`)
//     age++
// }
// console.log("your an adult")


// let cards = [
//     "diamond",
//     "spade",
//     "heart",
//     "club"
// ]
// let currentCard = "club"
// while(currentCard !== "spade"){
//     console.log(currentCard)
//     currentCard = cards [Math.floor(Math.random()*4)]
// }
// console.log(currentCard)

// for (let i = 0; i< 6; i++){
//     console.log(Math.ceil(Math.random()*50))
// }
// let numbs = []
// for (let i = 0; i< 6; i++){
//     numbs.push(Math.ceil(Math.random()*50))
// }
// console.log(Math.ceil(Math.random()*50))

// let divisibleByTwo =[]

// for (let i = 1; i < 20; i++){
//     if (i% 2 === 0 ){
//         divisibleByTwo.push(i)
//     }
// }
// console.log(`"numbers divisable by 2 are" ${divisibleByTwo}`)

// let numbs =[
//     0,
//     1,
//     2,
//     3,
//     4,
//     5,
//     6,
//     7,
//     8,
//     9
// ]
// for(let i =0; i < numbs.length; i++){
// console.log(i)
// }

// let ranNums = []
// for (let i = 0; i <30; i++){
//     console.log(Math.ceil(Math.random()*30))
//     if (i % 7 === 0){
//         ranNums.push(i)
//     }
// }
// console.log(ranNums)
