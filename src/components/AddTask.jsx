import React from 'react'
import './styles/button.css';

const AddTask = ({ handleName, handleBoolean, setShow, show, addTask,buttonText }) => {
    return (
        <>
                <div className="box1  d-flex  py-4 ">
                    <input className='form-control mx-2 ' type="text" id='taskInput' placeholder='Enter Task Name' onChange={handleName} required />
                    <select class="form-select" aria-label="Default select example" onChange={handleBoolean}>
                        <option value={true}>Completed</option>
                        <option value={false}>Pending</option>
                    </select>
                    <button className='btn btn-success btn-sm mx-2' onClick={addTask}>{buttonText}</button>
                    <button className=' float-right btnn btn-sm mx-2' onClick={() => setShow(!show)}>Hide</button>

                </div>
        </>
    )
}

export default AddTask