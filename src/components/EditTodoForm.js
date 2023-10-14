import React, {useState} from 'react';




function EditTodoForm({editTodo, task}) {
    const [value, setValue]= useState(task.task);
 
 function handleSumbit(e){
e.preventDefault();
editTodo(value, task.id);
setValue("");
 }
    return(
        <form className="TodoForm" onSubmit={handleSumbit}>
            <input type="text" 
            className='todo-input' 
            placeholder='Update task'
                onChange={(e)=> setValue(e.target.value)
                }
                value={value}
            />

            <button type='submit' className='todo-btn'>Update task</button>
        </form>
     );


 
  
}

export default EditTodoForm;