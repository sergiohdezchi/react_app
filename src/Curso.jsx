import React from 'react';
import PropTypes from 'prop-types'

//function

const mayorEdad = edad => edad > 18

//objecto
const persona = { 'nombre': 'Alberto', 'apellido': 'Quiron', 'edad': 29 }

const Curso = props => (
    <article className ="card">
        <div className ="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src={ props.image } alt={ props.title } />
        </div>
        <div className ="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 className ="t5 s-mb-2 s-center">
            { props.title }
        </h3>
        <div className ="s-mb-2 s-main-center">
            <div className ="card__teacher s-cross-center">
            <div className ="card__avatar s-mr-1">
                <div className ="circle img-container">
                <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/66f015b2-0dfb-4ba9-bd0d-f7a7e1855275.jpeg" alt="test" />
                </div>
            </div>
            <span className ="small">{ props.profesor } </span>
            </div>
        </div>
        <div className ="s-main-center">
            <a className ="button--ghost-alert button--tiny" href="http://www.google.com">{ `$ ${ props.price }` }</a>
        </div>
        </div>
    </article>
  )



  Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
  }

  Curso.defaultProps = {
      title: 'No hay titulo',
      image: 'https://www.creativefabrica.com/wp-content/uploads/2020/03/14/The-background-a-city-town-shadow-Graphics-3646294-1.jpg',
      price: '--',
      profesor: 'Sin profesor'
  }

  export default Curso 