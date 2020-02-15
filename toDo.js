var toDoList = document.getElementById("toDoList");
var comList = document.getElementById("comList");

function add() {
  var item = document.getElementById("newToDo").value;
  var itemTxt = document.createTextNode(item);
  var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  var btn = document.createElement("button");
  var btnx = document.createTextNode("x");
  btn.setAttribute("onclick", "remove()");
  btn.appendChild(btnx);
  checkbox.setAttribute("onclick", "complete()");
  li.appendChild(checkbox);
  li.appendChild( document.createTextNode( '\u00A0' ) );
  li.appendChild(itemTxt);
  li.appendChild( document.createTextNode( '\u00A0' ) );
  li.appendChild(btn);
  toDoList.appendChild(li);
  localStorage["list"] = toDoList.innerHTML
}

function complete() {
  var task = this.event.currentTarget.parentNode;
  if(task.style.backgroundColor == "lightgreen"){
    task.style.backgroundColor = null;
    comList.removeChild(task);
    toDoList.appendChild(task);
  }
  else{
    task.style.backgroundColor = "lightgreen";
    toDoList.removeChild(task);
    comList.appendChild(task);
  }
  localStorage["list"] = toDoList.innerHTML

  localStorage["list1"] = comList.innerHTML
}

function remove() {
  var task = this.event.currentTarget.parentNode;
  event.currentTarget.parentElement.remove();
  localStorage["list"] = toDoList.innerHTML
  localStorage["list1"] = comList.innerHTML
}

function showToDo() {
  var x = document.getElementById("toDoList");
  var y = document.getElementById("comList");

  if (x.style.display === "none") {
    x.style.display = "block";
  }

  y.style.display = "none";
  
}

function showCompletedToDo() {
  var x = document.getElementById("toDoList");
  var y = document.getElementById("comList");

  if (y.style.display === "none") {
    y.style.display = "block";
  }

  x.style.display = "none";
}

function showAll() {
  var x = document.getElementById("toDoList");
  var y = document.getElementById("comList");

  if (x.style.display === "none") {
      x.style.display = "block";
  }
  if (y.style.display === "none") {
      y.style.display = "block";
  }
}

if (localStorage["list"]) {
  toDoList.innerHTML = localStorage["list"];
}

if (localStorage["list1"]) {
  comList.innerHTML = localStorage["list1"];
}
