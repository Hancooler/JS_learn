prompt("what is your name?");
//1 create a car that store the name that user enters via prompt
// 2 capitalise the first letter of their name
// a isolate the first caracter
var firstChar = name.slice(0,1);
//b turn the first char to uppercast
var upperCaseFirstchar = firstChar.toUpperCase();
// c  isolate the rest of the name
var restOfName = name.slice(1,name.lenght);
// rest name to lowwe
var restOfName = restOfName.toLocaleLowerCase();
// d concactenate the first char with the rest of the char
var capitalisedName = upperCaseFirstchar + restOfName;
//3 we use capitalise version of their name to greet them using alert 
alert("Hello. " + capitalisedName );
