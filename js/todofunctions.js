const getSavedtools = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}


const setLocalStorage = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


const removeTodo = function (id) {
    let todoIndex = todos.findIndex(function (todo) {
        return todo.id = id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex,1)   
    }
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
         
        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(getSummary(incompleteTodos))
   
    
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generate(todo))
    })

       
}

const generate = function (todo) {
    const div = document.createElement('div')
    const span = document.createElement('span')
    const btn = document.createElement('button')
    const cb = document.createElement('input')
    span.textContent = todo.text
    btn.textContent = 'x'
    cb.setAttribute('type','checkbox')
    cb.checked = todo.completed
    div.appendChild(cb)
    div.appendChild(span)
    div.appendChild(btn)
    btn.addEventListener('click', function () {
        removeTodo(todo.id)
        setLocalStorage(todos)
        renderTodos(todos, filters)
    })
    return div
}


const getSummary = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}