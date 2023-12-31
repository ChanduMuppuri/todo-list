const todoList = [{
  name:'make dinner',
  dueDate:'2023-09-08'
  },{
  name:'wash dishes',
  dueDate:'2023-09-10'
  }];

renderTodoList();

function renderTodoList(){
  let todoListHtml='';

  todoList.forEach((todoObject,index)=>{9
    const {name,dueDate}=todoObject;
    const html=`
      
        <div>${name}</div>
        <div> ${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button">delete</button>
      
    `;
    todoListHtml+=html;
  })

  document.querySelector('.js-todo-list').innerHTML=todoListHtml;

  document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
          renderTodoList();
    })
  });
}

document.querySelector('.js-add-todo-button').addEventListener('click',()=>{
  addTodo();
})

function addTodo(){
  const inputElement=document.querySelector('.js-name-input');
  const name=inputElement.value;
  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;
  todoList.push({
    name,
    dueDate
  });
  inputElement.value='';
  renderTodoList();
}