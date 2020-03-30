var string = "Programming Siyapaa";
var stringObject =  new String("Programming Siyapaa");
console.log(string);
console.log(stringObject);

/* Iterating the string */
for(var i =0; i< string.length; i++) {
    console.log(string[i]);
}

/* Iterating the stringObject */
for(var ch of stringObject) {
    console.log(ch);
}
/* Wil return true */
console.log(string==stringObject);
/* Identically there are not same so in that case it will return false */
console.log(string===stringObject);

/* Will return false because we are comparing two different objects */
