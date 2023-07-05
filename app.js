
var list= document.getElementById("list")




 function todoitem(){
    var input = document.getElementById("todo")
     var li = document.createElement("li")
     var text = document.createTextNode(input.value)
      li.appendChild(text)
var delet = document.createElement("button")
var deleth = document.createTextNode("DELETE")
delet.setAttribute("class","btn")
delet.setAttribute("onclick","del(this)")
delet.appendChild(deleth)
li.appendChild(delet)
var btnval  = document.createElement("button")
var edittext= document.createTextNode("EDIT")
btnval.appendChild(edittext)
btnval.setAttribute("onclick","edit(this)")
li.appendChild(btnval)
list.appendChild(li)
 
input.value = ""
li.appendChild(btnval)
}
function del(e){
    e.parentNode.remove()
}

function delall(){
    list.innerHTML = ""
}
function edit(e){
    var vel = prompt("Enter Updated Value",e.parentNode.firstChild)
    e.parentNode.firstChild.nodeValue = vel
}



