import React, {useState,useEffect} from 'react';
import axios from 'axios';

function ModalEdit(props){

    const[user,setUser]=useState(props.todo.user)
    const[todo,setTodo]=useState(props.todo.todo)
    const[prioridad,setPrioridad]=useState(props.todo.prioridad)

    useEffect(()=>{
        setUser(props.todo.user)
        setTodo(props.todo.todo)
        setPrioridad(props.todo.prioridad)
    },[props.todo])// con esto voy a capturar los cambios que Home envia a modal

    const updateTodo=(event)=>{
        event.preventDefault();
        
        axios.put(`https://todoapp-3140d.firebaseio.com/todos/${props.todo.id}.json`,
                {
                    user,
                    todo,
                    prioridad
                }).then(()=>{
                    props.close(false)
                }).catch((error)=>alert(error))
    }

    return(
        <div className={props.open ? 'modal fade show' : 'modal fade'} 
             style={{display:props.open ? 'block' : 'none' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-tittle">Editar</h5>
                        <button className="close" onClick={()=>props.close(false)}>
                            <span>&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-12 col-lg-12 col-sm-12">
                                <form onSubmit={updateTodo}>
                                    <div className="form group">
                                        <label htmlFor="Nombre">Nombre:</label>
                                        <input type="text"
                                        value={user}
                                        onChange={(event)=>setUser(event.target.value)}
                                        className='form-control'
                                        />
                                    </div>
                                    <di className="form-group">
                                        <label htmlFor="To-Do">To-do:</label>
                                        <textarea className='form-control'
                                        value={todo}
                                        onChange={(event)=>setTodo(event.target.value)}
                                        name="" cols="30" 
                                        rows="10">
                                        </textarea>
                                    </di>
                                    <div className="form-group">
                                        <label htmlFor="Prioridad">Prioridad</label>
                                        <select
                                        value={prioridad}
                                        onChange={(event)=>setPrioridad(event.target.value)} 
                                        name="" id="" className="form-control">
                                            <option value="3">Alta</option>
                                            <option value="2">Media</option>
                                            <option value="1">Baja</option>
                                        </select>
                                    </div>
                                    <button className="btn btn-info">Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ModalEdit