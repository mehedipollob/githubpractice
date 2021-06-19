// implicit binding
// explicit binding 
// new binding


// var printplayerName = function(){
//     var names;
//     console.log(names);
// }

// printplayerName();


// var shakib = {
//     name : 'shakib',
//     age : 18,
//     printplayername: function(){
//         console.log(this.name)
//     }
// };
// shakib.printplayername();

// var printplayerName = function(obj){
//     obj.printname = function(){
//         console.log(this.name)
//     }

// }

// var sakib = {
//     name : "shakib",
//     age : 35,
// };

// var tamim = {
//     name : "tamim",
//     age : 45,
// }

// printplayerName(sakib);
// printplayerName(tamim);

// sakib.printname();
// tamim.printname();


// var person = function (name,age) {
//     return{
//         name : name,
//         age : age,
//         printName: function () {
//             console.log(this.name)
//         }
//     }
// }
// var shakib = person("shakib",18);
// console.log(shakib.name);

var person = function (name,age) {
return {
    name : name,
    age : age,
    printname : function () {
        console.log(this.name)  
    },
    father : {
        name:"abul",
        printname: function () {
        console.log(this.name)            
        }
    }
}
}

var pb = person("pollob",15);
pb.printname(); 


var details = function (fname,lname,age,work,fullname) {

console.log(`My first name:${this.fname} my last name:${lname} 
my age is ${age} and my fullname is ${this.fname} ${lname}  `)

}
var shakib = {
    fname : "Mehedi",
    lname : "Pollob",
    age : 20,
}
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);
details.call(shakib);