import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Curso = ({ match }) => {
    //const curso_selected = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    const [course, setCourse] = useState({})

    useEffect(() => {
      axios.get(`http://my-json-server.typicode.com/sergiohdezchi/json-db/curses/${match.params.id}`)
      .then(
        response => setCourse(
          response.data
        )
      )
    }, [])

    return(
        <div className='ed-grid m-grid-3'>
            {
                course ? 
                    <>
                        <h1 className='m-cols-3'>Nombre del curso: { course.title }</h1>
                        <img className='m-cols-1' src={ course.image }/>
                        <p className='m-cols-2'>{ course.description }</p>
                    </>
                : <p>El curso no existe</p>
            }

        </div>

    )
}

export default Curso;