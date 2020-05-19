import React from 'react';

function SearchBar(props){
    return(
        <form onSubmit={props.gifSearch} className='form-inline justify-content-center'>
            <input className='form-control' 
                onChange={props.evento} 
                placeholder={`Ej. ${props.busqueda}`} name='gif'
            />
            <button type='submit' className='btn btn-success'>Buscar</button>
        </form>
    )
}

export default SearchBar