import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nombre: '',
            email: '',
            fecha: new Date()
        }

        this.cambiarNombre = this.cambiarNombre.bind(this)  
        this.cambiarEmail = this.cambiarEmail.bind(this)  
        this.cambiarFecha = this.cambiarFecha.bind(this)  
    }

    cambiarNombre(e) {
        this.setState({
            nombre: e.target.value
        })
    }

    cambiarEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    cambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }

    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha: {Math.ceil(this.state.fecha/1000)}</h4>
                <form>
                    <div className="ed-item form__item" id='nombre_id'>
                        <label>Nombre completo</label>
                        <input 
                        type="text"
                        onChange={ this.cambiarNombre }
                        />
                    </div>                    
                    <div className="ed-item form__item">
                        <label>Correo electronico</label>
                        <input 
                        type="email"
                        onChange={ this.cambiarEmail }
                        />
                    </div>                    
                    <div className="ed-item form__item">
                        <input className='button full' type='submit' value='Enviar' />
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.email}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const t = document.getElementById('nombre_id');
        console.log(t);
        // esto es una funcion de javascript
        this.intervaloFecha = setInterval(() => {
            this.cambiarFecha()
        }, 1000);
    }

    componentDidUpdate(prevProp, prevState) {
        console.log('--------')
        console.log(prevProp)
        console.log(prevState)
        console.log('---------')
    }

    componentWillUnmount() {
        clearInterval(this.intervaloFecha)
    }
}

export default Formulario;