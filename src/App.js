import React from 'react';
import './styles/styles.scss';
import Banner from './Banner.jsx'
import Formulario from './Formulario.jsx'
import CourseGrid from './CourseGrid.jsx';
import Course from './Course.jsx';
import MainMenu from './MainMenu.jsx'
import Historial from './Historial.jsx'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path='/' exact component={ Banner }/>
      <Route path='/cursos/:id' component={ Course }/>
      <Route path='/cursos' component={ CourseGrid }/>
      <Route path='/historial/:id' component={ Historial }/>
      <Route path='/historial' component={ Historial }/>
      <Route path='/formulario' component={ () => <Formulario name='Desde Ruta'/> }/>
      <Route component={() =>(
        <div className='ed-grid'>
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )}/>
    </Switch>
  </Router>
)

export default App;
