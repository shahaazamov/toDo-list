// jscodes for responsive navbar
const showNav = document.querySelector('.show-nav-btn')
const hiddenNav = document.querySelector('.site-header')

showNav.addEventListener('click' , () =>{
    hiddenNav.classList.toggle('show-nav')
})


        // modal

const button =  document.querySelector('.main-btn')
const modal =  document.querySelector('.modal')
const  cancel =  document.querySelector('.cancel')
const overlay = document.querySelector('.overlay')
const name = document.querySelector('.heading')



button.addEventListener('click' , () => {
    modal.classList.remove('overlay')
    overlay.classList.remove('overlay')
})

cancel.addEventListener('click' , addHidden)

modal.addEventListener('click', addHidden)

document.addEventListener('keydown' , (e) =>{
    if(e.code == 'Escape'){
        addHidden()
    }
})
//  todo list

const inputText = document.querySelector('.input-text')
const todos = document.querySelector('.todos')
const todoForm = document.querySelector('.todo-form')

todoForm.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const inputValue = inputText.value
    inputText.value = ''
    if(inputValue){
        toDoList(inputValue)

    }else{
        alert('add anything')
        inputText.value = ''
        // toDoList()
        
    }
})

function toDoList(todo) {
//li
const li = document.createElement('li')
li.textContent = todo
li.classList.add('todo-item')
//paaragraph
const p = document.createElement('p')
p.textContent.todo
li.appendChild(p)
//check-btn
const checkBtn = document.createElement('button')
checkBtn.innerHTML = '<i class="fas fa-check"></i>'
checkBtn.classList.add('check-btn')
li.appendChild(checkBtn)

//trash-btn
const trashBtn = document.createElement('button')
trashBtn.innerHTML = '<i class="fas fa-trash"></i>'
trashBtn.classList.add('trash-btn')
li.appendChild(trashBtn)
todos.style.padding = '10px'
todos.appendChild(li)
// console.log(li)


document.addEventListener('click' , (e) =>{
    if(e.target.classList[0] == 'trash-btn') {
            const item = e.target.parentElement
            item.remove() 
            const listel = document.querySelectorAll('.todo-item')
            if(listel.length == '0'){
                modal.classList.remove('hidden')
                overlay.classList.remove('hidden')
                todos.style.padding = '10px'
            }
        }
        if(e.target.classList[0] == 'check-btn'){
            const item = e.target.parentElement
            item.classList.add("done")
        }
        })


}

function addHidden() {
    modal.classList.add('overlay')
    overlay.classList.add('overlay')
}





// heading.addEventListener('click', () =>{
//     document.classList('body').style.backgroundColor = 'red'
// })

