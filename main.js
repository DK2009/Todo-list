var submitBtn = document.querySelector('.input-feild input[type="submit"]')
var list = document.querySelector('.list')
var index = 0

function toggle(i) {
    var todosContent = document.querySelectorAll('.list li span')
    todosContent[i].classList.toggle('done')
}

function checkInput() {
    if(document.querySelector('.input-feild input[type="text"]').value.trim() !== '') {
        submitBtn.style.pointerEvents = 'all'
        submitBtn.style.backgroundColor = 'rgb(255, 80, 40)'
    } else {
        submitBtn.style.pointerEvents = 'none'
        submitBtn.style.backgroundColor = 'rgb(255, 100, 60)'
    }
}

function addTodo() {
    if(document.querySelectorAll('li').length === 0) {
        index = 0
    }
    var input = document.querySelector('.input-feild input[type="text"]')
    if(input.value === '') return
    list.innerHTML += `
    <li>
    <span onclick="toggle(${index})">${input.value}</span>
    <button class="remove-btn" onclick="removeTodo(${index})">
    <i class="fas fa-trash"></i>
    </button>
    </li>
    `
    index++
    input.value = ''
    submitBtn.style.pointerEvents = 'none'
    submitBtn.style.backgroundColor = 'rgb(255, 100, 60)'
}

function hitEnter(events) {
    if(document.querySelector('.input-feild input[type="text"]').value.trim() !== '') {
        if(events.keyCode === 13) {
            addTodo()
        }
    }
}

function updateIndex() {
    var elements = document.querySelectorAll('.remove-btn')
    // console.log(elements)
    if(!elements) return
    for(var i = 0; i < elements.length; i++) {
        elements[i].setAttribute('onclick', `removeTodo(${i})`)
    }
}

function removeTodo(i) {
    var liElements = document.querySelectorAll('li')
    liElements[i].outerHTML = ''
    updateIndex()
}

function clearTodos() {
    list.innerHTML = ''
}