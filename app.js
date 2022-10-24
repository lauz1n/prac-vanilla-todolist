window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form')
    const input = document.querySelector('#new-task-input')
    const listElement = document.querySelector('#tasks')


    form.addEventListener('submit', (e) => {
        e.preventDefault()

       
    
      const task = input.value 

      if (!task) {
        alert('Please fill the input') 
        return
      }

      const taskElement = document.createElement('div')
      taskElement.classList.add('task')

      const taskElementContent = document.createElement('div')
      taskElementContent.classList.add('content')

      taskElement.appendChild(taskElementContent)

      const taskInput = document.createElement('input')
      taskInput.classList.add('text')
      taskInput.type = 'text'
      taskInput.value = task;
      taskInput.setAttribute('readyonly', 'readonly')

      taskElementContent.appendChild(taskInput)

      const taskActions = document.createElement('div')
      taskActions.classList.add('actions')

      const taskEditElement = document.createElement('button')
      taskEditElement.classList.add('edit')
      taskEditElement.innerHTML = "Edit"

      const taskDeleteElement = document.createElement('button')
      taskDeleteElement.classList.add('delete')
      taskDeleteElement.innerHTML = "Delete"

      taskActions.appendChild(taskEditElement)
      taskActions.appendChild(taskDeleteElement)

      taskElement.appendChild(taskActions)

      listElement.appendChild(taskElement)

      input.value = ""


      taskEditElement.addEventListener('click', () => {
        if (taskEditElement.innerText.toLowerCase() == 'edit') {
            taskInput.removeAttribute('readonly')
            taskInput.focus()
            taskEditElement.innerText = "Save"
        } else { 
            taskInput.setAttribute('readonly', 'readonly')
            taskEditElement.innerText = "Edit"
        }
      })

      taskDeleteElement.addEventListener('click', () => {
        listElement.removeChild(taskElement)
      })
    })
})