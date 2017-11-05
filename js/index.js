var counter = 0
var counterBlock = document.getElementById('counter')

counterBlock.innerText = counter

document.querySelector('form').addEventListener('submit', function(event)
{
    event.preventDefault();

    var value = document.getElementById('todo-input').value;
    var child = document.createElement('LI')
        child.classList.add('collection-item')
        child.classList.add('todo')
        child.classList.add('z-depth-3')
        child.innerHTML = '<i class="remove material-icons pulse">delete_forever</i><i class="done material-icons">check</i><p class="flow-text"></p>'
    if (value.trim() !== '') {
        child.getElementsByTagName('p')[0].innerText = value;
        document.querySelector('ul').appendChild(child);
        document.getElementById('todo-input').value = ''
        counterBlock.innerText = ++counter
    }

}, false);

document.querySelector('ul').addEventListener('click', function(event)
{

    if (event.target.classList.contains('done')) {
        var li = event.target.parentNode

        if (li.classList.contains('completed')) {
            event.target.innerText = 'done'

            counterBlock.innerText = ++counter
            li.classList.remove('completed')
        } else {
            event.target.innerText = 'undo'

            counterBlock.innerText = --counter
            li.classList.add('completed')
        }
    }

    if (event.target.classList.contains('remove')) {
        var ul = document.querySelector('ul')
        var elementToRemove = event.target.parentNode

        if (elementToRemove.classList.contains('completed') === false) {
            counterBlock.innerText = --counter
        }
        ul.removeChild(elementToRemove)
    }

    if (event.target.classList.contains('filter')) {
        document.getElementsByClassName('filter-active')[0].classList.remove('filter-active')
        event.target.classList.add('filter-active')

        var todo = document.querySelectorAll('.todo')
        switch (event.target.getAttribute('id')) {
            case 'filter_all':
                document.querySelectorAll('.hidden').forEach(function (elem) {
                    elem.classList.remove('hidden')
                });
                break;
            case 'filter_active':
                todo.forEach(function (elem) {
                    elem.classList.remove('hidden')
                });
                document.querySelectorAll('.completed').forEach(function (elem) {
                    elem.classList.add('hidden')
                });
                break;
            case 'completed':
                document.querySelectorAll('.completed').forEach(function (elem) {
                    elem.classList.remove('hidden')
                });
                todo.forEach(function (elem) {
                    if (elem.classList.contains('completed') === false) {
                        elem.classList.add('hidden')
                    }
                });

                break;
        }
    }

}, false);



