function newParagraph() {
    var main = document.getElementById("main");
    // creates a heading

    var elementH = document.createElement("h2");
    main.appendChild(elementH);
    var textH = document.createTextNode("The Battle of Salamis");
    elementH.appendChild(textH);

    // creates a paragraph
    var elementP = document.createElement("p");
    main.appendChild(elementP);
    var textP = document.createTextNode("The Battle of Salamis was fought between an alliance of Greek cities and the Persian Empire in 480 BC.  The Greeks decisively defeated the Persian navy.");
    elementP.appendChild(textP);

    // create attribute
    var pAttribute = document.createAttribute("id");
    pAttribute.value = "test";
    elementP.setAttributeNode(pAttribute);

}

function removeHeader() {
    // remove a paragraph
    var elementH = document.getElementsByTagName("h2")[2];
    var parent = elementH.parentNode;
    parent.removeChild(elementH);

    // remove a heading
    var elementP = document.getElementsByTagName("p")[4];
    parent.removeChild(elementP);
}


// function changeText() {
//     var parent = document.getElementById("main");
//     // var child = parent.childNodes[5];
//     var child = parent.lastElementChild;
//     child.style.color = "blue";

// }

// function changeText() {
//     var child =document.getElementById('p1');
//     var parent = child.parentNode;
//     parent.style.color = "blue";

// }

function changeText() {
    var para2 =document.getElementById('p2');
    // var sibling = para2.nextElementSibling;
    var sibling = para2.previousElementSibling;
    sibling.style.color = "blue";

}
