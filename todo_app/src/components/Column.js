import React from 'react'
import CardTodo from './CardTodo'

function Column(props){
    return (
                <div className={props.dimensiones}>
                    <h4>{props.nombre}</h4>
                    {(props.arreglo).map((todo)=>{
                        return (
                            <CardTodo 
                            nombre={todo.user}
                            todo={todo.todo}
                            prioridad={todo.prioridad}
                            edit={props.edit}
                            />
                        )
                    })}
                </div>
    )
}

export default Column;