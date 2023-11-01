import React, { useState } from "react";

function ToDoForm(props: {
    addTodo: Function
}) {

    const [desc, setDesc] = useState('');
    const [assigned, setAssigned] = useState('');

    // const descChange = (event) => {
    //     console.log(event);
    //     setDesc(event.target.value);
    // }
    // const assignedChange = (event) => {
    //     console.log(event);
    //     setAssigned(event.target.value);
    // }

    const submitToDo = () => {
        if (desc !== '' && assigned !== '') {
            props.addTodo(desc, assigned);
            setDesc('');
            setAssigned('');
        }
    }

    return (
        <div className='mt-5'>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Assigned</label>
                    <input type='text' className='form-control' required
                        onChange={event => setAssigned(event.target.value)}
                        value={assigned}
                    ></input>
                </div>
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required
                        onChange={event => setDesc(event.target.value)}
                        value={desc}
                    ></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3"
                    onClick={submitToDo}
                >Add ToDo's</button>
            </form>
        </div>
    )
}

export default ToDoForm;