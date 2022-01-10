function isPal(arr){
    for(var left = 0; left < arr.length/2; left++){
        
//Result 2 
       // 4,

//Result 1 
       //5,4,3
        var right = arr.length - 1 -left;
        if(arr[left] !== arr[right]){
            // array 0 does equal array 5 
            return "Not a palindrome!";
        }
    }
    return "Palindrome!!!!";
}

var result1 = isPal(([1,1,2,2,1]));
console.log(result1);

var result2 = isPal(([3,2,1,1,2,3]));
console.log(result2);




