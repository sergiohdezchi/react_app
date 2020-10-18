import React from 'react';
import './styles/styles.scss';
import Curso from './Curso'

const App = () => (
  <>
    <div className ="main-banner img-container l-section" id="main-banner">
      <div className ="ed-grid lg-grid-6">
        <div className ="lg-cols-4 lg-x-2">
          <img className ="main-banner__img" src="https://conceptodefinicion.de/wp-content/uploads/2014/03/ciudad.jpg" alt="test" />
          <div className ="main-banner__data s-center">
            <p className ="t2 s-mb-0">Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href="https://images.pexels.com/photos/265614/pexels-photo-265614.jpeg?w=1260&h=750&auto=compress&cs=tinysrgb" target='_blank' className ="button">Botón del banner</a>
          </div>
        </div>
      </div>
    </div>
    <div className='ed-grid m-grid-3'>
      <Curso 
        title='React desde cero 1'
        image='https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png'
        price='50 USD'
        />
            <Curso 
        title='React desde cero 2'
        image='https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png'
        price='50 USD'
        />
            <Curso 
        title='React desde cero 3'
        image='https://edteam-media.s3.amazonaws.com/courses/medium/e737f2e3-92b3-400e-8d82-1b19e0277012.png'
        price='50 USD'
        />
            <Curso 
 
        />
      
    </div>
  </>
)

export default App;
