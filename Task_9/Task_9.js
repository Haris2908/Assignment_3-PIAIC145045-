var A = [24,53,78,91,12]
var largestNum = A[0]

for(var i = 0 ; i <= A.length ; i++){
    if(largestNum < A[i]){
        largestNum = A[i]
    }
}

document.write(`Array item: ${A} <br><br> The largest number is : ${largestNum}`)