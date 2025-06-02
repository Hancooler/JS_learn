function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let fibArray = [];
    if (n === 0) {
        return fibArray;
    } else if (n === 1) {
        fibArray.push(0);
        return fibArray;
    } else if (n === 2) {
        fibArray.push(0, 1);
        return fibArray;
    } else {
        fibArray.push(0, 1);
        for (let i = 2; i < n; i++) {
            fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
        }
        return fibArray;
    }
    
    
    
    
    
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}