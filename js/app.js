const todoInput = document.querySelector('.todo-input');
const todoBtn = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todoInfo = document.querySelector('.todo-info');

todoBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const userInput = todoInput.value;
    if(userInput){
    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo';

    const li =document.createElement('li');
    li.className ='todo-item';
    li.innerText = userInput;
    todoDiv.appendChild(li);
//creating check button
    const checkBtn = document.createElement('button');
    checkBtn.className = 'check';
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    todoDiv.appendChild(checkBtn);
//creating trash button
    const trashBtn = document.createElement('button');
    trashBtn.className = 'trash';
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    todoDiv.appendChild(trashBtn);
    //creating edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
    todoDiv.appendChild(editBtn);

    todoList.appendChild(todoDiv);
    todoInput.value=' ';
    checkTodoList();
}
else{
    alert('You Are Not Allowed To Add Empty Value');
}
});

todoList.addEventListener('click', function(e){
    const clickEl = e.target;
   if(clickEl.className == 'check'){
       const todoDiv = clickEl.parentNode;
    //    todoDiv.classList.add('completed');
    todoDiv.className += ' completed';
    clickEl.remove();

   }
  else if(clickEl.className == 'trash'){
    const todoDiv = clickEl.parentNode;
 //    todoDiv.classList.add('completed');
 todoDiv.className += ' drop-effect';
 todoDiv.addEventListener('transitionend', function(){
    todoDiv.remove();
    checkTodoList();
 });


}else if(clickEl.className == 'edit'){
    const todoDiv = clickEl.parentNode;
    const firstChild = todoDiv.children[0];
    const input =document.createElement('input');
    input.type = 'text';
    input.className = 'todo-item';
    input.value = firstChild.innerText;
    todoDiv.insertBefore(input, firstChild);
    firstChild.remove();
    clickEl.innerHTML = '<i class="fas fa-save"></i>';
    clickEl.className = 'save';
}else if(clickEl.className == 'save'){
    const todoDiv = clickEl.parentNode;
    const firstChild = todoDiv.children[0];
    const li =document.createElement('li');
    li.innerText = firstChild.value;
    li.className = 'todo-item';
    todoDiv.insertBefore(li, firstChild);
    firstChild.remove();
    clickEl.innerHTML = '<i class="fas fa-edit"></i>';
    clickEl.className = 'edit';

}

});


function checkTodoList(){
    if(todoList.children.length == 0){
        todoInfo.style.display = 'block' ;
    }else{
        todoInfo.style.display = 'none' ;
    }
}
