
const input= document.getElementById("inputTodo");
const btn = document.getElementById("add-todo-btn")
const todoBody = document.getElementById("todo-body");
const todo = document.querySelectorAll(".card-aria");
const deletBtn = document.querySelector(".delet");
const Messege = document.getElementById("messege");


const showSmessege = (text , stus) =>{
    Messege.innerText = text;
    Messege.classList.add (`${stus}-Message`);
    setTimeout(()=>{
        Messege.innerText = "";
        Messege.classList.remove (`${stus}-Message`);
    },1000)
}
// click add btn 
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const inputValue = input.value;
    if(inputValue === ""){
        input.required;
    }
    else{
        addTodo(inputValue);
    }

    input.value = "";
})

// loadTodo 
window.addEventListener("DOMContentLoaded", ()=>{
    const todo = localStoreRefreesh();
    todo.map(e =>{
        return     todoBody.innerHTML += `
        <div id="${e.todoId}" class="card-aria">
            <p class="todo">${e.todoValue}</p>
            <i  class="fa-solid delet fa-trash"></i>
        </div>
        `
    })
    deletFunction();
})

const localStoreRefreesh = () =>{
    return localStorage.getItem("myTodos") ? JSON.parse(localStorage.getItem("myTodos")): []

}
const deletFunction = () =>{
    const deletBtn = document.querySelectorAll(".delet");
    deletBtn.forEach(e =>{
        e.addEventListener("click", ()=>{
           const selectDeletTodo = e.parentElement;
           selectDeletTodo.remove();
            showSmessege("todo is deleted", "del");

           const delId = selectDeletTodo.id;
            const todos = localStoreRefreesh();
            const delToto = todos.filter(todo => todo.todoId !== delId);
            
            localStorage.setItem("myTodos", JSON.stringify(delToto));
            
        })
    })
}

// add todo 
const addTodo = (todoValue)=>{

    // unic Id gnreate 
    const todoId = Date.now().toString();

    todoBody.innerHTML += `
    <div id="${todoId}" class="card-aria">
        <p class="todo">${todoValue}</p>
        <i  class="fa-solid delet fa-trash"></i>
    </div>
    `

    deletFunction();
    showSmessege("add todo", "add"); 

    const todos = localStoreRefreesh();
    todos.push({todoId,todoValue});

    const loclaStorageTodo = localStorage.setItem("myTodos", JSON.stringify(todos));

    onloadTodo(todos);
     
    // addTodo(loclaStorageTodo)
}

const onloadTodo = (data) =>{

    data.map(e =>{
        console.log(e)
      return
    })

}


