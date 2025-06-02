var output = [];
var count = 1;

function fizzbuzz(){

    for(var count = 100; count > 1; count--){
        

    if (count % 3 === 0){
        output.push("fizz")
    } 
    else if (count % 5 === 0){
        output.push("buzz");
    }
    
    else{
    output.push(count);    
    }
    
 
    count++;
}
        
    
    console.log(output);
}