import React, {useState} from 'react';

const Todo = () =>{
    const [task, upDateTask] = useState('');
    const [tasks, upDateTasks] = useState([]);
        const handleInputChange = (e) => {
            upDateTask(e.target.value)

        }
        const handleFormSubmit = (e) => {
            e.preventDefault();
            if(task.trim()){
                upDateTasks([...tasks, task])
                upDateTask('')
            }
        }
    return(
        <React.Fragment>
            <form onSubmit={handleFormSubmit}>
                <input type="text" onChange={handleInputChange} 
                placeholder="Type a new task here..." value={task}
                data-testid="form-field"></input>

                <button type="submit" data-testid="form-btn">Add new Todo</button>
            </form>

            <table data-testid="table">
                <thead>
                    <tr>Tasks</tr>
                </thead>
                <tbody>
                    {tasks.map((item, index) => (
                        <tr key={index}>
                            <td>{item}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    )

}

export default Todo;