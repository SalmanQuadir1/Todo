import React, { useRef, useState } from 'react'
import TaskCard from './TaskCard';
import './styles/taskList.css';
import BoxCard from './BoxCard';
import AddTask from './AddTask';


const TaskList = () => {
    const [name, setName] = useState('');
    const [complete, setComplete] = useState(false);
    const [show, setShow] = useState(true);
    const [editMode, setEditMode] = useState(false);
    const [buttonText, setButtonText] = useState('Add');
    const [id, setId] = useState([]);

    const [tasks, setTasks] = useState([
        { id: 121, name: 'React js Tutorials', completed: true },
        { id: 122, name: 'Node js Tutorials', completed: false },
        { id: 123, name: 'Angular Tutorials', completed: true },
        { id: 124, name: 'Spring Boot Tutorials', completed: false },
    ]);

    // const tasks = useRef('');

    const handleDelete = (id) => {
        const Task = tasks.find(t => t.id === id);
        if (Task) {
            return (setTasks(tasks.filter(t => t.id !== id)));
        }

    }
    const handleName = (e) => {
        setName(e.target.value);
           

    }
    const handleUpdate = (id) => {
        setEditMode(true);
        setId(id);
        setButtonText('Update');
        console.log('update', id);
        var task = tasks.find(t => t.id === id);
        setTasks(tasks.filter(t => t.id !== id));
        let inputValue = document.getElementById('taskInput');
        task.id = id;
        inputValue.value = task.name;
        inputValue.nextSibling.value = task.completed;

    }
    const handleBoolean = (e) => {
        console.log("....", e.target.value);
        setComplete(Boolean(e.target.value));

    }
    const addTask = (e) => {
        console.log("....", e);
        var idd = (tasks.length - 1);

        const initialState = {
            id: tasks[idd].id + 1,
            name: name,
            completed: Boolean(complete)

        }
        if (editMode) {
            setTasks([...tasks, {
                id: id,
                name: name,
                completed: Boolean(complete)

            }])

        } else {

            setTasks([...tasks, initialState]);
        }
    }


    return (
        <>
            <div className="container row ">
                <div className="col-md-6 offset-md-3 mt-5 border border-default">
                    <AddTask handleBoolean={handleBoolean} buttonText={buttonText} handleName={handleName} addTask={addTask} handleDelete={handleDelete} show={show} setShow={setShow} />
                </div>

                <div className="box col-md-6 offset-md-3 shadow-lg">

                    <ul>
                        {show && tasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} handleDelete={handleDelete} handleUpdate={handleUpdate} />

                        ))}

                    </ul>
                </div>
                <BoxCard result="success shadow-lg my-3 p-3 bg-success text-white mx-auto w-50">
                    <p>Lorem ipsum dolor sit.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quas?</p>
                </BoxCard>
                <BoxCard result="success shadow-lg my-3 p-3 bg-warning text-white mx-auto w-50">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quas?</p>
                </BoxCard>
                <BoxCard result="success shadow-lg my-3 p-3 bg-danger text-white mx-auto w-50">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, vel nisi..</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, quas?</p>
                </BoxCard>


            </div>
        </>
    )
}

export default TaskList