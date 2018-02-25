var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector('ul');
var li = document.querySelectorAll('li');
var btn = document.getElementsByClassName('btn');


function inputLength() {
    return input.value.length;
}

function toggle() {
    this.classList.toggle('done');
}


function createListElement() {
	var li = document.createElement("li");
    var btn = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
    btn.appendChild(document.createTextNode("Obriši"));
	li.appendChild(btn);
    btn.classList.add("btn");
    ul.appendChild(li)
	input.value = "";
    li.addEventListener('click', toggle);
    btn.addEventListener('click', del);
}

function del() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}

function addElementAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addElementAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener('click', addElementAfterClick);
input.addEventListener('keypress', addElementAfterKeypress);
for(var i=0; i<li.length; i++) {
    li[i].addEventListener('click', toggle);
    }
for(var i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', del)
}
