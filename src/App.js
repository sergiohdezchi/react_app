import React from 'react';
import './styles/styles.scss';
import Banner from './Banner.jsx'
import Formulario from './Formulario.jsx'
import CourseGrid from './CourseGrid.jsx';

const App = () => (
  <>
    <Banner/>
    <CourseGrid/>
    <Formulario name='Pruebaname'/>
  </>
)

export default App;
