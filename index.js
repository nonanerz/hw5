document.querySelector('form').addEventListener('submit', function(event)
{
    event.preventDefault();

    var value = document.getElementById('todo-input').value;
    var child = document.createElement("LI")
        child.innerHTML = '<span class="done">x -</span> <span class="remove">remove</span>'

    child.appendChild(document.createTextNode(value));
    document.querySelector('ul').appendChild(child);
    document.getElementById('todo-input').value = ''

}, false);

var counter = 0

document.querySelector('ul').addEventListener('click', function(event)
{
    var li = event.target.parentNode
    
    if (li.hasAttributes("style", "text-decoration:line-through")) {
        document.getElementById('counter').innerText = --counter
        li.removeAttribute("style", "text-decoration:line-through")
    } else {
        document.getElementById('counter').innerText = ++counter
        li.setAttribute("style", "text-decoration:line-through")
    }

}, false);


