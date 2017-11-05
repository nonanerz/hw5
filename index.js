document.querySelector('form').addEventListener('submit', function(event)
{
    event.preventDefault();

    var value = document.getElementById('todo-input').value;
    var child = document.createElement('LI')
        child.classList.add('collection-item')
        child.classList.add('z-depth-3')
        child.innerHTML = '<i class="done material-icons">check</i><i class="remove material-icons">delete_forever</i><p class="flow-text"></p>'
    if (value.trim() !== '') {
        child.getElementsByTagName('p')[0].innerText = value;
        document.querySelector('ul').appendChild(child);
        document.getElementById('todo-input').value = ''
    }

}, false);

var counter = 0
var counterBlock = document.getElementById('counter')

counterBlock.innerText = counter

document.querySelector('ul').addEventListener('click', function(event)
{

    if (event.target.classList.contains('done')) {
        var li = event.target.parentNode

        if (li.classList.contains('completed')) {
            event.target.innerText = 'done'

            counterBlock.innerText = --counter
            li.classList.remove('completed')
        } else {
            event.target.innerText = 'undo'

            counterBlock.innerText = ++counter
            li.classList.add('completed')
        }
    }

    if (event.target.classList.contains('remove')) {
        var ul = document.querySelector('ul')
        var elementToRemove = event.target.parentNode

        if (elementToRemove.classList.contains('completed')) {
            counterBlock.innerText = --counter
        }
        ul.removeChild(elementToRemove)
    }

}, false);


