// In a language of your choice, please write a function that will output the indices of the two consecutive elements that have the highest max sum in an input array of integers (e.g., maxPair([0, 5, 5, 2]) will return (1, 2)). In the case of a tie, the method should return the leftmost pair (e.g., maxPair([0, 4, 3, 1, 2, 3, 4, 0]) will return (1, 2)).



function maxPair(array){

    let index1 = 0
    let index2 = 1
    let sum = array[0] + array[1]

    for(let i = 0; i < array.length - 1; i++ ){
        let currentSum = array[i] + array[i + 1]

        if(currentSum > sum){
            index1 = i
            index2 = i + 1
            sum = currentSum
        }
    }

    return (index1, index2)
}