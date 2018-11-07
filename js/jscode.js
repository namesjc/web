// function changeStyle(){

//     // var text = document.getElementById("para1").style.color = "blue";
//     // var text = document.getElementById("para1").style.backgroundColor = "red"
//     // var text = document.getElementById("para1").style.fontStyle = "italic"

//     // var paragraph = document.getElementsByTagName("p");
//     // for (var i = 0; i < paragraph.length; i++) {
//     //     paragraph[i].style.fontStyle = "italic";
//     //  }

//      // var paragraph = document.getElementsByClassName("para");
//      // for (var i = 0; i < paragraph.length; i++) {
//      //    paragraph[i].style.color = "red";
//      // }

//      // var paragraph = document.getElementsByClassName("para");
//      // var changeText = paragraph[0].innerHTML = "NEW TEXT 1";
//      // var changeText = paragraph[1].innerHTML = "NEW TEXT 2";

//      // var paragraph = document.getElementsByClassName("para");
//      // var firstParaText = paragraph[0].innerHTML;
//      // var secondParaText = paragraph[1].innerHTML;
//      // var addThem = paragraph[2].innerHTML = firstParaText + secondParaText;
//      // var firstParaText = paragraph[0].innerHTML = " ";
//      // var secondParaText = paragraph[1].innerHTML = " ";

//      document.getElementById("image").src="tree.jpg"
// }



function changeBackground() {
    var text = document.getElementById("para").style.backgroundColor = "red"
}

function backToNormal() {
    var text = document.getElementById("para").style.backgroundColor = ""
}

function newPicture() {
    document.getElementById("image").src = "tree.jpg"
}

function oldPicture() {
    document.getElementById("image").src = "badmood.jpg"
}

