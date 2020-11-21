import React from 'react';
import '../styles/styles.scss';
import Home from './Pages/Home.jsx'
import Form from './Pages/Form.jsx'
import Courses from './Pages/Courses.jsx';
import Course from './Pages/Course.jsx';
import MainMenu from './Organisms/MainMenu.jsx'
import History from './Pages/History.jsx' 
import Usuarios from './Pages/Users.jsx' 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => (
  <Router>
    <MainMenu/>
    <Switch>
      <Route path='/' exact component={ Home }/>
      <Route path='/cursos/:id' component={ Course }/>
      <Route path='/cursos' component={ Courses }/>
      <Route path='/historial/:id' component={ History }/>
      <Route path='/historial' component={ History }/>
      <Route path='/formulario' component={ () => <Form name='Desde Ruta'/> }/>
      <Route path='/usuarios' component={ () => <Usuarios name='Desde Ruta'/> }/>
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
