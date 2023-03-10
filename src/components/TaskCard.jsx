import React from 'react'

const TaskCard = ({ task, handleDelete, handleUpdate }) => {
    return (
        <>
            <li className={task.completed ? 'complete' : 'incomplete'}>
                <span>{task.id} - {task.name}</span>
                <button className=' btn btn-danger btn-sm' onClick={() => handleDelete(task.id)}>DELETE</button>
                <button className=' btn btn-success btn-sm' onClick={() => handleUpdate(task.id)}>EDIT</button>
            </li>
        </>
    )
}

export default TaskCard