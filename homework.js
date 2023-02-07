// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// */
// let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
// let dog_names = ["Max","HAS","PuRple","dog"]

// function findWords(){
//     //Your code goes here
// }

// //Call method here with parameters

function findWords(str, arr){
    var words = str.split(/[ ,]+/)
    let matches = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < words.length; j++)
            if (arr[i] == words[j]) {
                matches.push(`Matched ${arr[i]}`)
            }
    }
    if (matches.length == 0) {
        return "No Matches" 
    } else {
        return matches
    }
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

console.log(findWords(dog_string, dog_names))


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

// //Expected output
// //Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
// //Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++){
        if (i % 2 == 0) {
            arr.splice(i, 1, 'even index')
        }
    }
    return arr
}

var arry = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
console.log(replaceEvens(arry))


// CODEWARS REWORK 1, PROBLEM LINK: https://www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript

// PREVIOUS SOLUTION
// def count_by(x, n):
//     count = x
//     new_list = []
//     for item in range(n):
//         new_list.append(count)
//         count += x
//     return new_list

// NEW SOLUTION
function countBy(x, n){
    let new_list = []
    var count = x
    for (let i = 0; i < n; i++) {
        new_list.push(count)
        count += x
    }
    return new_list
}

console.log(countBy(3, 10))

// CODEWARS REWORK 2, PROBLEM LINK: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

// PREVIOUS SOLUTION
// def sum_pairs(arr, target):
//     found = set()
//     for i in range(len(arr)):
//         find = target - arr[i]
//         if find in found:
//             return [find, arr[i]]
//         found.add(arr[i])

// NEW SOLUTION
function sumPairs(liszt, target) {
    var found = new Set()
    for (let i=0; i < liszt.length; i++){
        var find = target - liszt[i]
        if (found.has(find)){
            return [find, liszt[i]]
        }
        found.add(liszt[i])
    }
}

console.log(sumPairs([3,6,7,4], 10))