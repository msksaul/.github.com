import React, {useState,useEffect} from 'react'
import axios from 'axios'
import CardTodo from './CardTodo'
import NavBar from './NavBar'
//import Column from './Column'
import ModalEdit from './ModalEdit';
import ModalDelete from './ModalDelete';

function Home(){

    const[todosAlta,setTodosAlta] = useState([])
    const[todosMedia,setTodosMedia] = useState([])
    const[todosBaja,setTodosBaja] = useState([])
    const[isOpen,setIsOpen] = useState(false)
    const[currentTodo,setCurrentTodo] = useState({})
    const[isOpenDelete,setIsOpenDelete] = useState(false)

    useEffect(()=>{
        axios.get('https://todoapp-3140d.firebaseio.com/todos.json')
        .then((response)=>{
            const elements = Object.entries(response.data).reverse() // convierte objetos en arreglo



            const realData = elements.map((todo)=>{ // convertir arreglo de arreglo a un arreglo de objetos
            const[id,data]=todo; // estoy destructurando el arreglo de adentro
            return {
                id,
                ...data // split object, hago una copia de la data
                }
            })
            //setTodos(realData)

            const alta=realData.filter((todo)=>todo.prioridad==='3') //filtra todos por prioridad 3
            const media=realData.filter((todo)=>todo.prioridad==='2')
            const baja=realData.filter((todo)=>todo.prioridad==='1')

            setTodosAlta(alta)
            setTodosMedia(media)
            setTodosBaja(baja)

        }).catch((error)=>{
            alert(error)
        })
    },[isOpen,isOpenDelete])

    return(
        <div className='App'>
            <NavBar/>
          <div className="container mt-5 pt-5">
              <div className="row justify-content-center mb-5">
                  <div className="col-4">
                    <a href="/createTodo" className='btn btn-lg bg-dark text-white'>
                        Crear to-do
                    </a>
                  </div>
              </div>
            <div className="row justify-content-center"> 
                {/* <Column nombre={'Importantes'}
                        arreglo={todosAlta}
                        dimensiones={'col-12 con-sm-4 col-md-4 col-lg-4'}
                        edit={setIsOpen}
                />
                <Column nombre={'No pasa nada'}
                        arreglo={todosMedia}
                        dimensiones={'col-12 con-sm-4 col-md-4 col-lg-4'}
                        edit={setIsOpen}
                />
                <Column nombre={'Pueden esperar'}
                        arreglo={todosBaja}
                        dimensiones={'col-12 con-sm-4 col-md-4 col-lg-4'}
                        edit={setIsOpen}
                /> */}
                <div className="col-12 con-sm-4 col-md-4 col-lg-4">
                    <h4>Importantes</h4>
                    {todosAlta.map((todo)=>{
                        return (
                            <CardTodo 
                            nombre={todo.user}
                            todo={todo.todo}
                            prioridad={todo.prioridad}
                            edit={()=>{
                                setCurrentTodo(todo);
                                setIsOpen(true)
                            }}
                            delete={()=>{
                                setCurrentTodo(todo);
                                setIsOpenDelete(true)
                            }}
                            />
                        )
                    })}
                </div>
                <div className="col-12 con-sm-4 col-md-4 col-lg-4">
                    <h4>No pasa nada</h4>
                    {todosMedia.map((todo)=>{
                        return (
                            <CardTodo 
                            nombre={todo.user}
                            todo={todo.todo}
                            prioridad={todo.prioridad}
                            edit={()=>{
                                setCurrentTodo(todo);
                                setIsOpen(true)
                            }}
                            delete={()=>{
                                setCurrentTodo(todo);
                                setIsOpenDelete(true)
                            }}
                            />
                        )
                    })}
                </div>
                <div className="col-12 con-sm-4 col-md-4 col-lg-4">
                    <h4>Pueden esperar</h4>
                    {todosBaja.map((todo)=>{
                        return (
                            <CardTodo 
                            nombre={todo.user}
                            todo={todo.todo}
                            prioridad={todo.prioridad}
                            edit={()=>{
                                setCurrentTodo(todo);
                                setIsOpen(true)
                            }}
                            delete={()=>{
                                setCurrentTodo(todo);
                                setIsOpenDelete(true)
                            }}
                            />
                        )
                    })}
                </div> 
            </div>
          </div>
        <ModalEdit open={isOpen} close={setIsOpen} todo={currentTodo}/>
        <ModalDelete open={isOpenDelete} close={setIsOpenDelete} todo={currentTodo}/>
        </div>
    )
}

export default Home;