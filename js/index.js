/////Task 1
function sumOfPositiveNumbers(num){
    let sum = 0
    for(let i = 0; i < num.length; i += 1){
        if(num[i] > 0){
            sum += num[i]
        }
    }
    return sum
}
let num = [2,-2,3,-7,1,4]
console.log(sumOfPositiveNumbers(num))


////Task 2
function uniqueNumbers(arr){
    const uniqueArray = []
    for(const subArray of arr){
        for(const element of subArray){
            if(!uniqueArray.includes(element)){
                uniqueArray.push(element)
            }
        }
    }
    return uniqueArray
}
let array = [[1,2,3],[2,3,4], [3,4,5], [4,5,6]]
console.log(uniqueNumbers(array))
////Task 3
function getDivisors(num){
    let divisors = []
    for (let i = 0 ; i <= num; i += 1){
        if(num % i === 0){
            divisors.push(i)
        }
    }
    return divisors
}
let number = 21
console.log(getDivisors(number))

///Task 4
function multiplyIndex(arr){
    let result = []
    for (let i = 0 ; i < arr.length; i += 1){
        result.push(arr[i] * i)
    }
    return result
}
let array2 = [1,2,3,4,5,6]
console.log(multiplyIndex(array2))

///Task 5
function negativeNumbers(arr){
    let count = 0
    for(let i = 0; i < arr.length; i += 1){
        if(arr[i] < 0){
            count += 1
        }
    }
    return count
}
let array3 = [2,-3,-1,4,-6,2,-5]
console.log(negativeNumbers(array3))

///Task 7
function replaceVowelsWithStars(str) {
    const vowels = ['a', 'e', 'i', 'o','y','u']; 
    let newStr = '';
    for (let i = 0; i < str.length; i += 1){
        const symbol = str[i]
        if (vowels.includes(symbol)){
            newStr += '*'
        } else {
            newStr += symbol;
          }
    } 
    return newStr
}
let text = 'RioDeJaneiro'
console.log(replaceVowelsWithStars(text))

///Task 8
function isPrime(numb){
    for (let i = 2; i < numb; i++){
        if(numb % i === 0){
            return false
        }
    }
    return true
}
console.log(isPrime(13))
console.log(isPrime(16))

///Task 9
function getUniqueElements(arr1,arr2){
    let uniqueArray = []
    for(let i = 0 ; i < arr1.length; i += 1){
        if(!uniqueArray.includes(arr1[i])){
            uniqueArray.push(arr1[i])
        }
    }
    for(let i = 0 ; i < arr2.length; i += 1){
        if(!uniqueArray.includes(arr2[i])){
            uniqueArray.push(arr2[i])
        }
    }
    return uniqueArray
}
let arr1 = [1, 2, 3, 4,];
let arr2 = [3, 4, 5, 6];

console.log(getUniqueElements(arr1,arr2))