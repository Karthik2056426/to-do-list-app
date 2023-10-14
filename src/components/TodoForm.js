import React, {useState} from 'react';




function TodoForm({addTodo}) {
    const [value, setValue]= useState("");
 
 function handleSumbit(e){
e.preventDefault();
addTodo(value);
setValue("");
 }
    return(
        <form className="TodoForm" onSubmit={handleSumbit}>
            <input type="text" 
            className='todo-input' 
            placeholder='what is the task today?'
                onChange={(e)=> setValue(e.target.value)
                }
                value={value}
            />

            <button type='submit' className='todo-btn'>Add task</button>
        </form>
     );


 
  
}

export default TodoForm;