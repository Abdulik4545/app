let todos = getSavedtools()

const filters = {
    searchText: '',
    hideCompleted: false
}


renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
    e.preventDefault()
    let zeroText = function (e) {
        if (e.target.elements.text.value === '') {
            return 'unknown text'
        } else {
            return e.target.elements.text.value
        }
    }
    let teext = zeroText(e)
    todos.push({
        id:uuidv4(),
        text: teext,
        completed: false
    })
    setLocalStorage(todos) 
    e.target.elements.text.value = ''

    location.assign('../index.html')
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
})

