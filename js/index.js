
function addSomething(num, str){
    var add = num + str;
    alert (add);
}


// addSomething(145, ' Programs to write');


// conditions
// var food = "meat"

// if(food == "apple"){
//     alert("we ate some fruit and specifically an apple");
// }

// else if(food == "meat"){
//     alert("we ate some meat")
// }

// else{
//     alert("we ate something else");
// }

// loops
// var i = 1;
// while(i < 5){
//     document.write("A statement has run ");

//     i++;
// }


// for(var i = 1; i < 5; i++){
//     document.write("A statement has run ");

// }

// object
var orc = {
    hair: "green",
    age: 26,
    stomachFull: true,
    eat:function(){
        document.write('YUM, YUM!');
    }
};

orc.stomachFull = false;

if(orc.stomachFull == true) {
    orc.eat();
    }
else{
    document.write("not eating");
}

orc.hair = "purple"


