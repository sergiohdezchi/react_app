import React from 'react';

const cursos = [
    {
      'id': 1,
      'title': 'React desde cero',
      'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
      'price': 40,
      'profesor': 'Beto quiroga',
      'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      'id': 2,
      'title': 'Drupal desde cero 2',
      'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
      'price': 20,
      'profesor': 'Beto quiroga',
      'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      'id': 3,
      'title': 'Css desde cero 3',
      'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
      'price': 30,
      'profesor': 'Felix quezada',
      'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      'id': 4,
      'title': 'Html desde cero 4',
      'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
      'price': 10,
      'profesor': 'Alvaro felipe',
      'description': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

const Curso = ({ match }) => {
    const curso_selected = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return(
        <div className='ed-grid m-grid-3'>
            {
                curso_selected ? 
                    <>
                        <h1 className='m-cols-3'>Nombre del curso: { curso_selected.title }</h1>
                        <img className='m-cols-1' src={ curso_selected.image }/>
                        <p className='m-cols-2'>{ curso_selected.description }</p>
                    </>
                : <p>El curso no existe</p>
            }

        </div>

    )
}

export default Curso;