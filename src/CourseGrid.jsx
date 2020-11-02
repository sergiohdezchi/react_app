import React from 'react';
import Curso from './Curso.jsx';

const cursos = [
  {
    'id': 1,
    'title': 'React desde cero',
    'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
    'price': 40,
    'profesor': 'Beto quiroga'
  },
  {
    'id': 2,
    'title': 'Drupal desde cero 2',
    'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
    'price': 20,
    'profesor': 'Beto quiroga'
  },
  {
    'id': 3,
    'title': 'Css desde cero 3',
    'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
    'price': 30,
    'profesor': 'Felix quezada'
  },
  {
    'id':4,
    'title': 'Html desde cero 4',
    'image': 'https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png',
    'price': 10,
    'profesor': 'Alvaro felipe'
  }
];

const CourseGrid = () => (
  <>
      <div className='ed-grid m-grid-3'>
        {
          cursos.map(curso => <Curso id={curso.id} title={curso.title} image={curso.image} price={curso.price} profesor={curso.profesor} ></Curso>)
        }
      </div>
  </>
)

export default CourseGrid;
